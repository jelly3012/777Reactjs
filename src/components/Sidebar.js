import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../css/Sidebar.css";

function Sidebar() {
  return (
    <div className="Sidebar col-3">
      <div className="list-group" id="list-tab" role="tablist">
        <Link
          to="/lich-thi-dau"
          className="list-group-item list-group-item-action"
        >
          LỊCH THI ĐẤU
        </Link>
        <Link to="/tin-tuc" className="list-group-item list-group-item-action">
          TIN TỨC
        </Link>
        <Link
          to="/gioi-thieu"
          className="list-group-item list-group-item-action"
        >
          Giới thiệu
        </Link>
        <Link to="/lien-he" className="list-group-item list-group-item-action">
          LIÊN HỆ
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
