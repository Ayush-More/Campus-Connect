import axiosAuth from "./../axios/axios";

const getPersonelEvent = async (value) => {
  try {
    console.log(value);
    const result = await axiosAuth.post("/calender/day", value, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { getPersonelEvent };
