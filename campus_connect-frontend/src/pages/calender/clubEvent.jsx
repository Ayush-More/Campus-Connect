import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { AllEvent } from "./../../service/calender/calender";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-creative";
import "./../../assets/style/myStyle.css";
import queryString from "query-string";
import { Mousewheel, EffectCreative } from "swiper/modules";
import "dotenv";

function ClubEvent() {
  const location = useLocation();
  const [clubEvent, setClubEvent] = useState([]);
  const [personelEvent, setPersonelEvent] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const queryParams = queryString.parse(location.search);
  const handleEvent = async () => {
    const result = await AllEvent();
    if (result) {
      setClubEvent(result.data.data.ClubEvents);
      setPersonelEvent(result.data.data.Personel);
      console.log(result);
      console.log("Success");
    }
  };
  useEffect(() => {
    handleEvent();
  }, []);

  const LightTheme = useSelector((state) => state.themeKey);

  const filteredClubEvent = clubEvent.filter((event) => {
    const matchesSearchQuery = searchQuery
      ? event.tittle.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    const eventDate = new Date(event.date);
    console.log(eventDate);
    console.log(queryParams.day);
    const matchDate = queryParams.day
      ? eventDate.getDate() === parseInt(queryParams.day) &&
        eventDate.getMonth() === parseInt(queryParams.month) && // JavaScript Date months are 0-indexed
        eventDate.getFullYear() === parseInt(queryParams.year)
      : true;
    console.log(matchesSearchQuery, matchDate);
    return matchesSearchQuery && matchDate;
  });

  const filteredPersonelEvent = personelEvent.filter((event) => {
    const matchesSearchQuery = searchQuery
      ? event.Title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    const eventDate = new Date(event.date);
    console.log(queryParams.day);
    console.log(eventDate.getMonth());
    const matchDate = queryParams.day
      ? eventDate.getDate() === parseInt(queryParams.day) &&
        eventDate.getMonth() === parseInt(queryParams.month) && // JavaScript Date months are 0-indexed
        eventDate.getFullYear() === parseInt(queryParams.year)
      : true;
    console.log(matchesSearchQuery, matchDate);
    return matchesSearchQuery && matchDate;
  });
  useEffect(() => {
    filteredClubEvent;
    filteredPersonelEvent;
  }, [searchQuery, queryParams.date]);
  return (
    <>
      <div className={`event-container ${LightTheme ? "" : "con-dark"}`}>
        <div className={`sb-search ${LightTheme ? "" : "dark"}`}>
          <IconButton>
            <SearchIcon className={`icon ${LightTheme ? "" : "dark"}`} />
          </IconButton>
          <input
            type="text"
            className={`Search-box ${LightTheme ? "" : "dark"}`}
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
            modules={[Mousewheel, EffectCreative]}
            className="mySwiper"
          >
            {filteredClubEvent.map((event, i) => {
              console.log(clubEvent);
              const DateObject = new Date(event.date);
              return (
                <SwiperSlide key={i}>
                  <div className={`event-card ${LightTheme ? "" : "dark"}`}>
                    <div className={`eventTitle ${LightTheme ? "" : "dark"}`}>
                      <p>{event.tittle}</p>
                    </div>
                    <div className="eventSection">
                      <img
                        className="event-image"
                        src={event.image.secure_url}
                        alt="Event Poster"
                      />
                      <div
                        className={`event-Description ${
                          LightTheme ? "" : "dark"
                        }`}
                      >
                        <p>{event.Description}</p>
                      </div>
                    </div>
                    <div className="eventSection">
                      <div className="eventDetails">
                        <p>
                          <span className="Event-head ">Venue:</span>
                          <span
                            className={`Event-ans ${LightTheme ? "" : "dark"}`}
                          >
                            {event.venue}
                          </span>
                        </p>
                        <p>
                          <span className="Event-head ">Date:</span>
                          <span
                            className={`Event-ans ${LightTheme ? "" : "dark"}`}
                          >{`${DateObject.getDate()}-${DateObject.getMonth()}-${DateObject.getFullYear()}`}</span>
                        </p>
                        <p>
                          <span className="Event-head ">Time:</span>
                          <span
                            className={`Event-ans ${LightTheme ? "" : "dark"}`}
                          >
                            {event.time}
                          </span>
                        </p>
                      </div>
                      <div className="eventDetails">
                        <p>
                          <span className="Event-head">Mode:</span>
                          <span
                            className={`Event-ans ${LightTheme ? "" : "dark"}`}
                          >
                            {event.mode}
                          </span>
                        </p>
                        <p>
                          <span className="Event-head">Department:</span>
                          <span
                            className={`Event-ans ${LightTheme ? "" : "dark"}`}
                          >
                            {event.Department}
                          </span>
                        </p>
                        <p>
                          <span className="Event-head">Phone Number:</span>
                          <span
                            className={`Event-ans ${LightTheme ? "" : "dark"}`}
                          >
                            {event.queryContact}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            {filteredPersonelEvent.map((event, i) => {
              const DateObject = new Date(event.date);
              return (
                <SwiperSlide key={i}>
                  <div className={`event-card ${LightTheme ? "" : "dark"}`}>
                    <div
                      className="eventTitle"
                      style={{ fontSize: "35px", margin: "10px 0px" }}
                    >
                      <p>{event.Title}</p>
                    </div>

                    <div
                      className="eventDetails"
                      style={{ margin: "10px 25px" }}
                    >
                      <ul>
                        <li style={{ margin: "20px 10px" }}>
                          <span
                            className="Event-head"
                            style={{
                              fontSize: "25px",
                              padding: "20px 10px",
                              margin: "30px 0px",
                            }}
                          >
                            Date:{" "}
                          </span>
                          <span
                            className={`Event-ans ${LightTheme ? "" : "dark"}`}
                            style={{ fontSize: "25px", padding: "20px 10px" }}
                          >{`${DateObject.getDate()}-${DateObject.getMonth()}-${DateObject.getFullYear()}`}</span>
                        </li>
                        <li style={{ margin: "20px 10px" }}>
                          <span
                            className="Event-head"
                            style={{ fontSize: "25px", padding: "10px 10px" }}
                          >
                            Time:{" "}
                          </span>
                          <span
                            className={`Event-ans ${LightTheme ? "" : "dark"}`}
                            style={{ fontSize: "25px", padding: "20px 10px" }}
                          >
                            {event.time}
                          </span>
                        </li>
                        <li style={{ margin: "20px 10px" }}>
                          <span
                            className="Event-head"
                            style={{ fontSize: "25px", padding: "10px 10px" }}
                          >
                            Discription:{" "}
                          </span>
                          <span
                            className={`Event-ans ${LightTheme ? "" : "dark"}`}
                            style={{ fontSize: "25px", padding: "20px 10px" }}
                          >
                            {event.discription}
                          </span>
                        </li>
                        <li style={{ margin: "20px 10px" }}>
                          <span
                            className="Event-head"
                            style={{ fontSize: "25px", padding: "10px 10px" }}
                          >
                            Link:{" "}
                          </span>
                          <span
                            className={`Event-ans ${LightTheme ? "" : "dark"}`}
                            style={{ fontSize: "25px", padding: "20px 10px" }}
                          >
                            {event.conferenceLink}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ClubEvent;
