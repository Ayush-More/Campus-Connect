import "./../../assets/style/myStyle.css"
import { useSelector } from "react-redux"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

function Footer() {
  const nav = useNavigate()
  const LightTheme = useSelector((state) => state.themeKey)
  return (
    <>
   
    <footer>
      <div className={`main-content ${LightTheme ? "" : "dark"}`}>
        <div className="left box">
          <h2>About us</h2>
          <div className="content">
            <p>Campus Connect is the platlorm where the student can connect the senior and can have the mentorship from them as well as they can be always be updated about the events in the college.</p>
            <div >
            <Button style={{ backgroundColor:"#63d7b0", margin:"30px"}} variant="outlined" size="small">
          Admin
        </Button>
        <Button style={{ backgroundColor:"#63d7b0", margin:"30px"}}  variant="outlined" size="small" onClick={()=> nav("/mentor/login")}>
          Mentor
        </Button>
            </div>
          </div>
        </div>

        <div className="center box">
          <h2>Address</h2>
          <div className="content">
            <div className="place">
              <span className="fas fa-map-marker-alt"></span>
              <span className="text">Mumbai, Kandivali</span>
            </div>
            <div className="phone">
              <span className="fas fa-phone-alt"></span>
              <span className="text">+915623725278</span>
            </div>
            <div className="email">
              <span className="fas fa-envelope"></span>
              <span className="text">campusConnect@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="right box">
          <h2>Contact us</h2>
          <div className="content">
            <form action="#">
              <div className="email">
                <div className="text">Email *</div>
                <input className={`menuItem ${LightTheme ? "" : "dark"}`} type="email" required/>
              </div>
              <div className="msg">
                <div className="text">Message *</div>
                <textarea className={`menuItem ${LightTheme ? "" : "dark"}`} rows="2" cols="25" required></textarea>
              </div>
              <div className="btn">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
 
    </>
  )
}

export default Footer