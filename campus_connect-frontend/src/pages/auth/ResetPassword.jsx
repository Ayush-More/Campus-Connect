import { useSelector } from "react-redux";
import { useState  } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AuthResetPassword } from "../../service/auth/authorization";
function ResetPassword() {
  let {token} = useParams();
  const nav = useNavigate()
  const LightTheme =  useSelector((state)=> state.themeKey);
  const [formData , setFormData] = useState({
    password:"",
    passwordConfirm:"",
  });

  const Change = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async()=>{
  const result = await AuthResetPassword(formData , token);
  if(result){
    console.log(result);
    nav("/auth");
  }
  }
  return (
    <>
    <div className={`login-form ${LightTheme ? "" : "con-dark"}`}>
              <h3 style={{ marginBottom: "10px", color: "#00005C" }}>LOGIN</h3>
              <input
                name="password"
                onChange={Change}
                className={`text-box ${LightTheme ? "" : "dark"}`}
                placeholder="Password"
              />
              <input
                name="passwordConfirm"
                onChange={Change}
                className={`text-box ${LightTheme ? "" : "dark"}`}
                placeholder="Confirm Password"
              />
              <button
                className="enter-btn"
                type="submit"
                onClick={handleSubmit}
              >
                Enter
              </button>
            </div>
    </>
  )
}

export default ResetPassword