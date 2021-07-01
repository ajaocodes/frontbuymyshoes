import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Import Milligram for Some Default Styling
import "milligram";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);