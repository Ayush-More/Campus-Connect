import {TextField , Box , Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import GroupsIcon from '@mui/icons-material/Groups';
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

function Label({ componentName, valueType, isProOnly }) {
  const content = (
    <span>
     
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

function Form() {
  const LightTheme = useSelector((state) => state.themeKey)
  return (
    <>
    <div className={`personelEvent-container ${LightTheme ? "" : "dark"}`}>
      <p className={`eventTitle ${LightTheme ? "" : "dark"}`}>Personel Event</p>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '43ch' }
      }}
      noValidate
      autoComplete="off"
      className='eventDetails'
    >
      <TextField id="standard-basic" label="Add Tittle" variant="standard" className={`menuItem ${LightTheme ? "" : "dark"}`} />
     
        <LocalizationProvider dateAdapter={AdapterDayjs} className={`menuItem ${LightTheme ? "" : "dark"}`}>
      <DemoContainer
      className={`menuItem ${LightTheme ? "" : "dark"}`}
        components={[
          'DatePicker',
          'TimePicker',
        ]}
      >
        <Box mb={1} className={`menuItem ${LightTheme ? "" : "dark"}`}><DemoItem className={`menuItem ${LightTheme ? "" : "dark"}`} label={<Label componentName="DatePicker" valueType="date" className={`menuItem ${LightTheme ? "" : "dark"}`} />}>
          <DatePicker className={`menuItem ${LightTheme ? "" : "dark"}`}/>
        </DemoItem></Box>
         <Box mb={1}> <DemoItem label={<Label componentName="TimePicker" valueType="time" />}>
          <TimePicker />
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
          defaultValue="Default Value"
          sx={{ width: '100%' }}
        />

<Box sx={{ display: 'flex' }}>
        <GroupsIcon sx={{ color: 'action.active', mr: 1, my: 1 }} className={`menuItem ${LightTheme ? "" : "dark"}`} />
        <TextField  sx={{ width: '100%' }} id="outlined-required" className={`menuItem ${LightTheme ? "" : "dark"}`} label="Meet Link" variant="outlined" />
      </Box>
        <div><Button variant="contained" size="large">
          Save
        </Button></div>
          
   
      </Box>
    
    </div>
    </>
  )
}

export default Form