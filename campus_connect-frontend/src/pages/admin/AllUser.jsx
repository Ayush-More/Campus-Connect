import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import logo from "./../../assets/images/live-chat_16px.png";
import SearchIcon from "@mui/icons-material/Search";
import { AnimatePresence,motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AllUser } from "../../service/chats/chats";
import { deleteUser } from "../../service/admin/admin";
import "./../../assets/style/myStyle.css"
import DeleteIcon from '@mui/icons-material/Delete';

function AllUsers() {
  const LightTheme = useSelector((state) => state.themeKey);
  const [searchQuery , setSearchQuery] = useState("");
  const [userId, setUserId] = useState([]);

  const toggleSelection = (id) => {
    // Check if the user ID is already selected
    if (userId.includes(id)) {
      // If already selected, remove it from the state
      setUserId(userId.filter((userId) => userId !== id));
    } else {
      // If not selected, add it to the state
      setUserId([...userId, id]);
    }
  };

  const [ users , setUsers] = useState([])
  const fetchData = async () => {
    try {
      const response = await AllUser();
      if (response) {
        const data = response.data.allUser;
        setUsers(data);
        console.log(data);
      } else {
        console.log("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const filteredUsers = users?.filter((user) =>
    user?.name?.toLowerCase().includes(searchQuery?.toLowerCase() || '')
  ) || [];
  useEffect(()=>{
  fetchData()
  },[])

  return (
    <>
   <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            duration: "0.3",
          }}
          className={`list-container ${LightTheme ? "" : "con-dark"}`}
        >
          <div className={`chatArea-header ${LightTheme ? "" : "dark"}`}>
            <IconButton>
              <img src={logo} alt="logo" />
            </IconButton>
            <p className="chatArea-text ">Users</p>
          </div>
          <div className={`sb-search ${LightTheme ? "" : "dark"}`}>
            <IconButton>
              <SearchIcon className={`icon ${LightTheme ? "" : "dark"}`} />
            </IconButton>
            <input
              type="text"
              className={`Search-box ${LightTheme ? "" : "dark"}`}
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className={`ag-list ${LightTheme ? "" : "con-dark"}`}>
            {filteredUsers.map((data, index) => {
              const isSelected = userId.includes(data._id); 
              return (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`strip ${LightTheme ? "" : "dark"}`}
                  key={index}
                  onClick={() => toggleSelection(data._id)}
                >
                    <div style={{display:"flex"}}>
                    <p className="con-icon">{data.name[0]}</p>
                  <p className={`chatArea-text ${isSelected ? "selected" : ""} ${LightTheme ? "" : "dark"}`}>
                    {data.name}
                  </p>
                    </div>
                  <p className={`chatArea-text ${isSelected ? "selected" : ""} ${LightTheme ? "" : "dark"}`}>{data.role}</p>
                  <IconButton onClick={()=> {deleteUser(data._id)}}>
                    <DeleteIcon/>
                  </IconButton>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
export default AllUsers;