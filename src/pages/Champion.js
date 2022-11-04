import React from "react";
import "../css/Champion.css";

const champion1 = require("../images/Champion/2210.png");
const champion2 = require("../images/Champion/2310.png");
const champion3 = require("../images/Champion/2610.png");

function Champion() {
  return (
    <div className="Champion row">
      <h5>777 Champions</h5>
      <img className="col-12" src={champion1} alt="" />
      <img className="col-12" src={champion2} alt="" />
    </div>
  );
}

export default Champion;
