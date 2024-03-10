import profile from "./../../assets/images/upload_image.jpg"
import "./../../assets/style/myStyle.css"
import { Button } from "@mui/material"
import LogoutIcon from '@mui/icons-material/Logout';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { useSelector , useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {logout}from "./../../store/Slice/AuthSlice"
function Profile() {
  const dispatch = useDispatch()
  const nav = useNavigate()
  const LightTheme = useSelector((state) => state.themeKey)
  const handleLogout = async () => {
      dispatch(logout())
      console.log("logout")
      nav("/login");
  };
  const profileDetail = JSON.parse(localStorage.getItem("user"));
  console.log(profileDetail)
  return (
   <>
   <div className={`main-container profile} ${LightTheme ? "" : "dark"}`}>
    <div><img src={profile} alt="profile" className="profilePic"/></div>
    <div style={{padding:"80px 50px"}}>
    <p style={{padding:"20px 5px"}}><span className="profile-head">Name:</span><span className="profile-ans">{profileDetail.name}</span></p>
    <p style={{padding:"20px 5px"}}><span className="profile-head">Email:</span><span className="profile-ans">{profileDetail.email}</span></p>
    <p style={{padding:"20px 5px"}}><span className="profile-head">Top 3 Mentor:</span><br/><br/><span className="profile-ans">Amit Olla</span><br/><span className="profile-ans">Aman Mishra</span><br/><span className="profile-ans">Samarth Rane</span></p>
    <div style={{display:"flex" , justifyContent:"space-between", paddingTop:"10px"}}>
      <Button style={{backgroundColor:"#63d7b0"}} variant="contained" startIcon={<LogoutIcon />} onClick={()=> handleLogout()}>
  logout
</Button>
<Button style={{backgroundColor:"#63d7b0"}}  variant="contained" startIcon={<ChangeCircleIcon />}>
  Change password
</Button></div>
    </div>
   </div>
   </>
  )
}

export default Profile