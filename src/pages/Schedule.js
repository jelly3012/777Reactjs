import React from "react";
import "../css/Schedule.css";

const ScheduleImg = require("../images/cover.jpg");

function Schedule() {
  return (
    <div className="Schedule">
      <h3 className="Schedule-h">777 FREEROLL TOURNAMENT</h3>
      <div className="ScheduleImg">
        <img src={ScheduleImg} alt="ScheduleImg" />
      </div>
      <div className="Schedule-content"></div>
    </div>
  );
}

export default Schedule;
