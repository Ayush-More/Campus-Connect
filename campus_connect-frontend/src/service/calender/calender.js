import { axiosFormData } from "../axios/axios";

const getPersonelEvent = async (value) => {
  try {
    const result = await axiosFormData.post("/calender/day", value, {
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
