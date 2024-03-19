import { IconButton } from "@mui/material"
import {  useSelector } from "react-redux"
import { useState } from "react";
import {Box , Button,TextField , FormControl , InputLabel, OutlinedInput , InputAdornment} from "@mui/material";
import logo from "./../../assets/images/live-chat_16px.png";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
function AddMentor() {
    const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    const LightTheme = useSelector((state)=> state.themeKey);
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
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '43ch' }
      }}
      noValidate
      autoComplete="off"
      className='eventDetails'
    >
     <TextField id="outlined-basic" label="Name" variant="outlined" />
     <TextField id="standard-basic" label="Email" variant="standard" />
     <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
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
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
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
        <Button style={{backgroundColor:"#63d7b0"}} variant="contained" size="large">
          UPLOAD 
        </Button>
    </Box>
    </div>

    </div>
    </>
  )
}

export default AddMentor