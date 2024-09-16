import { IconButton } from "@mui/material"
import {  useSelector } from "react-redux"
import { useState } from "react";
import {Box , Button,TextField , FormControl , InputLabel, OutlinedInput , InputAdornment} from "@mui/material";
import logo from "./../../assets/images/live-chat_16px.png";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { createMentor } from "../../service/admin/admin";
import { AuthSignUp } from "../../service/auth/authorization";
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

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

const DSA = [
 "C++",
 "C#",
 "JavaScript",
 "Java",
 "Python",
 ]
function AddMentor() {
  const [userId , setUserId] = useState();
  const [SubjectName, setSubjectName] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    const [step, setStep] = useState(1);
    const [mentorDetail , setMentorDetail] = useState({
      users:userId,
      programmingLanguages: SubjectName,
      role:"",
      intustryExperience: "",
      ClubWithPosition: "",
      CompanyName: "",
      Cgpa:"",
    })

    const detailChange = (e) => {
      setMentorDetail({ ...mentorDetail, [e.target.name]: e.target.value });
    };
    const [formData , setFormData] = useState({
      name :"",
      email:"",
      password:"",
      passwordConfirm:"",
      role:"mentor"
    })
    const Change = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlementordetails = async()=>{
    try{
      console.log(mentorDetail);
      const details = await  createMentor(mentorDetail);
  if(details){
    alert("Successful");
    setUserId(details.data)
    console.log(details.data);
  }
    }catch(error){
      console.log(error)

    }
  }

  const handlementor = async()=>{
    try{
      console.log(formData);
      const details =await  AuthSignUp(formData);
  if(details){
    alert("Successful");
    setMentorDetail(prevState => ({
      ...prevState,
      users: details.data.user._id
    }));
    console.log(details.data.user._id);
      setStep(step + 1);
  }
    }catch(error){
      console.log(error)

    }
  }
    const LightTheme = useSelector((state)=> state.themeKey);
    
    const handleSubChange = (event) => {
      const {
        target: { value },
      } = event;
      const selectedLanguages = typeof value === 'string' ? value.split(',') : value;
  setSubjectName(selectedLanguages);
      setMentorDetail(prevState => ({
        ...prevState,
        programmingLanguages: selectedLanguages
      }));
    };
  
    const renderFormStep = () => {
      switch (step) {
        case 1:
          return (
            <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 2, width: '43ch' }
            }}
            noValidate
            autoComplete="off"
            className='eventDetails'
          >
           <TextField id="outlined-basic" onChange={Change} name="name" label="Name" variant="outlined" />
           <TextField id="standard-basic" onChange={Change} name="email" label="Email" variant="standard" />
           <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  onChange={Change}
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                <OutlinedInput
                  onChange={Change}
                  name="passwordConfirm"
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Button style={{backgroundColor:"#63d7b0"}} variant="contained" size="large" onClick={() => {handlementor(formData); console.log()}}>
                UPLOAD 
              </Button>
          </Box>
          );
        case 2:
          return (
              <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1,  width: '60ch' }
              }}
              noValidate
              autoComplete="off"
              className='eventDetails'
            ><div style={{display:"flex", width:"100%", justifyContent:"center"}}>
                  <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
                <TextField onChange={detailChange}name="intustryExperience" id="outlined-basic" label="Industry Expeirence" variant="outlined" />
            </Box>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
                <TextField onChange={detailChange}  name="ClubWithPosition" id="outlined-basic" label="Club With Position" variant="outlined" />
            </Box>
            </div>
            <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
                <TextField onChange={detailChange} name="CompanyName" id="standard-basic" label="Company" variant="standard" />
            </Box>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
                <TextField onChange={detailChange} name="role" id="standard-basic" label="Role" variant="standard" />
            </Box>
            </div>
            <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
            {/* <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '15ch' },
              }}
              noValidate
              autoComplete="off"
            >
                <TextField  onChange={detailChange} id="outlined-basic" label="CGPA" variant="outlined" />
            </Box> */}
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '10ch' },
              }}
              noValidate
              autoComplete="off"
            >
                 <TextField onChange={detailChange} name="Cgpa" id="outlined-basic"  variant="outlined" />
            </Box>
            </div>
            
            <div  style={{display:"flex", width:"100%", justifyContent:"center"}} className={`dropDown ${LightTheme ? "" : "dark"}`}>
        <FormControl>
        <InputLabel id="demo-multiple-checkbox-label" className={`checkbox-label ${LightTheme ? "" : "dark"}`}>Programming Languages</InputLabel>
        <Select
        className={`multiple-checkbox ${LightTheme ? "" : "dark"}`}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          name="programmingLanguages"
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
          {DSA.map((name) => (
            <MenuItem key={name} value={name} className={`menuItem ${LightTheme ? "" : "dark"}`}>
              <Checkbox checked={SubjectName.indexOf(name) > -1} className={`menuItem ${LightTheme ? "" : "dark"}`} />
              <ListItemText primary={name} className={`menuItem ${LightTheme ? "" : "dark"}`} />
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        </div>
              <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
            
                <Button variant="contained" size="large" onClick={handlementordetails}>
                  SUBMIT
                </Button>
            </div>
            </Box>
        
          );
      }
    };
  return (
    <>
    <div className="list-container">
    <div className={`chatArea-header ${LightTheme ? "" : "dark"}`}>
          <IconButton>
              <img src={logo} alt="logo" />
            </IconButton>
          <p className={`chatArea-text ${LightTheme ? "" : "dark"}`}>
            CREATE EVENT
          </p>
    </div>
    <div className={`personelEvent-container ${LightTheme ? "" : "dark"}`}>
    {renderFormStep()}
    </div>

    </div>
    </>
  )
}

export default AddMentor