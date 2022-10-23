import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "../css/News.css";

function News() {
  return (
    <>
      <div className="News">
        <figure class="snip1360">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample88.jpg"
            alt="sample88"
          />
          <figcaption>
            <h2>Man loses the lotto for the second time</h2>

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
