import { useEffect, useState } from "react";

export const Timer = () => {
  const [time, setTime] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);
    // eslint-disable-next-line
  }, []);
  return time;
};

export const greetings = () => {
  const today = new Date();
  const currHrs = today.getHours();
  let greeting;
  if (currHrs < 12) {
    greeting = "Good Morning";
  } else if (currHrs < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return greeting;
};
