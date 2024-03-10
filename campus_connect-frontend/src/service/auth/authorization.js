import axiosAuth from "./../axios/axios";
var resetToken = null;
const AuthLogin = async (value) => {
  try {
    console.log(value);
    const resData = await axiosAuth.post("/user/login", value);
    return resData;
  } catch (error) {
    console.log(error);
  }
};
const AuthSignUp = async (value) => {
  try {
    console.log(value);
    const resData = await axiosAuth.post("/user/signup", value);
    return resData;
  } catch (error) {
    console.log(error);
  }
};
const AuthforgotPassword = async (value) => {
  try {
    const resData = await axiosAuth.post("/user/forgotPassword", value);
    resetToken = resData.resetToken;
    return resData;
  } catch (error) {
    console.log(error);
  }
};
const AuthResetPassword = async (value) => {
  try {
    const resData = await axiosAuth.post(
      `/user/restPassword/${resetToken}`,
      value
    );
    return resData;
  } catch (error) {
    console.log(error);
  }
};

export { AuthLogin, AuthSignUp, AuthforgotPassword, AuthResetPassword };
