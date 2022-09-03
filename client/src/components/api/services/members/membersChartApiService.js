import axiosInstance from "../../axiosInstance";

export const retrieveChartData = async () => {
  const response = await axiosInstance.get(
    "/members/sevendays-daily-admission-data/"
  );
  return response.data;
};
export const retrieveMonthlyChartData = async () => {
  const response = await axiosInstance.get(
    "/members/fourweeks-weekly-admission-data/"
  );
  return response.data;
};
