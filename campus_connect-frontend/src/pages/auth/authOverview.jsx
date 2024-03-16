import "./../../assets/style/myStyle.css";
import logo from "./../../assets/images/login_image.png";
import { Outlet } from "react-router-dom";
import {useSelector} from "react-redux";

function AuthOverview() {
    const LightTheme = useSelector((state)=> state.themeKey);
  return (
    <>
      <div className={`login-container ${LightTheme ? "" : "con-dark"}`}>
        <div className="image-container">
          <img src={logo} alt="Logo" className="welcome-logo" />
        </div>
        <div className={`form-box ${LightTheme ? "" : "dark"}`}>
            <Outlet/>
            </div>
        </div>
        </>
  )
}

export default AuthOverview