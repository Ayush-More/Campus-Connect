import { useState } from "react";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import pdf from "./../../assets/pdf/Climb_Stairs.pdf";


function PdfViewer() {
    const newplugin = defaultLayoutPlugin();
    const [ viewPdf , setViewPdf] = useState(true)
  return (
    <>
    <div className='pdfViewer'>

   <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
   {viewPdf && <>
   <Viewer fileUrl = {pdf} plugin = {[newplugin]} />
   </>}
   {!viewPdf && <>
    No Pdf
   </>}
   </Worker>
        
    </div>
    </>
  )
}

export default PdfViewer