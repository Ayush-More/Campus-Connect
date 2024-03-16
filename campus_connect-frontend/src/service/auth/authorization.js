import axiosAuth from "./../axios/axios";
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
    console.log(value);
    const resData = await axiosAuth.post("/user/forgotPassword", value);

    return resData;
  } catch (error) {
    console.log(error);
  }
};

const AuthResetPassword = async (value, resetToken) => {
  try {
    console.log(resetToken);
    const resData = await axiosAuth.patch(
      `/user/resetPassword/${resetToken}`,
      value
    );
    return resData;
  } catch (error) {
    console.log(error);
  }
};

const updatePassword = async (value) => {
  try {
    const resData = await axiosAuth.post("/user/changePassword", value, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    return resData;
  } catch (error) {
    console.log(error);
  }
};
export {
  AuthLogin,
  AuthSignUp,
  updatePassword,
  AuthforgotPassword,
  AuthResetPassword,
};
