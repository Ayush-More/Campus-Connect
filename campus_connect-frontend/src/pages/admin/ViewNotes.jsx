import { useSelector } from "react-redux"
import { IconButton } from "@mui/material"
import logo from "./../../assets/images/live-chat_16px.png";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DeleteIcon from '@mui/icons-material/Delete';
import { motion } from "framer-motion";
import {SeeNotes , deleteNotes} from "./../../service/admin/admin"

function ViewNotes() {
   const [notes , setNotes] = useState([]);
      // console.log(SeeNotes())
    const  HandleUser = async() =>{
      const result = await SeeNotes()
      if(result.data){
        setNotes(result.data.data);
        console.log(result);
      }
    }
    const LightTheme = useSelector((state) => state.themeKey)
    const [searchBar , setSearchBar] = useState(false);
    const handleSearchBar = async()=>{
      setSearchBar((prev)=> !prev);
    }
    useEffect(()=>{
      HandleUser()
    },[])
  return (
    <>
    <div className="list-container">
          <div className={`chatArea-header ${LightTheme ? "" : "dark"}`}>
          <IconButton>
              <img src={logo} alt="logo" />
            </IconButton>
          <p className={`chatArea-text ${LightTheme ? "" : "dark"}`}>
            ALL NOTES
          </p>
          <IconButton onClick={handleSearchBar}>
            <SearchIcon className={`icon ${LightTheme ? "" : "dark"}`} />
          </IconButton>
        </div>
        <div className={`sb-search ${LightTheme ? "" : "dark"} ${searchBar ? "" : "display"}`}>
            <IconButton>
              <SearchIcon className={`icon ${LightTheme ? "" : "dark"}`} />
            </IconButton>
            <input
              type="text"
              className={`Search-box ${LightTheme ? "" : "dark"}`}
              placeholder="Search..."
            />
          </div>
          <div className="ag-list">
            {notes.map((data , index)=>{
              console.log(data.Category , data.createdBy.email)
          return(<motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={`strip ${LightTheme ? "" : "dark"}`}
            key={index}>
          <div style={{display:"flex", alignItems:"center"}}>
          <IconButton>
            <PictureAsPdfIcon/>
          </IconButton>
          <p className="chatArea-text">{data.Category}</p>
          </div>
            <p className="chatArea-text">{data.createdBy.email}</p>
            <IconButton onClick={()=> {deleteNotes(data._id)}}>
              <DeleteIcon/>
            </IconButton>       
        </motion.div>)
          })}
          </div>
        
    </div>

    </>
  )
}

export default ViewNotes