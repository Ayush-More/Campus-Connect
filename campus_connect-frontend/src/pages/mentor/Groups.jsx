import { IconButton } from "@mui/material";
import logo from "./../../assets/images/live-chat_16px.png";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

function Online_Group() {
  const group = [
    { name: "Ayush" },
    { name: "Atharv" },
    { name: "Samarth" },
    { name: "Ayush" },
    { name: "Atharv" },
    { name: "Samarth" },
    { name: "Ayush" },
    { name: "Atharv" },
    { name: "Samarth" },
  ];
  const LightTheme = useSelector((state) => state.themeKey);
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
            />
          </div>
          <div className={`ag-list ${LightTheme ? "" : "con-dark"}`}>
            {group.map((data ,i) => {
              return (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`item-list ${LightTheme ? "" : "dark"}`}
                  key={i}
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

export default Online_Group;
