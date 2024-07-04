
import "./../../assets/style/myStyle.css";
import dayjs from 'dayjs';
import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../store/Slice/themeSlice";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CircleIcon from "@mui/icons-material/Circle";
import { PickersDay } from '@mui/x-date-pickers';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Badge from '@mui/material/Badge';
import { getMonthEvent } from "../../service/calender/calender";

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
let event = null;

async function fakeFetch(date, { signal }) {
  
   event = await getMonthEvent({month:date.$M+1 , year:date.$y})
 
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysToHighlight = [];
      const personelEvent = [];
      for(const eventDate of event.data.data.ClubEvents){
        const daysOfMonth = new Date(eventDate.date).getDate();
        daysToHighlight.push(daysOfMonth)
      }
      for(const eventDate of event.data.data.PersonelEvents){
        const daysOfMonth = new Date(eventDate.date).getDate();
        personelEvent.push(daysOfMonth)
      }
      console.log(personelEvent)
      resolve({ daysToHighlight  , personelEvent});
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException('aborted', 'AbortError'));
    };
  });
}
console.log(event);
const initialValue = dayjs();

function ServerDay(props) {
  const { highlightedDays = [],personelEvent=[], day, outsideCurrentMonth, ...other } = props;
  // const personelDate = [1 ,2 , 3];
  // const finalDay= {
  //   club: highlightedDays,
  //   personel : personelDate,
  // }

  const isSelected =
    !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

    const ispersonel =
    !props.outsideCurrentMonth && personelEvent.indexOf(props.day.date()) >= 0;
    let badgeContent;
  if (isSelected) {
    badgeContent = "😊";
  } else if (ispersonel) {
    badgeContent = "😂";
  } else {
    badgeContent = undefined;
  }
  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={badgeContent}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}


function Sidebar() {

  const nav = useNavigate();
  const LightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();


  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([]);
  const [personelEvent, setPersonelEvent] = React.useState([]);

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight , personelEvent }) => {
        setHighlightedDays(daysToHighlight);
        setPersonelEvent(personelEvent);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== 'AbortError') {
          throw error;
        }

        
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    setPersonelEvent([])
    fetchHighlightedDays(date);
  };
  const [onClickDate , setOnClickDate] = React.useState(null);
  React.useEffect(()=>{
    {onClickDate? nav("/calender/event?day="+onClickDate.$D + "&month="+onClickDate.$M+"&year="+onClickDate.$y):""}
  },[onClickDate])


  return (
    <>
      <div className="sideBar">
        <div className={`sb-header ${LightTheme ? "" : "dark"}`}>
          <div>
            <IconButton>
              <AccountCircleIcon
                onClick={() => { nav("/profile") }}
                className={`icon ${LightTheme ? "" : "dark"}`}
              />
            </IconButton>
          </div>
          <div>

            <IconButton
              onClick={() => {
                nav("event");
              }}
            >
              <AssignmentIcon className={`icon ${LightTheme ? "" : "dark"}`} />
            </IconButton>
            <IconButton
              onClick={() => {
                nav("form");
              }}
            >
              <AddCircleOutlineIcon
                className={`icon ${LightTheme ? "" : "dark"}`}
              />
            </IconButton>
            <IconButton
              onClick={() => {
                dispatch(toggleTheme());
              }}
            >
              {LightTheme && (
                <LightModeIcon className={`icon ${LightTheme ? "" : "dark"}`} />
              )}
              {!LightTheme && (
                <NightlightIcon
                  className={`icon ${LightTheme ? "" : "dark"}`}
                />
              )}
            </IconButton>
            <IconButton
              onClick={() => {
                nav("/");
              }}
            >
              <ExitToAppIcon className={`icon ${LightTheme ? "" : "dark"}`} />
            </IconButton>
          </div>
        </div>
        <div className={`sb-color ${LightTheme ? "" : "dark"}`}>
          <div className="con-color">
            <div className="con-colorName">
            <div className="con-circle">
                😒
              </div>
              <div className="con-den">Club Event</div>
            </div>
            <div className="con-colorName">
              <div className="con-circle">
                😂
              </div>
              <div className="con-den">Personel</div>
            </div>
          </div>
          {/* <div className="con-color">
            <div>
              <CircleIcon
                style={{ color: "blue" }}
                className="con-circle"
              />
            </div>
            <div className="con-den">personel Event</div>

          </div> */}
        </div>
        <div className={`sb-conversation ${LightTheme ? "" : "dark"}`}>
          <LocalizationProvider dateAdapter={AdapterDayjs} className={`menuItem ${LightTheme ? "" : "dark"}`}>
            <StaticDatePicker
              className={`menuItem ${LightTheme ? "" : "dark"}`}
              defaultValue={initialValue}
              loading={isLoading}
              onChange={(e)=> {setOnClickDate(e)}}
              onMonthChange={handleMonthChange}
              renderLoading={() => <DayCalendarSkeleton />}
              slots={{
                day: ServerDay,
                
              }}
              slotProps={{
                day: {
                  highlightedDays,
                },
              }}
            />
          </LocalizationProvider>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
