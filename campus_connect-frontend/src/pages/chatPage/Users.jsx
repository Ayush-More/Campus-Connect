import { IconButton } from "@mui/material";
import  { useEffect, useState } from "react";
import logo from "./../../assets/images/live-chat_16px.png";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { fetchAllUser , AccessChat } from "../../service/chats/chats";
import { AnimatePresence, motion } from "framer-motion";

function Available_Users () {
  const [users, setUsers] = useState([]);
  const [searchQuery , setSearchQuery] = useState("");
  const LightTheme = useSelector((state) => state.themeKey);
  const fetchData = async () => {
    try {
      const response = await fetchAllUser();
      if (response) {
        const data = response.data.user;
        setUsers(data);
      } else {
        console.log("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

 
  useEffect(() => {
    fetchData()
  }, []);


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
            <p className="chatArea-text ">Online User</p>
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
              return (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`item-list ${LightTheme ? "" : "dark"}`}
                  key={index}
                  onClick={() => {
                    try {
                    
                      const response = AccessChat({userId:data._id})
                     
                      if (response.data.status === "success") {
                        const data = response.data.FullChat;
                        setUsers(data);
                      } else {
                        console.error("Failed to fetch data");
                      }
                    } catch (error) {
                      console.error("Error fetching data:", error);
                    }
                  }}
                >
                  <p className="con-icon">{data.name[0]}</p>
                  <p className={`chatArea-text  ${LightTheme ? "" : "dark"}`}>
                    {data.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Available_Users;
