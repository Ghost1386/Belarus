import React from "react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";

export const DEFAULT_URL = "http://localhost:7001/api/";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
