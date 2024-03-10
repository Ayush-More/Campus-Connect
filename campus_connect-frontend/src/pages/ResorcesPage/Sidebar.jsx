import React from "react"
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./../../assets/style/myStyle.css";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import FavoriteIcon from '@mui/icons-material/Favorite';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const subject = [
  "Maths",
  "computer Network",
  "Physics",
  "Chemistry",
  "DBMS",
  "EVS"
]


  const development = [
    "Web Technologies",
    "Cybersecurity",
    "AI & ML",
    "Cloud Computing",
    "Mobile App Development",
  ]


 const DSA = [
  "Arrays",
  "Condition",
  "String",
  "Recursion",
  "Hashmap",
  "Trees",
 ]


function Sidebar() {
  const nav = useNavigate()
  const LightTheme = useSelector((state)=> state.themeKey)
  const [SubjectName, setSubjectName] = React.useState([]);
  const [DevelopName, setDevelopName] = React.useState([]);
  const [DsaName, setDsaName] = React.useState([]);

  const handleDevChange = (event) => {
    const {
      target: { value },
    } = event;
    setDevelopName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleDsaChange = (event) => {
    const {
      target: { value },
    } = event;
    setDsaName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleSubChange = (event) => {
    const {
      target: { value },
    } = event;
    setSubjectName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
  return (
    <div className="sideBar">
        <div className={`sb-header ${LightTheme ? "" : "dark"}`} >
        <div>
            <IconButton>
              <AccountCircleIcon
              onClick={()=>{nav("/profile")}}
                className={`icon ${LightTheme ? "" : "dark"}`}
              />
            </IconButton>
          </div>
          <div>
          <IconButton>
              <FavoriteIcon onClick={()=>{nav("favourite")}}  className={`icon ${LightTheme ? "" : "dark"}`} />
            </IconButton>
          <IconButton>
          <SearchIcon onClick={()=>{nav("search")}} className={`icon ${LightTheme ? "" : "dark"}`}/>
            </IconButton>
            <IconButton>
            <AddCircleIcon onClick={()=>{nav("form")}}className={`icon ${LightTheme ? "" : "dark"}`}/>
            </IconButton>
          <IconButton>
              <ExitToAppIcon onClick={()=>{nav("/")}} className={`icon ${LightTheme ? "" : "dark"}`} />
            </IconButton>
            
          </div>
        </div>
        <div className={`sb-conversation ${LightTheme ? "" : "dark"}`}>

          <p  className={`eventTitle ${LightTheme ? "" : "dark"}`} style={{fontSize:"30px", paddingTop:"10px"}}>Category</p>
          <div className={`dropDown ${LightTheme ? "" : "dark"}`}>
        <FormControl sx={{ m: 1, width: 300 }} sy={{m:2}}>
        <InputLabel id="demo-multiple-checkbox-label" className={`checkbox-label ${LightTheme ? "" : "dark"}`}>Subject</InputLabel>
        <Select
        className={`multiple-checkbox ${LightTheme ? "" : "dark"}`}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={SubjectName}
          onChange={handleSubChange}
          input={<OutlinedInput id="select-multiple-chip" label="Tag" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }} className={`menuItem ${LightTheme ? "" : "dark"}`}>
            {selected.map((value) => (
              <Chip key={value} label={value} className={`menuItem ${LightTheme ? "" : "dark"}`} />
            ))}
          </Box>
            )}
          MenuProps={MenuProps}
        >
          {subject.map((name) => (
            <MenuItem key={name} value={name} className={`menuItem ${LightTheme ? "" : "dark"}`}>
              <Checkbox checked={SubjectName.indexOf(name) > -1} className={`menuItem ${LightTheme ? "" : "dark"}`} />
              <ListItemText primary={name} className={`menuItem ${LightTheme ? "" : "dark"}`} />
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        </div>
       
        <div className="dropDown">
        <FormControl sx={{ m: 1, width: 300 }} sy={{m:2}}>
        <InputLabel id="demo-multiple-checkbox-label" className={`checkbox-label ${LightTheme ? "" : "dark"}`}>Development</InputLabel>
        <Select
        className={`multiple-checkbox ${LightTheme ? "" : "dark"}`}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={DevelopName}
          onChange={handleDevChange}
          input={<OutlinedInput id="select-multiple-chip" label="Tag" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }} className={`menuItem ${LightTheme ? "" : "dark"}`}>
            {selected.map((value) => (
              <Chip key={value} label={value} className={`menuItem ${LightTheme ? "" : "dark"}`}/>
            ))}
          </Box>
            )}
          MenuProps={MenuProps}
        >
          {development.map((name) => (
            <MenuItem key={name} value={name} className={`menuItem ${LightTheme ? "" : "dark"}`}>
              <Checkbox checked={DevelopName.indexOf(name) > -1} className={`menuItem ${LightTheme ? "" : "dark"}`} />
              <ListItemText primary={name} className={`menuItem ${LightTheme ? "" : "dark"}`} />
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        </div>

        <div className="dropDown">
        <FormControl sx={{ m: 1, width: 300 }} sy={{m:2}}>
        <InputLabel id="demo-multiple-checkbox-label" className={`checkbox-label ${LightTheme ? "" : "dark"}`}>DSA</InputLabel>
        <Select
        className={`multiple-checkbox ${LightTheme ? "" : "dark"}`}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={DsaName}
          onChange={handleDsaChange}
          input={<OutlinedInput id="select-multiple-chip" label="Tag" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }} className={`menuItem ${LightTheme ? "" : "dark"}`}>
            {selected.map((value) => (
              <Chip key={value} label={value}  className={`menuItem ${LightTheme ? "" : "dark"}`}/>
            ))}
          </Box>
            )}
          MenuProps={MenuProps}
        >
          {DSA.map((name) => (
            <MenuItem key={name} value={name} className={`menuItem ${LightTheme ? "" : "dark"}`}>
              <Checkbox checked={DsaName.indexOf(name) > -1} className={`menuItem ${LightTheme ? "" : "dark"}`}/>
              <ListItemText primary={name} className={`menuItem ${LightTheme ? "" : "dark"}`}/>
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        </div>
        
      
        </div>
    </div>
  )
}

export default Sidebar