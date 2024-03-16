import{ useState } from "react";
import { useSelector} from "react-redux";
import { updatePassword } from "../../service/auth/authorization";


function ChangePassword() {

 const LightTheme = useSelector((state)=> state.themeKey)

 const [formData , setformData] = useState({
    password:"",
    passwordConfirm:"",
    passwordCurrent:"",
 })

 const Change= async(e) => {
    setformData({...formData , [e.target.name]: e.target.value})
 }

 const HandleSubmit = async()=> {
    const result = await updatePassword(formData);
    console.log(result);
    if(result){
        alert("password Changed");
    }
 }
  return (
    <>      
            <div className={`login-form ${LightTheme ? "" : "con-dark"}`}>
              <h3 style={{ marginBottom: "10px", color: "#00005C" }}>
                Change password
              </h3>
              <input
                className={`text-box ${LightTheme ? "" : "dark"}`}
                placeholder="Enter current password"
                name="passwordCurrent"
                value={formData.passwordCurrent}
                onChange={Change}
              />
               <input
                className={`text-box ${LightTheme ? "" : "dark"}`}
                placeholder="password"
                name="password"
                value={formData.password}
                onChange={Change}
              />
              <input
                className={`text-box ${LightTheme ? "" : "dark"}`}
                placeholder="Confirm password"
                name="passwordConfirm"
                value={formData.passwordConfirm}
                onChange={Change}
              />
              <button
                className="enter-btn"
                type="submit"
                onClick={HandleSubmit}
              >
                Enter
              </button>
            </div>
    </>
  );
}

export default ChangePassword;
