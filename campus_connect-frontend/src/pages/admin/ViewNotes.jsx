import { useSelector } from "react-redux"
import { IconButton } from "@mui/material"
import logo from "./../../assets/images/live-chat_16px.png";

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
  return (
    <>
    <div className="list-container">
    <div className={`chatArea-header ${LightTheme ? "" : "dark"}`}>
            <IconButton>
              <img src={logo} alt="logo" />
            </IconButton>
            <p className="chatArea-text ">All Notes</p>
          </div>
        <div className="strip">
           Hello
        </div>
    </div>

    </>
  )
}

export default ViewNotes