import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../store/Slice/themeSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";
import NightlightIcon from "@mui/icons-material/Nightlight";

function Sidebar() {
  const nav = useNavigate();
  const LightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();

  // const [conversations,setConversation]= useState([
  //   { chatName: "Test#1", latestMessage: "Message #1", timeStamp: "today" },
  //   { chatName: "Test#2", latestMessage: "Message #2", timeStamp: "today" },
  //   { chatName: "Test#3", latestMessage: "Message #3", timeStamp: "today" },
  // ]);

  
  
  return (
    <>
      <div className="sideBar">
        <div className={`sb-header ${LightTheme ? "" : "dark"}`}>
          <div>
            <IconButton
            onClick={() => {
              nav("/profile");
            }}>
              <AccountCircleIcon
                className={`icon ${LightTheme ? "" : "dark"}`}
              />
            </IconButton>
          </div>
          <div>
            <IconButton
              onClick={() => {
                nav("online");
              }}
            >
              <PersonAddIcon className={`icon ${LightTheme ? "" : "dark"}`} />
            </IconButton>
            <IconButton
              onClick={() => {
                nav("group");
              }}
            >
              <GroupAddIcon className={`icon ${LightTheme ? "" : "dark"}`} />
            </IconButton>
            <IconButton
              onClick={() => {
                nav("create-group");
              }}
            >
              <AddCircleIcon className={`icon ${LightTheme ? "" : "dark"}`} />
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
        <div className={`sb-conversation ${LightTheme ? "" : "dark"}`}>

<p  className={`eventTitle ${LightTheme ? "" : "dark"}`} style={{fontSize:"30px", paddingTop:"10px"}}>Category</p>

<div className="RoadmapTag">
<p className="tag"> AI & ML</p>
<p className="tag"> Frontend</p>
<p className="tag"> Backend</p>
<p className="tag"> Database</p>
<p className="tag"> AI & ML</p>
             </div>
      </div>
 </div>

    </>
  );
}

export default Sidebar;
