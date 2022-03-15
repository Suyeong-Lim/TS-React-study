import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter, useRoutes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
