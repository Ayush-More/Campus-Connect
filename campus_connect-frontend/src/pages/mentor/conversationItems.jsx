import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ConversationItems(props) {
  const LightTheme = useSelector((state) => state.themeKey);
  const nav = useNavigate();
  
  return (
    <div
      className={`conversation-container ${LightTheme ? "" : "dark"}`}
      onClick={() => {
        nav("chats");
      }}
    >
      <p className="con-icon">{props.name[0]}</p>
      <p className={`sb-title${LightTheme ? "" : "dark"}`}>{props.name}</p>
      <p className={`con-lastMessage ${LightTheme ? "" : "dark"}`}>
        {props.lastMessage}
      </p>
      <p className={`con-timeStamp ${LightTheme ? "" : "dark"}`}>
        {props.timeStamp}
      </p>
    </div>
  );
}

export default ConversationItems;
