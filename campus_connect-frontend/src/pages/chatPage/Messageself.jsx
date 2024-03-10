
function Messageself() {
  const data = { content: "My Name is Ayush More" };
  return (
    <div className="self-message-container">
      <div className="messageBox">
        <p style={{ color: "black" }}>{data.content}</p>
        <p className="self-timeStamp">12:00am</p>
      </div>
    </div>
  );
}

export default Messageself;
