import { useState ,  useEffect } from "react";

import { useParams , useNavigate  } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import {pdfView} from "./../../store/Slice/pdfSlice";
import { useDispatch} from "react-redux";
import 'react-pdf/dist/Page/TextLayer.css';


function PdfViewer() {
  const nav = useNavigate();
  const dispatch = useDispatch()
  const {version , id} = useParams();
 

const [pdf, setPdf] = useState("https://res.cloudinary.com/dsaz1qd6e/image/upload/v"+version+"/"+id+".pdf#toolbar=0&navpanes=0&scrollbar=0");
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  console.log(pdf)

  return (
    <>
      <div className="pdfViewer">
           {/* <p>
        Page {pageNumber} of {numPages}
      </p>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page, i) => {
            return (
              <Page
              key={i}
                pageNumber={page}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            );
          })}
      </Document>
      <div style={{paddingLeft:"10px"}}>
      <IconButton onClick={()=> { nav("/resource/search"); dispatch(pdfView())}}  >
    <CloseIcon/>
   </IconButton>
      </div> */}
      {/* <embed className="view" src={"https://res.cloudinary.com/dsaz1qd6e/image/upload/"+version+id+".pdf"} width={800} height={500}> */}
      <iframe className="view" 
                src={pdf}
                seamless="seamless" scrolling="no" 
            width="600" height="500">
        </iframe>
        <div style={{paddingLeft:"10px"}}>
      <IconButton onClick={()=> { nav("/resource/search"); dispatch(pdfView())}}  >
    <CloseIcon/>
   </IconButton>
      </div>
    </div>
    
    </>
  );
}
export default PdfViewer;


