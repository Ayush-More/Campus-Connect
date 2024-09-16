import axiosAuth from "./../axios/axios";

const fetchAllUser = async () => {
  try {
    const resData = await axiosAuth.get("/chat/fetchUsers", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    return resData;
  } catch (error) {
    console.log(error);
  }
};

const AccessChat = async (value) => {
  try {
    console.log(value);
    const resData = await axiosAuth.get("/chat/chatsdetail/" + value, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    console.log(resData);
    return resData;
  } catch (error) {
    console.log(error);
  }
};

const CreateOneToOne = async (value) => {
  try {
    const resData = await axiosAuth.post("/chat", value, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    console.log(resData);
    return resData;
  } catch (error) {
    console.log(error);
  }
};

const FetchChat = async () => {
  try {
    const resData = await axiosAuth.get("/chat", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    console.log(resData);
    return resData;
  } catch (error) {
    console.log(error);
  }
};

const FetchAllGroup = async () => {
  try {
    const resData = await axiosAuth.get("/chat/fetchGroups", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    console.log(resData);
    return resData;
  } catch (error) {
    console.log(error);
  }
};

const addSelfGroup = async (value) => {
  try {
    const resData = await axiosAuth.post("/chat/addSelf", value, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    console.log(resData);
    return resData;
  } catch (error) {
    console.log(error);
  }
};

const createGroup = async (value) => {
  try {
    console.log(value);
    const resData = await axiosAuth.post("/chat/createGroup", value, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    console.log(resData);
    return resData;
  } catch (error) {
    console.log(error);
  }
};

const AllUser = async (value) => {
  try {
    console.log(value);
    const resData = await axiosAuth.get("/chat/alluser", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    console.log(resData);
    return resData;
  } catch (error) {
    console.log(error);
  }
};

export {
  fetchAllUser,
  AccessChat,
  FetchChat,
  FetchAllGroup,
  addSelfGroup,
  createGroup,
  CreateOneToOne,
  AllUser,
};
