import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "../css/News.css";
const logo = require("../images/ico.png");

function News() {
  return (
    <>
      <div className="News">
        <figure class="snip1360">
          <img src={logo} alt="sample88" />
          <figcaption>
            <h2>Coming soon</h2>

            <Link to="" class="read-more">
              Read More
            </Link>
          </figcaption>
        </figure>
      </div>
    </>
  );
}

export default News;
