import axiosAuth from "../axios/axios";
import { axiosFormData } from "../axios/axios";

const createMentor = async (value) => {
  try {
    console.log(value);
    const result = await axiosAuth.post("/admin/add_mentor", value, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const createEvent = async (value) => {
  try {
    console.log(value);
    const result = await axiosFormData.post("/admin/add_event", value, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const SeeUsers = async () => {
  try {
    const result = await axiosAuth.get("/chat/alluser", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const SeeNotes = async () => {
  try {
    const result = await axiosAuth.get("/admin/notes", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const SeeEvent = async () => {
  try {
    const result = await axiosAuth.get("/admin/event", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const deleteNotes = async (value) => {
  try {
    const result = await axiosAuth.get("/admin/delete_notes/" + value, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (value) => {
  try {
    const result = await axiosAuth.get("/admin/delete_user/" + value, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

const deleteEvent = async (value) => {
  try {
    const result = await axiosAuth.get("/admin/delete_event/" + value, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
export {
  createMentor,
  createEvent,
  SeeUsers,
  SeeNotes,
  SeeEvent,
  deleteNotes,
  deleteUser,
  deleteEvent,
};
