import { useParams } from "react-router-dom";
import { AccessChat } from "../../service/chats/chats.js";
import { sendMessage, allMessages } from "../../service/chats/message.js";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageOther from "./MessageOther";
import Messageself from "./Messageself";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { io } from "socket.io-client";

const ENDPOINT = "http://localhost:8080";

function ChatArea() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [chatDetail, setChatDetail] = useState({
    latestMessage: null,
    _id: "",
    chatName: "",
    isGroupChat: null,
    users: null,
  });
  const { chat_id } = useParams();
  const [allContent, setAllContent] = useState([]);
  const [socket, setSocket] = useState(null);
  const [socketConnectionStatus, setSocketConnectionStatus] = useState(false);
  const [allContentCopy, setAllContentCopy] = useState([]);
  const [messageContent, setMessageContent] = useState({
    content: "",
    chatId: chat_id,
  });
  const LightTheme = useSelector((state) => state.themeKey);

  useEffect(() => {
    const newSocket = io(ENDPOINT);
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.emit("setup", userData._id);
    socket.on("connected", () => {
      setSocketConnectionStatus(true);
    });
    return () => {
      socket.off("connected");
    };
  }, [socket, userData._id]);

  useEffect(() => {
    if (!socket) return;
    socket.on("message recieved", (newMessage) => {
      if (!allContentCopy.some((message) => message._id === newMessage._id)) {
        setAllContent((prev) => [...prev, newMessage]);
      }
    });
    return () => {
      socket.off("message recieved");
    };
  }, [socket, allContentCopy]);

  const handleChat = async () => {
    try {
      const dataChat = await AccessChat(chat_id);
      setChatDetail(dataChat.data.isChat);
    } catch (error) {
      console.error("Failed to fetch chat data", error);
    }
  };

  useEffect(() => {
    handleChat();
  }, [chat_id]);

  const handleSubmit = async () => {
    const data = await sendMessage(messageContent);
    if (socketConnectionStatus) {
      socket.emit("new_messages", data.data.data);
    }
    setMessageContent({
      ...messageContent,
      content: "",
    });
  };

  const handleAllMessages = async () => {
    const result = await allMessages(chat_id);
    setAllContent(result.data.messages);
    setAllContentCopy(result.data.messages);
  };

  useEffect(() => {
    handleAllMessages();
    if (socket) {
      socket.emit("join chat", chat_id);
    }
  }, [chat_id, socket]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: "0.3" }}
        className={`chatArea-container ${LightTheme ? "" : "con-dark"}`}
      >
        <div className={`chatArea-header ${LightTheme ? "" : "dark"}`}>
          <p className="con-icon">
            {chatDetail.chatName.length > 0
              ? chatDetail.isGroupChat
                ? chatDetail.chatName[0]
                : chatDetail.users[0]._id === userData._id
                ? chatDetail.users[1].name[0]
                : chatDetail.users[0].name[0]
              : ""}
          </p>
          <p className={`chatArea-text ${LightTheme ? "" : "dark"}`}>
            {chatDetail.chatName.length > 0
              ? chatDetail.isGroupChat
                ? chatDetail.chatName
                : chatDetail.users[0]._id === userData._id
                ? chatDetail.users[1].name
                : chatDetail.users[0].name
              : ""}
          </p>
          <IconButton>
            <DeleteIcon className={`icon ${LightTheme ? "" : "dark"}`} />
          </IconButton>
        </div>
        <div className={`chatArea-messages ${LightTheme ? "" : "dark"}`}>
          {allContent.map((message, index) => {
            const sender = message.sender;
            const self_id = userData._id;
            if (sender._id === self_id) {
              return <Messageself message={message.content} key={index} />;
            } else {
              return (
                <MessageOther
                  message={message.content}
                  name={message.sender.name}
                  key={index}
                />
              );
            }
          })}
        </div>
        <div className={`text-input-area ${LightTheme ? "" : "dark"}`}>
          <input
            className={`Search-box ${LightTheme ? "" : "dark"}`}
            type="text"
            placeholder="Type Message"
            value={messageContent.content}
            onChange={(e) =>
              setMessageContent({
                ...messageContent,
                content: e.target.value,
              })
            }
            onKeyDown={(event) => {
              if (event.code === "Enter") {
                handleSubmit();
              }
            }}
          />
          <IconButton>
            <SendIcon
              className={`icon ${LightTheme ? "" : "dark"}`}
              onClick={handleSubmit}
            />
          </IconButton>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ChatArea;
