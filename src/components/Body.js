import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { publicRoutes } from "../routes";

import Sidebar from "./Sidebar";
import Content from "./Content";

function Body() {
  return (
    <div className="Body row">
      <Sidebar />

      <Routes>
        {publicRoutes.map((route, i) => {
          const Page = route.components;
          return (
            <Route
              key={i}
              path={route.path}
              element={
                <Content>
                  <Page />
                </Content>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default Body;
