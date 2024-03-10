import "./../../assets/style/myStyle.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

function MainContainer() {
  const LightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={`main-container ${LightTheme ? "" : "con-dark"}`}>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default MainContainer;
