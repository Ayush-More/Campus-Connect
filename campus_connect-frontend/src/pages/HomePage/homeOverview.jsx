import Feature from "./Features.jsx"
import SchoolIcon from '@mui/icons-material/School';
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { IconButton } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Button from '@mui/material/Button';
import { toggleTheme } from "../../store/Slice/themeSlice.jsx";
import { useSelector, useDispatch } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import mainImage from "./../../assets/images/College.png";
import Footer from "./footer.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function LandPageOverview() {
  const  handleExplore = ()=>{
    window.scrollTo({
      top: 700,
      left: 0,
      behavior: 'smooth' // Smooth scroll behavior
    });
  }
  const log= useSelector((state) => state.auth.token)
  const nav = useNavigate();
  const LoggedInStatus = ()=>{
    if(log === null){
      setLoggedIn(false)
    }else{
      setLoggedIn(true);
    }
  }
  const [loggedIn , setLoggedIn] = useState(true)
  const LightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();

  useEffect(()=>{
   LoggedInStatus()
  },[])
  return (
    <>
    <div style={{display:"flex" , flexDirection:"column"}}>
    <div className='LandPage'>
      <div className={`main-container front ${LightTheme ? "": "dark"}`}>
       
          
        <nav className="navbar">
        <div style={{display:"flex" , columnGap:"20px"}}> <SchoolIcon className={`icon ${LightTheme ? "" : "dark"}`} />
        <h1><span style={{color:"#63d7b0"}}>Campus</span> Connect</h1></div>
        <div style={{display:"flex" , columnGap:"20px"}} ><IconButton
              onClick={() => {
                dispatch(toggleTheme());
              }}
            >
              {LightTheme && (
                <LightModeIcon className={`icon ${LightTheme ? "" : "dark"}`} />
              )}
              {!LightTheme && (
                <NightlightIcon
                  className={`icon ${LightTheme ? "" : "dark"}`}
                />
              )}
            </IconButton>
            <div>
            {loggedIn && (
              <IconButton>
                 <AccountCircleIcon onClick={()=>{nav ("/profile")}} className={`icon ${LightTheme ? "" : "dark"}`} />
              </IconButton>
               
              )}
              {!loggedIn && (
               <Button onClick={()=> nav("/auth")} style={{ backgroundColor:"#63d7b0"}} variant="contained" size="medium">
               Login
             </Button>
              )}
            </div>
    
            </div>      
        </nav>
          
        
        <div style={{padding: "0px 100px"}} className={`landingContent ${LightTheme ? "" : "dark"}`}>
          {loggedIn ?
          <div ><p className={`tagLine ${LightTheme ? "" : "dark"}`}>Empowering<span style={{color:"#63d7b0" , fontSize:"40px", padding:"20px" }}>AYUSH</span><br/>Campus Journey:<br/><span style={{ fontSize:"20px"}}>Mentorship, Book Exchange and  Events at Your Fingertips!</span></p>
          <Button onClick={()=>{handleExplore()}} style={{ backgroundColor:"#63d7b0", marginLeft:"30px"}} color="success" variant="contained" size="medium">
          Explore <ArrowRightAltIcon/>
        </Button></div>: <div ><p className={`tagLine ${LightTheme ? "" : "dark"}`}>
Unlock Your Campus Potential: Mentorship, Book Exchange, and Events Await! <span style={{color:"#63d7b0" , fontSize:"20px", padding:"10px" }}>Log in Now to Connect and Thrive.</span></p>
          </div>}
          
          <div ><img src={mainImage} alt="college" height={400}width={450} /></div>
          
          
        </div>
        </div>
        
      
        </div>
        
     <div><Feature/></div>
     <div><Footer/></div>
    </div>
   
   </> 
   
  )
}

export default LandPageOverview