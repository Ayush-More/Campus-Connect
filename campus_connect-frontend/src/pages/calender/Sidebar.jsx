
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

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */
function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      const daysToHighlight = [1, 2, 3].map(() => getRandomNumber(1, daysInMonth));

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException('aborted', 'AbortError'));
    };
  });
}

const initialValue = dayjs('2022-04-17');

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? '🌚' : undefined}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}


function Sidebar() {

  const nav = useNavigate();
  const LightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();

  const Academic = [{
    date: "15-02-2022",
    eventName: "SEMINAR ON MACHINE LEARNING"
  }, {
    "date": "28-03-2022",
    "eventName": "WORKSHOP ON DATA ANALYSIS"
  }, {
    "date": "28-03-2022",
    "eventName": "WORKSHOP ON DATA ANALYSIS"
  }
  ]

  const clubEvent = [
    {
      tittle: "Tech Seminar on AI and ML",
      venue: "Auditorium A",
      date: "10-02-2024",
      time: "10:00:00",
      Description:
        "A seminar on the latest advancements in Artificial Intelligence and Machine Learning technologies.",
      queryContact: 1234567890,
      Registrationlink: "https://example.com/seminar-registration",
      type: "Seminar",
      mode: "Offline",
      dressCode: "Formal",
      Department: "Computer Science",
      EventImage: "./../../assets/images/club_event1.jpg",
    },
    {
      tittle: "CodeFest Hackathon 2024",
      venue: "Convention Center",
      date: "15-03-2024",
      time: "09:00:00",
      Description:
        "A 24-hour hackathon for developers to showcase their coding skills and build innovative projects.",
      queryContact: 9876543210,
      Registrationlink: "https://example.com/hackathon-registration",
      type: "Hackathon",
      mode: "Hybrid",
      dressCode: "Casual",
      Department: "Information Technology",
      EventImage: "./../../assets/images/club_event2.jpg"
    },
    {
      tittle: "Tech Company Recruitment Drive",
      venue: "Campus Placement Office",
      date: "20-04-2024",
      time: "11:30:00",
      Description:
        "A recruitment drive conducted by a leading tech company to hire fresh talent from our institution.",
      queryContact: 7654321098,
      Registrationlink: "https://example.com/recruitment-registration",
      type: "Recruitment",
      mode: "Offline",
      dressCode: "Business Casual",
      Department: "All Departments",
      EventImage: "./../../assets/images/club_event3.jpg"
    },
  ];

  const Personel = [{
    Title: "TEAM MEETING",
    time: "09:00:00",
    date: "15-02-2022",
    conferenceLink: "https://example.com/meeting",
    discription: "Weekly team meeting to discuss project updates."
  }, {
    Title: "TRAINING SESSION",
    time: "13:30:00",
    date: "28-03-2022",
    conferenceLink: "https://example.com/training",
    discription: "Training session on new software tools for the team."
  }

  ]
  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
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
    fetchHighlightedDays(date);
  };



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
              <div>
                <CircleIcon
                  style={{ color: "yellow" }}
                  className="con-circle"
                />
              </div>
              <div className="con-den">Club Event</div>
            </div>
            <div className="con-colorName">
              <div>
                <CircleIcon
                  style={{ color: "red" }}
                  className="con-circle"
                />
              </div>
              <div className="con-den">Academic</div>
            </div>
          </div>
          <div className="con-color">
            <div>
              <CircleIcon
                style={{ color: "blue" }}
                className="con-circle"
              />
            </div>
            <div className="con-den">personel Event</div>

          </div>
        </div>
        <div className={`sb-conversation ${LightTheme ? "" : "dark"}`}>
          <LocalizationProvider dateAdapter={AdapterDayjs} className={`menuItem ${LightTheme ? "" : "dark"}`}>
            <StaticDatePicker
              className={`menuItem ${LightTheme ? "" : "dark"}`}
              defaultValue={initialValue}
              loading={isLoading}
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
