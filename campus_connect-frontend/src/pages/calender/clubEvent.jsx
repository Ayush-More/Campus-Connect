import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { SeeEvent } from "../../service/admin/admin";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "./../../assets/style/myStyle.css";
import {Mousewheel, EffectCreative } from "swiper/modules";


function ClubEvent() {
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
      },[])
 
  const LightTheme = useSelector((state) => state.themeKey);
  return (
    <>
      <div  className={`event-container ${LightTheme ? "" : "con-dark"}`}>
        <div className={`sb-search ${LightTheme ? "" : "dark"}`}>
          <IconButton>
            <SearchIcon className={`icon ${LightTheme ? "" : "dark"}`} />
          </IconButton>
          <input
            type="text"
            className={`Search-box ${LightTheme ? "" : "dark"}`}
            placeholder="Search..."
          />
        </div>
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
            <div className="eventTitle"><p >{event.tittle}</p></div>
            <div className="eventSection"><img className="event-image"src="./../../assets/images/club_event3.jpg" alt="Event Poster" />
            <div className="event-Description">
              <p >
              {event.Description}
            </p>
            </div>
            </div>
            <div className="eventSection">
              <div className="eventDetails">
                <p><span className="Event-head">Venue:</span><span className="Event-ans">{event.venue}</span></p>
                <p><span className="Event-head">date:</span><span className="Event-ans">{event.date}</span></p>
                <p><span className="Event-head">Time:</span><span className="Event-ans">{event.time}</span></p>
                </div>
                <div className="eventDetails">
                  <p><span className="Event-head">Mode:</span><span className="Event-ans">{event.mode}</span></p>
                  <p><span className="Event-head">Department:</span><span className="Event-ans">{event.Department}</span></p>
                  <p><span className="Event-head">Phone Number:</span><span className="Event-ans">{event.queryContact}</span></p>
                  </div>
                  </div>
          </div>
        </SwiperSlide> })}
        {clubEvent.map((event,i)=>{return  <SwiperSlide key={i}>
          <div  className={`event-card ${LightTheme ? "" : "dark"}`}>
            <div className="eventTitle"><p >{event.tittle}</p></div>
            <div className="eventSection"><img className="event-image"src="./../../assets/images/club_event3.jpg" alt="Event Poster" />
            <div className="event-Description">
              <p >
              {event.Description}
            </p>
            </div>
            </div>
            <div className="eventSection">
              <div className="eventDetails">
                <p><span className="Event-head">Venue:</span><span className="Event-ans">{event.venue}</span></p>
                <p><span className="Event-head">date:</span><span className="Event-ans">{event.date}</span></p>
                <p><span className="Event-head">Time:</span><span className="Event-ans">{event.time}</span></p>
                </div>
                <div className="eventDetails">
                  <p><span className="Event-head">Mode:</span><span className="Event-ans">{event.mode}</span></p>
                  <p><span className="Event-head">Department:</span><span className="Event-ans">{event.Department}</span></p>
                  <p><span className="Event-head">Phone Number:</span><span className="Event-ans">{event.queryContact}</span></p>
                  </div>
                  </div>
          </div>
        </SwiperSlide> })}
        </Swiper>
      </div>
        
      </div>
    </>
  );
}

export default ClubEvent;
