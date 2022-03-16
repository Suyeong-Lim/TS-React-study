import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter, useRoutes } from "react-router-dom";
import "./sass/index.scss";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
