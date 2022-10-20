import React from "react";
import "../css/Schedule.css";

const ScheduleImg = require("../images/lichthidau.png");

function Schedule() {
  return (
    <div className="Schedule">
      <img src={ScheduleImg} alt="ScheduleImg" />
    </div>
  );
}

export default Schedule;
