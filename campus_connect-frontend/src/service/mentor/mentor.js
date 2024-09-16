import axiosAuth from "./../axios/axios";
const fetchAllUser = async () => {
  try {
    const resData = await axiosAuth.get("/mentor/fetchUsers", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    return resData;
  } catch (error) {
    console.log(error);
  }
};

export { fetchAllUser };
