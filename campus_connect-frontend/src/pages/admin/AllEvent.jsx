import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import logo from "./../../assets/images/live-chat_16px.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "./../../assets/style/myStyle.css";
import "swiper/css";
import "swiper/css/effect-creative";
import "./../../assets/style/myStyle.css";
import DeleteIcon from '@mui/icons-material/Delete';
import {Mousewheel, EffectCreative } from "swiper/modules";
import {SeeEvent , deleteEvent} from "./../../service/admin/admin"
import { useEffect , useState} from "react";
// import image from "./../../assets/images/image1711797448530.jpg";

function AllEvent() {
  const [remove , setRemove] = useState(0);
    const LightTheme = useSelector((state)=> state.themeKey);
    const [clubEvent , setClubEvent] = useState([]);
      const handleEvent = async() =>{
        const result = await SeeEvent();
        if(result){
          setClubEvent(result.data.data);
          console.log(result);
          console.log("Success");
        }
      }

      useEffect(()=>{
        handleEvent()
      },[remove])
  return (
    <>
    <div className="list-container">
    <div className={`chatArea-header ${LightTheme ? "" : "dark"}`}>
          <IconButton>
              <img src={logo} alt="logo" />
            </IconButton>
          <p className={`chatArea-text ${LightTheme ? "" : "dark"}`}>
            ALL EVENT
          </p>
    </div >
    <div className="event-cards">
    <Swiper
          grabCursor={true}
          mousewheel={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[Mousewheel ,EffectCreative]}
          className="mySwiper"
        >{clubEvent.map((event,i)=>{return  <SwiperSlide key={i}>
          <div  className={`event-card ${LightTheme ? "" : "dark"}`}>
            <div className="eventTitle">
            <div style={{flex:"0.95", display:"flex",justifyContent:"center"}}><p >{event.tittle}</p></div>
            <IconButton style={{flex:"0.05" }} onClick={()=> {deleteEvent(event._id); setRemove(!remove)}}>
              <DeleteIcon/>
            </IconButton>
            </div>
            <div className="eventSection"><img className="event-image" src={event.image.secure_url} alt="Event Poster" />
            <div className="event-Description">
              <p >
              {event.Description}
            </p>
            </div>
            </div>
            <div className="eventSection">
              <div className="eventDetails">
                <p><span className="Event-head">Venue: </span><span className="Event-ans">{event.venue}</span></p>
                <p><span className="Event-head">Date: </span><span className="Event-ans">{event.date}</span></p>
                <p><span className="Event-head">Time: </span><span className="Event-ans">{event.time}</span></p>
                </div>
                <div className="eventDetails">
                  <p><span className="Event-head">Mode: </span><span className="Event-ans">{event.mode}</span></p>
                  <p><span className="Event-head">Department: </span><span className="Event-ans">{event.Department}</span></p>
                  <p><span className="Event-head">Phone Number: </span><span className="Event-ans">{event.queryContact}</span></p>
                  </div>
            </div>
          </div>
        </SwiperSlide> })}
        </Swiper>
    </div>
    </div>
    </>
  )
}

export default AllEvent