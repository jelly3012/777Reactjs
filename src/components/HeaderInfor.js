import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "../css/HeaderInfor.css";

const avatar = require("../images/avt copy.png");

function HeaderInfor() {
  return (
    <div className="HeaderInfor row">
      <div className="HeaderInfor-img">
        <Link to="/">
          <img src={avatar} alt="avatar" />
        </Link>
      </div>
      <div className="HeaderInfor-name">
        <span>777 POKER</span>
        <span>CLUB</span>
      </div>
      <div className="HeaderInfor-contact col">
        <div className="HeaderInfor-contact-fb">
          <a
            href="https://www.facebook.com/777clubecopark/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-facebook-f"></i> Follow on Facebook
          </a>
        </div>

        <div className="HeaderInfor-contact-email">
          <a href="" target="_blank">
            <i className="fa-solid fa-envelope"></i> Send us an email
          </a>
        </div>

        <div className="HeaderInfor-contact-hotline">
          <a href="tel:+84869509777">
            <i className="fa-solid fa-phone"></i> 0869509777
          </a>
        </div>
        <div className="HeaderInfor-contact-address">
          <i className="fa-solid fa-location-dot"></i> 18A MARINA ARC, ECOPARK,
          HƯNG YÊN
        </div>
      </div>
    </div>
  );
}

export default HeaderInfor;
