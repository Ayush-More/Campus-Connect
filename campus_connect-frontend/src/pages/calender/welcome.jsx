import logo from "./../../assets/images/calender.png";

function welcome() {
  return (
    <div className="welcome-container">
      <img
       
        src={logo}
        alt="Logo"
        className="welcome-logo"
      />
      <b>Hi , Ayush👋</b>
      <p>Plan you day here</p>
    </div>
  );
}

export default welcome;
