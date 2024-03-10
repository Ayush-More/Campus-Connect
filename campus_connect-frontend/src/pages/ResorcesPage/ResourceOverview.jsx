import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
function ResourceOverview() {

  const LightTheme = useSelector((state) => state.themeKey);
  return (
   <>
   <div className={`main-container ${LightTheme ? "" : "con-dark"}`}>
    <Sidebar/>
    <Outlet/>
   </div>
   </>
  )
}

export default ResourceOverview