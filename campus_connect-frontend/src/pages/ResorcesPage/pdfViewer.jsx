import { useState , useEffect , lazy , Suspense} from "react";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import pdf from "./../../assets/pdf/Pdf1710172431881.pdf";


function PdfViewer() {
  const {name} = useParams();
  console.log(name);
    const newplugin = defaultLayoutPlugin();
    const [ viewPdf , setViewPdf] = useState(true);
    const [viewUrl , setPdfUrl] = useState(`./../../assets/pdf/Pdf1710172431881.pdf`);
    console.log(viewUrl)

  //  const pdf ="";
  //   useEffect(() => {
  //     const fetchPdf = async () => {
  //       try {
  //         // Dynamically import the PDF file based on the name parameter
  //         /* @vite-ignore */
  //         const pdfModule = await import(`./../../assets/pdf/${name}`);
  //         setPdfUrl(pdfModule.default);
  //       } catch (error) {
  //         console.error("Error loading PDF:", error);
  //       }
  //     };
  //     lazy(async() => {
  //     pdf = await import(`./../../assets/pdf/${name}`)});
  
  //     fetchPdf();
  //   }, [name]);
  
  return (
    <>
    <Suspense fallback={
    <div className='pdfViewer'>
   <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
   {viewPdf && <>
   <Viewer fileUrl = {pdf} plugin = {[newplugin]} />
   </>}
   {!viewPdf && <>
    No Pdf
   </>}
   </Worker>
        
    </div>}/>
    </>
  )
}
PdfViewer.propTypes = {
  pdfUrl: PropTypes.string.isRequired,
};

export default PdfViewer