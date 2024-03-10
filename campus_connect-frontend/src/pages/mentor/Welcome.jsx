import logo from "./../../assets/images/live-chat_512px.png";

function Welcome() {
  return (
    <div className="welcome-container">
      <img
        src={logo}
        alt="Logo"
        className="welcome-logo"
      />
      <b>Hi , Ayush👋</b>
      <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  );
}

export default Welcome;
