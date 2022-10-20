import "./App.css";
import "../src/css/Main.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App container-custom">
        <Home />
      </div>
    </Router>
  );
}

export default App;
