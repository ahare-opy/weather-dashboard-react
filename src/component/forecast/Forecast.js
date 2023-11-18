import React, { useEffect, useState } from "react";
import LineChart from "../Chart/LineChart";

import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ tdata }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek - 2)
  );

  var [table, setTable] = useState(null);

  const chart = () => {
    setTable({
      labels: [forecastDays[0], forecastDays[1], forecastDays[2], forecastDays[3], forecastDays[4]],
      datasets: [
        {
          label: "5 day's Weather Forecast",
          data: [ tdata[0].main.temp, tdata[1].main.temp, tdata[2].main.temp, tdata[3].main.temp, tdata[4].main.temp],
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
        },
      ], 
    })
  }

  useEffect(() => {
    chart();
  });

  return (
    <div className="forecast">
      {table && <LineChart data={table} />}
    </div>
  );
}

export default Forecast;
