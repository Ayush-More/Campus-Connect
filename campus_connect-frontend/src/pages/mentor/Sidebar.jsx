import  { useState } from "react";
import ConversationItems from "./conversationItems";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../store/Slice/themeSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import NightlightIcon from "@mui/icons-material/Nightlight";

function Sidebar() {
  const nav = useNavigate();
  const LightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();
  const [conversations,setConversation]= useState([
    { name: "Test#1", lastMessage: "Message #1", timeStamp: "today" },
    { name: "Test#2", lastMessage: "Message #2", timeStamp: "today" },
    { name: "Test#3", lastMessage: "Message #3", timeStamp: "today" },
  ]);
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
        <div className={`sb-conversation ${LightTheme ? "" : "dark"}`}>
          {conversations.map((conversation, i) => {
            return <ConversationItems
            name={conversation.name} lastMessage={conversation.lastMessage} timeStamp={conversation.timeStamp} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
