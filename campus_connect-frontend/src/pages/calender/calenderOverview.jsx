import { useSelector } from "react-redux";
import "./../../assets/style/myStyle.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

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
