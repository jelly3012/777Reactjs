import React from "react";
import "../css/Cover.css";

const cover = require("../images/cover.jpg");

function Cover() {
  return (
    <div className="Cover row">
      <div className="Cover-image col-12">
        <img src={cover} alt="cover" />
      </div>
    </div>
  );
}

export default Cover;
