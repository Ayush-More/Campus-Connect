import { axiosFormData } from "./../axios/axios";
import axiosAuth from "./../axios/axios";

const UploadPdf = async (value) => {
  try {
    console.log(value);
    const resdata = await axiosFormData.post("/notes/addNotes", value, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    return resdata;
  } catch (error) {
    console.log(error);
  }
};
const ViewPdf = async () => {
  try {
    const result = await axiosAuth.get("/notes", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { UploadPdf, ViewPdf };
