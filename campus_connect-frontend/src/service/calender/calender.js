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

const AllEvent = async () => {
  try {
    const result = await axiosAuth.get("/calender/all", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getMonthEvent = async (value) => {
  try {
    const result = await axiosAuth.get(
      "/calender/month/" + value.year + "/" + value.month,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
        },
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { getPersonelEvent, getMonthEvent, AllEvent };
