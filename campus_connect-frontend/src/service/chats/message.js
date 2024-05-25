import axiosAuth from "./../axios/axios";

const sendMessage = async (value) => {
  try {
    const resData = await axiosAuth.post("/messages", value, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    return resData;
  } catch (error) {
    console.log(error);
  }
};

const allMessages = async (id) => {
  try {
    const result = await axiosAuth.get("/messages/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { sendMessage, allMessages };
