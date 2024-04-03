import { useState , lazy , useEffect } from "react";
import { Document, Page } from "react-pdf";
import { useParams } from "react-router-dom";
// import pdf from "./Pdf1712085409263.pdf"

function PdfViewer() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const {name} = useParams();
  // const pdf = require(`./../../assets/pdf/${name}`);
  
//   lazy(() => {
//   const pdfFile =  import("./Pdf1712085409263.pdf");
//   console.log(pdfFile);
//   return pdfFile
// })
useEffect(() => {
  console.log("./Pdf1712085409263.pdf")
  // Dynamically import the PDF file based on the name parameter
  import("./../../assets/pdf/"+ name)
    .then(pdf => {
      setNumPages(null); // Reset numPages while loading new PDF
      setPageNumber(1); // Reset pageNumber while loading new PDF
      setPdf(pdf.default);
    })
    .catch(error => {
      console.error("Error loading PDF:", error);
    });
}, []);

const [pdf, setPdf] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div className="pdfViewer">
           <p>
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
   
    </div>
    </>
  );
}
export default PdfViewer;


