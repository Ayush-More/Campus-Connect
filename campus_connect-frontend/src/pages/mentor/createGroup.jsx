import { IconButton } from "@mui/material";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { AnimatePresence,motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createGroup , fetchAllUser} from "../../service/chats/chats";
import "./../../assets/style/myStyle.css"


function Group() {
  const LightTheme = useSelector((state) => state.themeKey);
  const [searchQuery , setSearchQuery] = useState("");
  const [userId, setUserId] = useState([]);
  const [groupName , setgroupName] = useState()

  const fetchGroup = async () => {
    try {
      const response = await createGroup({name: groupName, users: userId});
      if (response) {
        const data = response.data.user;
        setUsers(data);
      } else {
        console.error("Failed to fetch group");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
          <div className={`create-group-container ${LightTheme ? "" : "dark"}`}>
      <input
        className={`Search-box ${LightTheme ? "" : "dark"}`}
        onChange={(e) => {setgroupName(e.target.value)}}
        placeholder="Enter your Group Name"
      />
      <IconButton className={`icon ${LightTheme ? "" : "dark"}`} onClick={()=> fetchGroup()}>
        <DoneOutlineRoundedIcon />
      </IconButton>
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
              console.log(users)
              const isSelected = userId.includes(data._id); 
              return (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`item-list ${LightTheme ? "" : "dark"}`}
                  key={index}
                  onClick={() => toggleSelection(data._id)}
                >
                  <p className="con-icon">{data.name[0]}</p>
                  <p className={`chatArea-text ${isSelected ? "selected" : ""} ${LightTheme ? "" : "dark"}`}>
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

export default Group;
