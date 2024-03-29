import {  useSelector } from "react-redux";
import "./../../assets/style/myStyle.css";
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import AddCardIcon from '@mui/icons-material/AddCard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ContactsIcon from '@mui/icons-material/Contacts';
import ViewListIcon from '@mui/icons-material/ViewList';
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function AdminOverview() {
  const nav = useNavigate()
  const LightTheme = useSelector((state) => state.themeKey)
  return (
    <div className={`main-container ${LightTheme ? "" : "con-dark"}`}>
      <div className="sideBar">
        
        <div className={`sb-conversation ${LightTheme ? "" : "dark"}`}>

<p  className={`eventTitle ${LightTheme ? "" : "dark"}`} style={{fontSize:"30px", paddingTop:"10px"}}>Category</p>

<div className="RoadmapTag">
<p onClick={() =>nav("AllNotes")} style={{justifyContent:"start"}} className="tag" ><WysiwygIcon style={{padding:"0px 13px"}} className={`${LightTheme ? "" : "dark"}`}/> View Notes</p>
<p onClick={() =>nav("addMentor")} style={{justifyContent:"start"}} className="tag"><PersonAddIcon style={{padding:"0px 13px"}} className={` ${LightTheme ? "" : "dark"}`}/> Add New Mentor</p>
<p onClick={() =>nav("")} style={{justifyContent:"start"}} className="tag"><ContactsIcon style={{padding:"0px 13px"}} className={` ${LightTheme ? "" : "dark"}`}/> View All User</p>
<p onClick={() =>nav("AddEvent")} style={{justifyContent:"start"}} className="tag"> <AddCardIcon style={{padding:"0px 13px"}} className={` ${LightTheme ? "" : "dark"}`}/> Add Event</p>
<p onClick={()=>nav("event")} style={{justifyContent:"start"}} className="tag"><ViewListIcon style={{padding:"0px 13px"}} className={` ${LightTheme ? "" : "dark"}`}/> View All Event</p>
             </div>
      </div>
 </div>
 <Outlet/>
    </div>
  )
}

export default AdminOverview