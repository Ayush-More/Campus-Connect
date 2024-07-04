import PropTypes from "prop-types"

function Messageself(props) {
  // const data = { content: "My Name is Ayush More" };
  console.log(props.message)
  return (
    <div className="self-message-container">
      <div className="messageBox">
        <p style={{ color: "black" }}>{props.message}</p>
        <p className="self-timeStamp">12:00am</p>
      </div>
    </div>
  );
}

Messageself.propTypes = {
  message : PropTypes.string.isRequired
}

export default Messageself;
