import PropTypes from "prop-types";

function MessageOther(props) {
  // const data = { name: "Ayush", content: "My Name is Atharv" };
  return (
    <div className="other-message-container">
      <div className="messageBox1">
        <p className="con-icon">{props.name[0]}</p>
        <div className="other-text-content">
          <p className="con-title">{props.name}</p>
          <p className="con-lastMessage">{props.message}</p>
          {/* <p className="self-timeStamp">12:00am</p> */}
        </div>
      </div>
    </div>
  );
}

MessageOther.propTypes ={
  message: PropTypes.string.isRequired,
  name: PropTypes.string
}

export default MessageOther;
