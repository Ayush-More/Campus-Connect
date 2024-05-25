import { useParams } from "react-router-dom"
import { useEffect, useState  } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
// import MessageOther from "./MessageOther";
// import Messageself from "./Messageself";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { sendMessage , allMessages } from "../../service/chats/message";

function ChatArea() {
  const userData = JSON.parse(localStorage.getItem("user"));
  const {chat_id} = useParams();
  // const [allContent , setAllContent] = useState([]);
  const [messageContent, setMessageContent] = useState({
    content:"",
    chatId:chat_id,
  });
  console.log(chat_id)
  const LightTheme = useSelector((state) => state.themeKey);
  const data = { name: "Ayush" };
  // const handleSubmit = async() => {
  //   const data = await sendMessage(messageContent);
  //   if(data){
  //     console.log(data);
  //     setMessageContent({
  //       ...messageContent,
  //       content: ""
  //     });
  //   }
  // }

  // const handleAllMessages = async() =>{
  //   const result = await allMessages(chat_id);
  //   console.log(result.data.data.sender._id);
  //   // setAllContent(result.data.data)
  // }
  
  // useEffect(()=>{
  //   handleAllMessages()
  // },[])
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          duration: "0.3",
        }}
        className={`chatArea-container ${LightTheme ? "" : "con-dark"}`}
      >
        <div className={`chatArea-header ${LightTheme ? "" : "dark"}`}>
          <p className="con-icon">{data.name[0]}</p>
          <p className={`chatArea-text ${LightTheme ? "" : "dark"}`}>
            {data.name}
          </p>
          <IconButton>
            <DeleteIcon className={`icon ${LightTheme ? "" : "dark"}`} />
          </IconButton>
        </div>
        <div className={`chatArea-messages ${LightTheme ? "" : "dark"}`}>
        {/* {allContent
            .slice(0)
            .reverse()
            .map((message, index) => {
              const sender = message.sender;
              const self_id = userData.data._id;
              <Messageself props={message} key={index} />
            //   if (sender._id === self_id) {
            //     // console.log("I sent it ");
            //     return <Messageself props={message} key={index} />;
            //   } else {
            //     // console.log("Someone Sent it");
            //     return <MessageOther props={message} key={index} />;
            //   }
            })} */}
      
        </div>
        <div className={`text-input-area ${LightTheme ? "" : "dark"}`}>
          <input
            className={`Search-box ${LightTheme ? "" : "dark"}`}
            type="text"
            placeholder="Type Message"
            value={messageContent.content}
            onChange={(e) => {
              setMessageContent({
                ...messageContent,
              content: e.target.value});
            }}
            onKeyDown={(event)=>{
              if(event.code === "Enter"){
                // handleSubmit()
                setMessageContent({
                  ...messageContent,
                  content:""
                })
              }
            }}
          />
          <IconButton >
            <SendIcon className={`icon ${LightTheme ? "" : "dark"}`} />
          </IconButton>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ChatArea;
