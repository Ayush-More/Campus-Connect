import  { useEffect, useState } from "react";
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
import { FetchChat } from "../../service/chats/chats";

function Sidebar() {
  const nav = useNavigate();
  const [searchQuery , setSearchQuery] = useState("");
  const LightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();
  const [conversations , setConversation] = useState([]);
  // const [conversations,setConversation]= useState([
  //   { chatName: "Test#1", latestMessage: "Message #1", timeStamp: "today" },
  //   { chatName: "Test#2", latestMessage: "Message #2", timeStamp: "today" },
  //   { chatName: "Test#3", latestMessage: "Message #3", timeStamp: "today" },
  // ]);

  const fetchData = async () => {
    try {
      const response = await FetchChat();
      console.log(response.data.results);
      if (response) {
        const data = response.data.results;
        console.log(data);
        setConversation(data);
      } else {
        console.log("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const filteredUsers = conversations.filter((user) =>
  user.chatName.toLowerCase().includes(searchQuery.toLowerCase()) ||
  user.users[0].name.toLowerCase().includes(searchQuery.toLowerCase())
);
  useEffect(() => {
    fetchData()
  }, []);
  
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className={`sb-conversation ${LightTheme ? "" : "dark"}`}>
          {filteredUsers.map((conversation, i) => {
            
            // Assign chatName based on conversation type
          const chatName = conversation.isGroupChat ? conversation.chatName : conversation.users[0].name;

            // Assign latestMessage or default if it's undefined
          const latestMessage = conversation.latestMessage || "No Message";
            return <ConversationItems
            chatName={chatName} latestMessage={latestMessage} timeStamp={conversation.timeStamp} key={i} id={conversation._id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
