import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

function ConversationItems(props) {
  const LightTheme = useSelector((state) => state.themeKey);
  const nav = useNavigate();
  
  return (
    <div
      className={`conversation-container ${LightTheme ? "" : "dark"}`}
      onClick={() => {
        nav("chats/"+ props.id );
      }}
    >
      <p className="con-icon">{props.chatName[0]}</p>
      <p className={`sb-title${LightTheme ? "" : "dark"}`}>{props.chatName}</p>
      <p className={`con-lastMessage ${LightTheme ? "" : "dark"}`}>
        {props.latestMessage}
      </p>
      <p className={`con-timeStamp ${LightTheme ? "" : "dark"}`}>
        {props.timeStamp}
      </p>
    </div>
  );
}

ConversationItems.propTypes = {
  chatName: PropTypes.string.isRequired,
  latestMessage: PropTypes.string,
  timeStamp: PropTypes.string,
  id : PropTypes.string
};
export default ConversationItems;
