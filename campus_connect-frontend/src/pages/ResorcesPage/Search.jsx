import "./../../assets/style/myStyle.css";
import {IconButton} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
import {useSelector , useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import pdf from "./../../assets/images/pdf2.png";
import DownloadIcon from '@mui/icons-material/Download';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GradeIcon from '@mui/icons-material/Grade';
import { useNavigate } from "react-router-dom";
import { removeFavourities, setFavourities } from "../../store/Slice/FavouriteSlice";
import { ViewPdf } from "../../service/Pdf/resource";

function Search() {
  const nav = useNavigate()
  const dispatch = useDispatch();
    const [pdfList , setPdfList] = useState([])
    const LightTheme = useSelector((state) => state.themeKey)
    const [searchQuery , setSearchQuery] = useState("");
    const favoriteList = useSelector((state) => state.favourite.id);
   

    const AllPdf = async()=>{
      const result = await ViewPdf();
      setPdfList(result.data.data);
    }
    useEffect(()=>{
      AllPdf();
    },[])
    const toggleFavorite = (pdfItemId) => {
      if (favoriteList.includes(pdfItemId)) {
        dispatch(removeFavourities(pdfItemId));
      } else {
        dispatch(setFavourities(pdfItemId));
      }
    };
  return (
    <>
    <div className="PdfSearch">
    <div className={`sb-search ${LightTheme ? "" : "dark"}`}>
            <IconButton>
              <SearchIcon className={`icon ${LightTheme ? "" : "dark"}`} />
            </IconButton>
            <input
              type="text"
              className={`Search-box ${LightTheme ? "" : "dark"}`}
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="pdfcol" style={{display:"flex", flex:1 , flexWrap:"wrap" , overflow:"scroll"}}>
          {pdfList.map((pdfItem, index) => (
  <div className="pdf" key={index}>
    <div style={{ display: "flex", justifyContent: "center", height: "80%" }}>
      <img onClick={() => nav(`/resource/view/${pdfItem.Pdf}`)} src={pdf} height={100} width={100} alt="pdf" />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <IconButton className="specialIcon"><DownloadIcon className="specialIcon" /></IconButton>
        <IconButton className="specialIcon" onClick={() => toggleFavorite(pdfItem._id)}>
                    {favoriteList.includes(pdfItem._id) ? <GradeIcon /> :<StarOutlineIcon /> }
                  </IconButton>
        <IconButton className="specialIcon"><GradeIcon /></IconButton>
      </div>
    </div>
    <p style={{ display: "flex", color: "#909090", justifyContent: "center", alignItems: "center", padding: "0px 10px", fontWeight: "bold" }}>
      {pdfItem.Title}
    </p>
    
  </div>
))}
            
          </div>
          
    </div>
    </>
  )
}

export default Search