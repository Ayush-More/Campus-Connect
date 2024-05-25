import {TextField , Box , Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useSelector } from 'react-redux';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import { UploadPdf } from '../../service/Pdf/resource';


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
function Form() {
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
  const userId = JSON.parse(localStorage.getItem("user"));
  const [title , setTitle] = useState()
  const [description , setDescription] = useState("Nice book")
  const [subCategory , setSubCategory] = useState([])
  const [subCategoryValue , setSubCategoryValue] = useState([])
  const LightTheme = useSelector((state) => state.themeKey)
  const [category, setCategory] = useState();
  const [pdfFile , setPdfFile] = useState(null);
  
    // const [pdfView , setPdfView] = useState(null);
    const handleSubCategory = (event) => {
      const {
        target: { value },
      } = event;
      setSubCategoryValue(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
//   const handlePdf= (e)=>{
//   let SelectFile = e.target.files[0];
//   console.log(SelectFile);
//   if(SelectFile){
//     if(SelectFile && SelectFile.includes(SelectFile.type)){
//       let reader = new FileReader();
//       reader.readAsDataURL(SelectFile);
//       reader.onload = (e)=>{
//             setPdfFile(e.target.result);
//       }
//     }else{
//       setPdfFile(null);
//     }
//   }else{
//     console.log("please select");
//   }
// }
const handleSubChange =() =>{
  if (category === "Subject"){
    setSubCategory(subject)
  }else if(category === "Development"){
     setSubCategory(development)
  }else{
    setSubCategory(DSA)
  }
}

useEffect(()=>{
  handleSubChange()
},[category])


const handleSubmit = async() =>{
  try{
    const result = await UploadPdf({
    Title: title,
    Category: category,
    SubCategory: subCategoryValue,
    Pdf: pdfFile,
    discription: description,
    createdBy : userId._id
    })
    if(result){
      alert("Book uploaded successfully");
      console.log("Pdf uploaded successfully");
    }else{
      console.error("Pdf not uploaded")
    }
  }catch(error){
    console.log(error);
  }
}

  return (
    <>
    <div className={`personelEvent-container ${LightTheme ? "" : "dark"}`}>
      <p className={`eventTitle ${LightTheme ? "" : "dark"}`}>Upload PDF</p>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '43ch' }
      }}
      noValidate
      autoComplete="off"
      className='eventDetails'
    >
      <TextField id="standard-basic" label="Add Tittle" variant="standard" onChange={(e)=>{setTitle(e.target.value)}} className={`menuItem ${LightTheme ? "" : "dark"}`} />
     
       
         <Box sx={{ minWidth: '43ch' }} className={`menuItem ${LightTheme ? "" : "dark"}`}>
      `<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" className={`menuItem ${LightTheme ? "" : "dark"}`}>Category</InputLabel>
        <Select
        className={`menuItem ${LightTheme ? "" : "dark"}`}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Category"
          onChange={(e) => {setCategory(e.target.value)}}
        >
          <MenuItem value="Subject" className={`menuItem ${LightTheme ? "" : "dark"}`}>Subject</MenuItem>
          <MenuItem value="Development" className={`menuItem ${LightTheme ? "" : "dark"}`}>Development</MenuItem>
          <MenuItem value="DSA" className={`menuItem ${LightTheme ? "" : "dark"}`}>DSA</MenuItem>
        </Select>
      </FormControl>`
    </Box>

    <Box sx={{ minWidth: '43ch' }}>
      <FormControl fullWidth>
         <InputLabel id="demo-multiple-checkbox-label" className={`checkbox-label ${LightTheme ? "" : "dark"}`}>Subject</InputLabel>
        <Select
        className={`multiple-checkbox ${LightTheme ? "" : "dark"}`}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={subCategoryValue}
          onChange={handleSubCategory}
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
          {subCategory.map((name) => (
            <MenuItem key={name} value={name} className={`menuItem ${LightTheme ? "" : "dark"}`}>
              <Checkbox checked={subCategoryValue.indexOf(name) > -1} className={`menuItem ${LightTheme ? "" : "dark"}`} />
              <ListItemText primary={name} className={`menuItem ${LightTheme ? "" : "dark"}`} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>

    <Button style={{color:"#63d7b0", width:"33%"}} component="label" variant="outlined" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput type="file" onChange={(e)=> {console.log(e.target.files[0]); setPdfFile(e.target.files[0])}}/>
    </Button>
  
       <TextField
       className={`menuItem ${LightTheme ? "" : "dark"}`}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={3}
          onChange={(e)=>{setDescription(e.target.value)}}
          aria-colcount={6}
          defaultValue="Nice Book"
          sx={{ width: '100%' }}
        />
        <div>
          <Button onClick={() => handleSubmit()} style={{backgroundColor:"#63d7b0"}} variant="contained" size="large"  >
          UPLOAD 
        </Button></div>
          
   
      </Box>
    
    </div>
    </>
  )
}

export default Form