import { IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GradeIcon from '@mui/icons-material/Grade';
import pdf from "./../../assets/images/pdf2.png";
import { useNavigate } from 'react-router-dom';
import {useSelector } from "react-redux";
import logo from "./../../assets/images/live-chat_16px.png"

function FavioritePage() {
    
    const nav = useNavigate();
    const LightTheme = useSelector((state)=> (state.themeKey));
  return (
    <>
    <div className={`list-container ${LightTheme ? "" : "con-dark"}`}>
    <div className={`chatArea-header ${LightTheme ? "" : "dark"}`}>
            <IconButton>
              <img src={logo} alt="logo" />
            </IconButton>
            <p className="chatArea-text ">Favourite PDF</p>
          </div>
    <div className="pdfcol" style={{display:"flex", flex:1 , flexWrap:"wrap" , overflow:"scroll"}}>
            <div className="pdf" onClick={() => nav("view")}>
                
                <div style={{ display:"flex", justifyContent:"center", height:"80%" }}>
                <img src={pdf} height={100} width={100} alt="pdf"/>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
                <IconButton className="specialIcon"><DownloadIcon className="specialIcon"/></IconButton>
                <IconButton className="specialIcon"><StarOutlineIcon /></IconButton>
                <IconButton  className="specialIcon"><GradeIcon/></IconButton>
                </div>
                
                </div>
                <p style={{display:"flex"  ,color: "#909090", justifyContent:"center", alignItems:"center", padding:" 0px 10px" , fontWeight:"bold"}}>COA Notes AL
                </p>
            </div>
            <div className="pdf" onClick={() => nav("view")}>
                
                <div style={{ display:"flex", justifyContent:"center", height:"80%" }}>
                <img src={pdf} height={100} width={100} alt="pdf"/>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
                <IconButton className="specialIcon"><DownloadIcon className="specialIcon"/></IconButton>
                <IconButton className="specialIcon"><StarOutlineIcon /></IconButton>
                <IconButton  className="specialIcon"><GradeIcon/></IconButton>
                </div>
                
                </div>
                <p style={{display:"flex"  ,color: "#909090", justifyContent:"center", alignItems:"center", padding:" 0px 10px" , fontWeight:"bold"}}>COA Notes AL
                </p>
            </div>
            <div className="pdf" onClick={() => nav("view")}>
                
                <div style={{ display:"flex", justifyContent:"center", height:"80%" }}>
                <img src={pdf} height={100} width={100} alt="pdf"/>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
                <IconButton className="specialIcon"><DownloadIcon className="specialIcon"/></IconButton>
                <IconButton className="specialIcon"><StarOutlineIcon /></IconButton>
                <IconButton  className="specialIcon"><GradeIcon/></IconButton>
                </div>
                
                </div>
                <p style={{display:"flex"  ,color: "#909090", justifyContent:"center", alignItems:"center", padding:" 0px 10px" , fontWeight:"bold"}}>COA Notes AL
                </p>
            </div>
            <div className="pdf" onClick={() => nav("view")}>
                
                <div style={{ display:"flex", justifyContent:"center", height:"80%" }}>
                <img src={pdf} height={100} width={100} alt="pdf"/>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
                <IconButton className="specialIcon"><DownloadIcon className="specialIcon"/></IconButton>
                <IconButton className="specialIcon"><StarOutlineIcon /></IconButton>
                <IconButton  className="specialIcon"><GradeIcon/></IconButton>
                </div>
                
                </div>
                <p style={{display:"flex"  ,color: "#909090", justifyContent:"center", alignItems:"center", padding:" 0px 10px" , fontWeight:"bold"}}>COA Notes AL
                </p>
            </div>
            <div className="pdf" onClick={() => nav("view")}>
                
                <div style={{ display:"flex", justifyContent:"center", height:"80%" }}>
                <img src={pdf} height={100} width={100} alt="pdf"/>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
                <IconButton className="specialIcon"><DownloadIcon className="specialIcon"/></IconButton>
                <IconButton className="specialIcon"><StarOutlineIcon /></IconButton>
                <IconButton  className="specialIcon"><GradeIcon/></IconButton>
                </div>
                
                </div>
                <p style={{display:"flex"  ,color: "#909090", justifyContent:"center", alignItems:"center", padding:" 0px 10px" , fontWeight:"bold"}}>COA Notes AL
                </p>
            </div>
          </div>
    </div>
    </>
    
  )
}

export default FavioritePage