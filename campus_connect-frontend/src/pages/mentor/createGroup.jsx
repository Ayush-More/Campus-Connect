import React from "react";
import { IconButton } from "@mui/material";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import { useSelector } from "react-redux";
function CreateGroup() {
  const LightTheme = useSelector((state) => state.themeKey);
  return (
    <div className={`create-group-container ${LightTheme ? "" : "dark"}`}>
      <input
        className={`Search-box ${LightTheme ? "" : "dark"}`}
        placeholder="Enter your Grup Name"
      />
      <IconButton className={`icon ${LightTheme ? "" : "dark"}`}>
        <DoneOutlineRoundedIcon />
      </IconButton>
    </div>
  );
}

export default CreateGroup;
