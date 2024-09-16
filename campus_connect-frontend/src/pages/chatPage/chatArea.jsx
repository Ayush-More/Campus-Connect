import { useParams } from "react-router-dom"
import { AccessChat } from "../../service/chats/chats.js";
import { sendMessage , allMessages } from "../../service/chats/message.js";
import { useEffect, useState  } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageOther from "./MessageOther";
import Messageself from "./Messageself";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import {io} from "socket.io-client"

const ENDPOINT = "http://localhost:8080"
// var socket , chat;
function ChatArea (){
  const userData = JSON.parse(localStorage.getItem("user"));
  // console.log(userData)
  const [chatDetail , setChatDetail] = useState({latestMessage: null, _id: '', chatName: '', isGroupChat: null, users:null})
  const {chat_id} = useParams();
  const[allContent , setAllContent] = useState([]);
  const [socket , setSocket] = useState(null)
  const [socketConnectionStatus , setSocketConnectionStatus] = useState(false)
  const[allContentCopy , setAllContentCopy] = useState([]);
  useEffect(()=>{
    setSocket(io(ENDPOINT))
    // console.log(socket)
  },[])
  
  useEffect(()=>{
    socket?.emit("setup", userData._id , ()=>{
    console.log("setup")
  });
  socket?.on("connected" , ()=>{
    console.log("connected")
    setSocketConnectionStatus(!socketConnectionStatus);
  })
  },[socket])
 
  useEffect(()=>{
    socket?.on("message recieved",(newMessage)=>{
      console.log("message received");
      // setAllContent([...allContent] , newMessage)
      if(!allContentCopy || allContentCopy._id !== newMessage._id ){
        //empty
      }else{
        setAllContent([...allContent] , newMessage)
      }
    })
   },[socket])

  const [messageContent, setMessageContent] = useState({
    content:"",
    chatId:chat_id,
  });
  const LightTheme = useSelector((state) => state.themeKey);
  
  const handleChat = async () => {
    try {
      const dataChat = await AccessChat(chat_id);
      // console.log('Data from API:', dataChat.data.isChat);
      const data = dataChat.data.isChat;
      // console.log(data)
      setChatDetail(data);
      // console.log(chatDetail)
    } catch (error) {
      console.error("Failed to fetch chat data", error);
    }
  };

  useEffect(() => {
    handleChat();
  }, [chat_id]); // Run handleChat when chat_id changes
 
  const handleSubmit = async() => {
    const data = await sendMessage(messageContent);
    if(socketConnectionStatus){
      socket?.emit("new_messages" , data.data.data , ()=>{
        console.log("Messaged send");
      })
    }
    if(data){
      console.log(data);
      setMessageContent({
        ...messageContent,
        content: ""
      });
    }
  }

  const handleAllMessages = async() =>{
    const result = await allMessages(chat_id);
    // console.log(result.data.messages);
    setAllContent(result.data.messages)
    // console.log(allContent)
  }
  useEffect(()=>{
    handleAllMessages()
    socket?.emit("join chat" , chat_id , ()=>{
      console.log("chat joined")
    })
    setAllContentCopy(allContent);
    console.log(allContentCopy);
  },[chat_id])
  // console.log(allContent)
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
          <p className="con-icon">{chatDetail.chatName.length > 0 ?chatDetail.isGroupChat?chatDetail.chatName[0]:chatDetail.users[0]._id === userData._id ? chatDetail.users[1].name[0]: chatDetail.users[0].name[0]: "" }</p>
          <p className={`chatArea-text ${LightTheme ? "" : "dark"}`}>
            {chatDetail.chatName.length > 0 ?chatDetail.isGroupChat?chatDetail.chatName:chatDetail.users[0]._id === userData._id ? chatDetail.users[1].name: chatDetail.users[0].name: "" }
          </p>
          <IconButton>
            <DeleteIcon className={`icon ${LightTheme ? "" : "dark"}`} />
          </IconButton>
        </div>
        <div className={`chatArea-messages ${LightTheme ? "" : "dark"}`}>
        {allContent
        .slice(0)
            .map((message, index) => {
              // console.log(message)
              const sender = message.sender;
              const self_id = userData._id;
          
              if (sender._id === self_id) {
                // console.log("I sent it ");
                return <Messageself message={message.content} key={index} />;
              } else {
                // console.log("Someone Sent it");
                return <MessageOther message={message.content} name={message.sender.name} key={index} />;
              }
            })}
      
        </div>
        <div className={`text-input-area ${LightTheme ? "" : "dark"}`}>
          <input
            className={`Search-box ${LightTheme ? "" : "dark"}`}
            type="text"
            placeholder="Type Message"
            value={messageContent.content}
            onChange={(e) => {
              // console.log(chatDetail)
              setMessageContent({
                ...messageContent,
              content: e.target.value});
            }}
            onKeyDown={(event)=>{
              if(event.code === "Enter"){
                handleSubmit()
                setMessageContent({
                  ...messageContent,
                  content:""
                })
              }
            }}
          />
          <IconButton >
            <SendIcon className={`icon ${LightTheme ? "" : "dark"}`} onClick={()=>{handleSubmit()}} />
          </IconButton>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ChatArea;
