import "./../../assets/style/myStyle.css";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import pdf from "./../../assets/images/pdf2.png";
import DownloadIcon from "@mui/icons-material/Download";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import GradeIcon from "@mui/icons-material/Grade";
import { useNavigate, useLocation } from "react-router-dom";
import {
  removeFavourities,
  setFavourities,
} from "../../store/Slice/FavouriteSlice";
import { ViewPdf } from "../../service/Pdf/resource";
import queryString from "query-string";
import { pdfDiscription, pdfView } from "./../../store/Slice/pdfSlice";

function Search() {
  let location = useLocation();
  const queryParams = queryString.parse(location.search);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [pdfList, setPdfList] = useState([]);
  const LightTheme = useSelector((state) => state.themeKey);
  const [searchQuery, setSearchQuery] = useState("");
  const favoriteList = useSelector((state) => state.favourite.id);

  const AllPdf = async () => {
    const result = await ViewPdf();
    setPdfList(result.data.data);
  };

  const hasDevelopmentQuery = queryParams.development
    ? queryParams.development.split(",")
    : [];
  const hasSubjectQuery = queryParams.subject
    ? queryParams.subject.split(",")
    : [];
  const hasDsaQuery = queryParams.dsa ? queryParams.dsa.split(",") : [];

  const filteredpdf = pdfList.filter((pdf) => {
    console.log("Filter called");
    const matchesSearchQuery = searchQuery
      ? pdf.Title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    console.log(hasDevelopmentQuery + "and" + hasDsaQuery);

    let matchDevelopmentQuery;
    let matchSubjectQuery;
    let matchDsaQuery;

    if (
      hasDevelopmentQuery.length > 0 ||
      hasSubjectQuery.length > 0 ||
      hasDsaQuery.length > 0
    ) {
      matchDevelopmentQuery = hasDevelopmentQuery.length
        ? hasDevelopmentQuery.some((query) => pdf.SubCategory.includes(query))
        : false;
      matchSubjectQuery = hasSubjectQuery.length
        ? hasSubjectQuery.some((query) => pdf.SubCategory.includes(query))
        : false;
      matchDsaQuery = hasDsaQuery.length
        ? hasDsaQuery.some((query) => pdf.SubCategory.includes(query))
        : false;
      return (
        matchesSearchQuery &&
        (matchDevelopmentQuery || matchSubjectQuery || matchDsaQuery)
      );
    } else {
      matchDevelopmentQuery = hasDevelopmentQuery.length
        ? hasDevelopmentQuery.some((query) => pdf.SubCategory.includes(query))
        : true;
      matchSubjectQuery = hasSubjectQuery.length
        ? hasSubjectQuery.some((query) => pdf.SubCategory.includes(query))
        : true;
      matchDsaQuery = hasDsaQuery.length
        ? hasDsaQuery.some((query) => pdf.SubCategory.includes(query))
        : true;
      return (
        matchesSearchQuery &&
        matchDevelopmentQuery &&
        matchSubjectQuery &&
        matchDsaQuery
      );
    }
  });

  useEffect(() => {
    filteredpdf;
    console.log("useFffect");
  }, [hasDevelopmentQuery, hasSubjectQuery, hasDsaQuery]);
  useEffect(() => {
    AllPdf();
  }, []);
  const toggleFavorite = (pdfItemId) => {
    if (favoriteList.includes(pdfItemId)) {
      dispatch(removeFavourities(pdfItemId));
    } else {
      dispatch(setFavourities(pdfItemId));
    }
  };

  const onDownloadClick = () => {
    console.log("download");
    const pdfUrl = "/assets/Climb_Stairs.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <div
          className="pdfcol"
          style={{
            display: "flex",
            flex: 1,
            flexWrap: "wrap",
            overflow: "scroll",
          }}
        >
          {filteredpdf.map((pdfItem, index) => {
            dispatch(pdfDiscription(pdfItem.discription));
            console.log(pdfItem);
            return (
              <div
                className={`pdf ${LightTheme ? "" : "dark"}`}
                key={index}
                style={{ height: "fit-content" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <img
                    onClick={() => {
                      nav(
                        `/resource/view/${pdfItem.Pdf.version}/${pdfItem.Pdf.public_id}`
                      );
                      dispatch(pdfView());
                    }}
                    src={pdf}
                    height={100}
                    width={100}
                    alt="pdf"
                  />
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p
                    style={{
                      display: "flex",
                      color: "#909090",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "0px 10px",
                      fontWeight: "bold",
                    }}
                  >
                    {pdfItem.Title}
                  </p>
                  <IconButton
                    className="specialIcon"
                    onClick={() => toggleFavorite(pdfItem._id)}
                  >
                    {favoriteList.includes(pdfItem._id) ? (
                      <GradeIcon />
                    ) : (
                      <StarOutlineIcon />
                    )}
                  </IconButton>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Search;
