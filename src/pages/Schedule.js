import React from "react";
import "../css/Schedule.css";

const ScheduleImg = require("../images/Schedule.png");

function Schedule() {
  return (
    <div className="Schedule">
      <h3 className="Schedule-h">777 TOURNAMENT</h3>
      <div className="fl-on-fb">
        <a href="https://www.facebook.com/777ecopark" target="_blank">
          Follow on Facebook
        </a>
      </div>
      <div className="ScheduleImg">
        <img src={ScheduleImg} alt="ScheduleImg" />
      </div>
      <div className="Schedule-content"></div>
    </div>
  );
}

export default Schedule;
