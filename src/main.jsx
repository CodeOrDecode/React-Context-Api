import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Authcontextprovider } from "./context/Authcontextprovider.jsx";
import { Themecontextprovider } from "./context/Themecontextprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Themecontextprovider>
    <Authcontextprovider>
      <App />
    </Authcontextprovider>
  </Themecontextprovider>
);
