import React from "react";
import "../css/Content.css";

function Content({ children }) {
  return <div className="Content col-9">{children}</div>;
}

export default Content;
