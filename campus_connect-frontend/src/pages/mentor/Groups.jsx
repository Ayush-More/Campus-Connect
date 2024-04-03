import { IconButton } from "@mui/material";
import logo from "./../../assets/images/live-chat_16px.png";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FetchAllGroup , addSelfGroup} from "../../service/chats/chats";

function Online_Group() {
  const [group , setGroup] = useState([]);
  const [searchQuery , setSearchQuery] = useState("");
  const LightTheme = useSelector((state) => state.themeKey);

  const fetchData = async () => {
    try {
      
      const response = await FetchAllGroup();
      if (response) {
        const confirm = response.data.allGroups;
        setGroup(confirm);
      } else {
        console.log("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(()=>{
fetchData()
  },[])

  const filteredUsers = group.filter((user) =>
  user.chatName.toLowerCase().includes(searchQuery.toLowerCase())
);
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
            <p className="chatArea-text ">Available Groups</p>
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
            {filteredUsers.map((data ,i) => {
              return (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`item-list ${LightTheme ? "" : "dark"}`}
                  onClick={() => {
                    try {
                      const id = localStorage.getItem("userId");
                      const response = addSelfGroup({chatId : group._id , userId:id })
                     
                      if (response.data.status === "success") {
                        console.log(response.data.added);
                        
                    
                      } else {
                        console.error("Failed to fetch data");
                      }
                    } catch (error) {
                      console.error("Error fetching data:", error);
                    }
                  }}
                  key={i}
                >
                  <p className="con-icon">{data.chatName[0]}</p>
                  <p className={`chatArea-text  ${LightTheme ? "" : "dark"}`}>
                    {data.chatName}
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

export default Online_Group;
