import profile from "./../../assets/images/upload_image.jpg";
import "./../../assets/style/myStyle.css";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./../../store/Slice/AuthSlice";
function Profile() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const LightTheme = useSelector((state) => state.themeKey);
  const handleLogout = async () => {
    dispatch(logout());
    console.log("logout");
    nav("/auth");
  };
  const profileDetail = JSON.parse(localStorage.getItem("user"));
  console.log(profileDetail);
  return (
    <>
      <div className={`profile ${LightTheme ? "" : "dark"}`}>
        <div>
          <img src={profile} alt="profile" className="profilePic" />
        </div>
        <div style={{ padding: "80px 50px" }}>
          <p style={{ padding: "20px 5px" }}>
            <span className="profile-head">NAME : </span>
            <span className="profile-ans">{profileDetail.name}</span>
          </p>
          <p style={{ padding: "20px 5px" }}>
            <span className="profile-head">EMAIL : </span>
            <span className="profile-ans">{profileDetail.email}</span>
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              paddingTop: "40px",
            }}
          >
            <Button
              style={{ backgroundColor: "#63d7b0" }}
              variant="contained"
              startIcon={<LogoutIcon />}
              onClick={() => handleLogout()}
            >
              logout
            </Button>
            <Button
              onClick={() => nav("/auth/changePassword")}
              style={{ backgroundColor: "#63d7b0", marginTop: "20px" }}
              variant="contained"
              startIcon={<ChangeCircleIcon />}
            >
              Change password
            </Button>
            <Button
              onClick={() => nav("/")}
              style={{ backgroundColor: "#63d7b0", marginTop: "20px" }}
              variant="contained"
              startIcon={<ChangeCircleIcon />}
            >
              Home
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
