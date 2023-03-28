import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { contractProvider } from "./context/ContractContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <contractProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </contractProvider>
);
