import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "./../../assets/images/live-chat_16px.png";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
// import getToken from "./../utils/getToken";

function Available_Users() {
  const [users, setUsers] = useState([]);

  const LightTheme = useSelector((state) => state.themeKey);
  // useEffect(() => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const response = fetch("http://localhost:5000/api/v1/chat/fetchUsers", {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     if (response.ok) {
  //       const data = response.json();
  //       setUsers(data.data);
  //     } else {
  //       console.error("Failed to fetch data");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }, []);

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
            />
          </div>
          <div className={`ag-list ${LightTheme ? "" : "con-dark"}`}>
            {users.map((data, index) => {
              return (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`item-list ${LightTheme ? "" : "dark"}`}
                  key={index}
                  onClick={() => {
                    try {
                      const token = localStorage.getItem("token");
                      const response = fetch(
                        "http://localhost:5000/api/v1/chat/",
                        {
                          method: "POST",
                          headers: {
                            Authorization: `Bearer ${token}`,
                          },
                          body: {
                            userId: data._id,
                          },
                        }
                      );

                      if (response.ok) {
                        const data = response.json();
                        setUsers(data.data);
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
