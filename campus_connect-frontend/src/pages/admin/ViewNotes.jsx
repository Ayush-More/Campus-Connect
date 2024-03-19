import { useSelector } from "react-redux"
import { IconButton } from "@mui/material"
import logo from "./../../assets/images/live-chat_16px.png";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DeleteIcon from '@mui/icons-material/Delete';
import { motion } from "framer-motion";

function ViewNotes() {
    const notes = [
        {
          Title: "Introduction to Algorithms",
          Category: "Development",
          SubCategory: ["Algorithms", "Data Structures"],
          Pdf: "https://example.com/introduction-to-algorithms.pdf",
          discription: "A comprehensive guide to algorithms and data structures.",
          favourite: true,
          createdAt: "2024-03-16T12:00:00.000Z"
        },
        {
          Title: "Linear Algebra",
          Category: "Subject",
          SubCategory: ["Mathematics"],
          Pdf: "https://example.com/linear-algebra.pdf",
          discription: "Basic concepts and applications of linear algebra.",
          favourite: false,
          createdAt: "2024-03-15T12:00:00.000Z"
        },
        {
          Title: "JavaScript: The Good Parts",
          Category: "Development",
          SubCategory: ["JavaScript"],
          Pdf: "https://example.com/javascript-the-good-parts.pdf",
          discription: "Exploring the good parts of the JavaScript language.",
          favourite: true,
          createdAt: "2024-03-14T12:00:00.000Z"
        }
      ]
    const LightTheme = useSelector((state) => state.themeKey)
    const [searchBar , setSearchBar] = useState(false);
    const handleSearchBar = async()=>{
      setSearchBar((prev)=> !prev);
    }
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
          return(<motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={`strip ${LightTheme ? "" : "dark"}`}
            key={index}>
          <div style={{display:"flex", alignItems:"center"}}>
          <IconButton>
            <PictureAsPdfIcon/>
          </IconButton>
          <p className="chatArea-text">DSA</p>
          </div>
            <p className="chatArea-text">ayushmore8652@gmail.com</p>
            <IconButton>
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