import React, { useState, useEffect } from "react";

const ClockHook = () => {
  const [date, setDate] = useState(new Date());
  var timerID;

  useEffect(() => {
    timerID = setInterval(setDate(new Date()), 1000);
    return () => {
      clearInterval(timerID);
    };
  });

  return <div>It is {date.toLocaleTimeString()}.</div>;
};

export default ClockHook;
