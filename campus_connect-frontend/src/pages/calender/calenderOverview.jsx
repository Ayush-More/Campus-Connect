import { useSelector } from "react-redux";
import "./../../assets/style/myStyle.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Welcome from "./welcome.jsx";
import Event from "./clubEvent";
import Form from "./form.jsx";

function CalenderOverview() {
  const LightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={`main-container ${LightTheme ? "" : "con-dark"}`}>
      <Sidebar />
      <Outlet/>
    </div>
  );
}

export default CalenderOverview;
