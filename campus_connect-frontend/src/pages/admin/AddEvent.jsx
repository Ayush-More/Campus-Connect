import { IconButton } from "@mui/material"
import logo from "./../../assets/images/live-chat_16px.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import {TextField , Box , Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import PlaceIcon from '@mui/icons-material/Place';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import GroupsIcon from '@mui/icons-material/Groups';
import { createEvent } from "../../service/admin/admin";
// import { prependOnceListener } from "../../../../Campus_Connect_API/model/notesModel";

const ProSpan = styled('span')({
  display: 'inline-block',
  height: '1em',
  width: '1em',
  verticalAlign: 'middle',
  marginLeft: '0.3em',
  marginBottom: '0.08em',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundImage: 'url(https://mui.com/static/x/pro.svg)',
});
function Label({ text,isProOnly }) {
    const content = (
      <span>
       <strong>{text}</strong>
      </span>
    );
    if (isProOnly) {
      return (
        <Stack direction="row" spacing={0.5} component="span">
          <Tooltip title="Included on Pro package">
            <a
              href="https://mui.com/x/introduction/licensing/#pro-plan"
              aria-label="Included on Pro package"
            >
              <ProSpan />
            </a>
          </Tooltip>
          {content}
        </Stack>
      );
    }
  
    return content;
  
}
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
function AddEvent() {
  const LightTheme = useSelector((state)=> state.themeKey);
  const [step, setStep] = useState(1);
  const [eventDetail , setEventDetail] = useState({
      tittle: "",
      venue: "",
      date: "",
      time: "",
      Description: "",
      queryContact: "",
      Registrationlink: "",
      type: "",
      mode: "",
      image: "",
      dressCode: "",
      Department: "",
  });

  const Change = (e) =>{
    setEventDetail({...eventDetail , [e.target.name]: e.target.value})
  };
  const handleSubmit = async()=>{
    console.log(eventDetail)
    const result = createEvent(eventDetail)
    if(result.data){
      console.log(result)
      alert("Successful");
    }
  }
  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
         <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '60ch' }
      }}
      noValidate
      autoComplete="off"
      className='eventDetails'
      style={{display:"flex" , alignItems:"center" , justifyContent:"center"}}
    >
      <TextField name="tittle" onChange={Change} id="standard-basic" label="Add Tittle" variant="standard" className={`menuItem ${LightTheme ? "" : "dark"}`} />
     
        <LocalizationProvider dateAdapter={AdapterDayjs} className={`menuItem ${LightTheme ? "" : "dark"}`}>
      <DemoContainer
      className={`menuItem ${LightTheme ? "" : "dark"}`}
        components={[
          'DatePicker',
          'TimePicker',
        ]}
      >
        <Box mb={1} className={`menuItem ${LightTheme ? "" : "dark"}`}>
          <DemoItem className={`menuItem ${LightTheme ? "" : "dark"}`} label={<Label text="Pick up the event date" className={`menuItem ${LightTheme ? "" : "dark"}`} />}>
          <DatePicker  onChange={(e)=>{setEventDetail(prev => ({...prev , date:`${e.$D}/${e.$M+1}/${e.$y}`}))}} className={`menuItem ${LightTheme ? "" : "dark"}`}/>
        </DemoItem></Box>
         <Box mb={1}> 
         <DemoItem  label={<Label text="Pick up the event time" />}>
          <TimePicker onChange={(e)=> {setEventDetail(prev => ({...prev , time:`${e.$H}:${e.$m}`}))}}/>
        </DemoItem></Box>
       

       </DemoContainer>
       </LocalizationProvider >
       <TextField
       className={`menuItem ${LightTheme ? "" : "dark"}`}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={3}
          aria-colcount={6}
          defaultValue="Meeting"
          sx={{ width: '100%' }}
          name="Description"
          onChange={Change}
        />

      <Box sx={{ display: 'flex' }}>
        <PlaceIcon sx={{ color: 'action.active', mr: 1, my: 1 }} className={`menuItem ${LightTheme ? "" : "dark"}`} />
        <TextField name="venue" onChange={Change} className={`menuItem ${LightTheme ? "" : "dark"}`} label="Venue" variant="outlined" />
      </Box>
        <div>
          <Button variant="contained" size="large" onClick={handleNextStep} >
            NEXT
          </Button>
        </div>
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
            style={{display:"flex" , alignItems:"center" , justifyContent:"center"}}
          ><div style={{display:"flex", width:"100%", justifyContent:"center"}}>
               <Box  className={`menuItem ${LightTheme ? "" : "dark"}`}>
               <FormControl sx={{ mx: 1, width: 230 }}>
              <InputLabel id="demo-simple-select-label" className={`menuItem ${LightTheme ? "" : "dark"}`}>Type</InputLabel>
              <Select
              className={`menuItem ${LightTheme ? "" : "dark"}`}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Type"
                name="type"
                onChange={Change}
              >
                <MenuItem value="Seminar" className={`menuItem ${LightTheme ? "" : "dark"}`}>Seminar</MenuItem>
                <MenuItem value="Industrial Vist" className={`menuItem ${LightTheme ? "" : "dark"}`}>Industrial Vist</MenuItem>
                <MenuItem value="Hackathon" className={`menuItem ${LightTheme ? "" : "dark"}`}>Hackathon</MenuItem>
              </Select>
            </FormControl>
             </Box>
               <Box > 
               <FormControl  sx={{ mx: 1, width: 230 }}>
              <InputLabel id="demo-simple-select-label" className={`menuItem ${LightTheme ? "" : "dark"}`}>Mode</InputLabel>
              <Select
              className={`menuItem ${LightTheme ? "" : "dark"}`}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Category"
                name="mode"
                onChange={Change}
                
              >
                <MenuItem value="Online" className={`menuItem ${LightTheme ? "" : "dark"}`}>Online</MenuItem>
                <MenuItem value="Offline" className={`menuItem ${LightTheme ? "" : "dark"}`}>Offline</MenuItem>
                <MenuItem value="Hybrid" className={`menuItem ${LightTheme ? "" : "dark"}`}>Hybrid</MenuItem>
              </Select>
            </FormControl>
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
              <TextField name="dressCode" onChange={Change} id="standard-basic" label="Dress Code" variant="standard" />
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
              <TextField name="Department" onChange={Change} id="standard-basic" label="Department" variant="standard" />
          </Box>
          </div>
          <div style={{display:"flex", width:"100%", justifyContent:"center"}}>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '6ch' },
            }}
            noValidate
            autoComplete="off"
          >
              <TextField disabled id="outlined-basic" label="+91" variant="outlined" />
          </Box>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
               <TextField onChange={Change} name="queryContact" id="outlined-basic" label="Phone Number" variant="outlined" />
          </Box>
          </div>
          <Button style={{color:"#63d7b0", width:"33%"}} component="label" variant="outlined" startIcon={<CloudUploadIcon />}>
            Upload file
            <VisuallyHiddenInput  type="file" onChange={(e)=> {setEventDetail(prev => ({...prev , image:e.target.files[0]}))}}/>
          </Button>
          <Box sx={{ display: 'flex' }}>
              <GroupsIcon sx={{ color: 'action.active', mr: 1, my: 1 }} className={`menuItem ${LightTheme ? "" : "dark"}`} />
              <TextField name="Registrationlink" onChange={Change}  sx={{ width: '100%' }} id="outlined-required" className={`menuItem ${LightTheme ? "" : "dark"}`} label="Registration Link" variant="outlined" />
            </Box>
            <div style={{display:"flex" , justifyContent:"space-between"}}>
          <Button variant="contained" size="large" onClick={handlePreviousStep}>
                BACK
              </Button>
              <Button variant="contained" size="large" onClick={handleSubmit} >
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
            EVENT FORM
          </p>
    </div>
    <div className={`"personelEvent-container" ${LightTheme  ? "": "dark"}`}>
    {renderFormStep()}
    </div>

    </div>
    </>
  )
}

export default AddEvent