// formatting date YYY-MMM-DD
export const today = () => {
  let today = new Date();
  let DD = String(today.getDate()).padStart(2, "0");
  let MM = String(today.getMonth() + 1).padStart(2, "0");
  let YYYY = today.getFullYear();
  return (today = `${YYYY}-${MM}-${DD}`);
};

// get last date of the year
const returnLastDate = () => {
  const currentYear = new Date().getFullYear();
  let lastDate = new Date(currentYear, 11, 31);
  const date = lastDate.getDate();
  const lastMonth = lastDate.getMonth() + 1;
  return (lastDate = `${currentYear}-${lastMonth}-${date}`);
};
export const lastDate = returnLastDate();

// get 10 days before date
const returnMinDate = (days) => {
  const currDate = new Date();
  const prevDate = new Date(currDate.getTime() - days * 24 * 60 * 60 * 1000);
  const day = String(prevDate.getDate()).padStart(2, "0");
  const month = String(prevDate.getMonth() + 1).padStart(2, "0");
  const year = prevDate.getFullYear();
  const minDate = `${year}-${month}-${day}`;
  return minDate;
};
export const minDate = returnMinDate(10);

// get timestamp of current date
export const toTimeStamp = (currentDate) => {
  const datum = Date.parse(currentDate);
  return datum / 1000;
};

// get day from Date
export const getDayFromDate = (chartData) => {
  const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const newArr = chartData.map((obj) => {
    if (obj.day) {
      return { ...obj, day: days[new Date(obj.day).getDay()] };
    }
  });
  return newArr;
};

// print full date long
export const dateAndTime = (date) => {
  return new Date(date).toLocaleTimeString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
