import{ useState } from "react";
import logo from "./../assets/images/login_image.png";
import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthLogin , AuthSignUp } from "../service/auth/authorization";
import AlertToast from "./Toast/toast";
import { setCredentials } from "../store/Slice/AuthSlice";

function Login() {
  const dispatch = useDispatch();
  const [form, setForm] = useState(true);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  //Try
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //
  const handleForm = () => {
    setForm(!form);
  };
  
  const [signUpFormData, setSignUpFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const LightTheme = useSelector((state) => state.themeKey);
  const nav = useNavigate();
 
  const Change = (e) => {
    setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
  };


  const handleSignupSubmit = async () => {
    setLoading(true);
   
      var result = await AuthSignUp({name:signUpFormData.name ,email: signUpFormData.email,password: signUpFormData.password, passwordConfirm:signUpFormData.passwordConfirm}).then((res)=>{
        if (res.data.user && res.data.token) {
          setLoading(false);
          setForm(true);
          dispatch(setCredentials(res.data.token));
          setAlert({ severity: "success", message: "Welcome" });
          return res.data;
        }
        return null;
      });
      return result;
  };

  const handleLoginSubmit = async () => {
    setLoading(true);
      var result = await AuthLogin({email: email, password: password}).then((res)=>{
        if (res.data.user && res.data.token) {
          setLoading(false);
          localStorage.setItem("user" , JSON.stringify(res.data.user));
          if( res.data.user.role === "mentor"){
            nav("/mentor");
          }
          else if(res.data .user.role === "admin"){
            nav("/admin")
          }
          else{
            nav("/")
          }
          dispatch(setCredentials(res.data.token));
          setAlert({ severity: "success", message: "Welcome" });
          return res.data;
        }
        else{
          setLoading(false);
          setAlert({ severity: "error", message: "Invalid user" });
        }
        return null;
      });
      return result;
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
      {/* {alert && <AlertToast severity={alert.severity} message={alert.message} />} */}
      <div className={`login-container ${LightTheme ? "" : "con-dark"}`}>
        <div className="image-container">
          <img src={logo} alt="Logo" className="welcome-logo" />
        </div>
        <div className={`form-box ${LightTheme ? "" : "dark"}`}>
          {form ? (
            <div className={`login-form ${LightTheme ? "" : "con-dark"}`}>
              <h3 style={{ marginBottom: "10px", color: "#00005C" }}>LOGIN</h3>
              <input
                name="email"
                onChange={(e)=>{setEmail(e.target.value)}}
                className={`text-box ${LightTheme ? "" : "dark"}`}
                placeholder="Enter email"
              />
              <input
                name="password"
                onChange={(e)=>{setPassword(e.target.value)}}
                className={`text-box ${LightTheme ? "" : "dark"}`}
                placeholder="Password"
              />
              <h5>
                <Link href="#">Forgot password?</Link>
              </h5>
              <button
                className="enter-btn"
                type="submit"
                onClick={handleLoginSubmit}
              >
                Enter
              </button>
              <h5 style={{ color: "#00005C" }}>
                Dont have an account?
                <span>
                  <Link
                    href="#"
                    onClick={handleForm}
                    style={{ cursor: "pointer", color: "gray" }}
                  >
                    Signup
                  </Link>
                </span>
              </h5>
            </div>
          ) : (
            <div className={`login-form ${LightTheme ? "" : "con-dark"}`}>
              <h3 style={{ marginBottom: "10px", color: "#00005C" }}>
                SIGN UP
              </h3>
              <input
                className={`text-box ${LightTheme ? "" : "dark"}`}
                placeholder="Name"
                name="name"
                value={signUpFormData.name}
                onChange={Change}
              />
              <input
                className={`text-box ${LightTheme ? "" : "dark"}`}
                placeholder="Enter email"
                name="email"
                value={signUpFormData.email}
                onChange={Change}
              />
               <input
                className={`text-box ${LightTheme ? "" : "dark"}`}
                placeholder="password"
                name="password"
                value={signUpFormData.password}
                onChange={Change}
              />
              <input
                className={`text-box ${LightTheme ? "" : "dark"}`}
                placeholder="Confirm password"
                name="passwordConfirm"
                value={signUpFormData.passwordConfirm}
                onChange={Change}
              />
              <button
                className="enter-btn"
                type="submit"
                onClick={handleSignupSubmit}
              >
                Enter
              </button>
              <h5>
                Already have an account?
                <span>
                  <Link
                    href="#"
                    onClick={handleForm}
                    style={{ cursor: "pointer", color: "gray" }}
                  >
                    login
                  </Link>
                </span>
              </h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
