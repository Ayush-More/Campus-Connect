import { IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GradeIcon from '@mui/icons-material/Grade';
import pdf from "./../../assets/images/pdf2.png";
import { useNavigate } from 'react-router-dom';
import {useSelector , useDispatch } from "react-redux";
import logo from "./../../assets/images/live-chat_16px.png"
import { favouritePdf } from '../../service/Pdf/resource';
import { useEffect , useState } from 'react';
import { removeFavourities, setFavourities } from "../../store/Slice/FavouriteSlice";
import PdfViewer from './pdfViewer';
import {pdfDiscription , pdfView} from "./../../store/Slice/pdfSlice"
function FavioritePage () {
    const List = useSelector((state)=> state.favourite.id);
    const favoriteList = useSelector((state) => state.favourite.id);
    const [Pdf , setPdf] = useState([]);
    const nav = useNavigate();
    const dispatch = useDispatch();

    const AllPdf = async()=>{
      const result = await favouritePdf({list: List});
      setPdf(result.data.data);
    }
    const LightTheme = useSelector((state)=> (state.themeKey));
    useEffect(()=>{
      AllPdf();
    },[List])
    const toggleFavorite = (pdfItemId) => {
      if (favoriteList.includes(pdfItemId)) {
        dispatch(removeFavourities(pdfItemId));
      } else {
        dispatch(setFavourities(pdfItemId));
      }
    };
    console.log(Pdf.Pdf);
    
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
      {Pdf.map((favItem , index)=>{
        dispatch(pdfDiscription(favItem.discription))
        console.log(favItem.Pdf);
      return(
        <div className="pdf" key={index}>
        <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
          <img onClick={() => {nav(`/resource/view/${favItem.Pdf.version}/${favItem.Pdf.public_id}`); dispatch(pdfView())}} src={pdf} height={100} width={100} alt="pdf" />
        </div>
        <div style={{display:"flex" , justifyContent:"space-between"}}>
        <p style={{ display: "flex", color: "#909090", justifyContent: "center", alignItems: "center", padding: "0px 10px", fontWeight: "bold" }}>
          {favItem.Title}
        </p>
        <IconButton className="specialIcon" onClick={() => toggleFavorite(favItem._id)}>
                        {favoriteList.includes(favItem._id) ? <GradeIcon /> :<StarOutlineIcon /> }
                      </IconButton>
        </div>    
      </div>
      )})}
            
           
          </div>
    </div>
    </>
    
  )
}

export default FavioritePage