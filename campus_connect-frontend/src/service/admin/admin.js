import axiosAuth from "../axios/axios";
import { axiosFormData } from "../axios/axios";

const createMentor = async (value) => {
  try {
    const result = await axiosFormData.post("", value, {
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
    const result = await axiosFormData.post("", value, {
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
    const result = await axiosAuth.get("");
    return result;
  } catch (error) {
    console.log(error);
  }
};

const SeeNotes = async () => {
  try {
    const result = await axiosAuth.get("");
    return result;
  } catch (error) {
    console.log(error);
  }
};

const SeeEvent = async () => {
  try {
    const result = await axiosAuth.get("");
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { createMentor, createEvent, SeeUsers, SeeNotes, SeeEvent };
