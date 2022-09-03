import axiosInstance from "../axiosInstance";
import { showErrorToast, showSuccessToast } from "../../Toastify/showToast";
import fileDownload from "js-file-download/file-download";

export const fetchBackup = async () => {
  try {
    const response = await axiosInstance.get(`/members/backup/`, {
      responseType: "blob",
    });
    fileDownload(response.data, "gym-backup.csv");
    showSuccessToast("Backup downloaded successfully.");
  } catch (err) {
    console.log(err);
    if (err.response === undefined) {
      showErrorToast("Internal server error!");
    } else {
      showErrorToast(err.response.data.detail);
    }
  }
};
