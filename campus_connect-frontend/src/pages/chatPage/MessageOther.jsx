import React from "react";

function MessageOther() {
  const data = { name: "Ayush", content: "My Name is Atharv" };
  return (
    <div className="other-message-container">
      <div className="messageBox1">
        <p className="con-icon">{data.name[0]}</p>
        <div className="other-text-content">
          <p className="con-title">{data.name}</p>
          <p className="con-lastMessage">{data.content}</p>
          <p className="self-timeStamp">12:00am</p>
        </div>
      </div>
    </div>
  );
}

export default MessageOther;
