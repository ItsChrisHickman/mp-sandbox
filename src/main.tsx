import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Disable CTRL+S -- which I habitually hit while coding.
// Add the event listener
document.addEventListener(
  "keydown",
  (event) => {
    if (
      event.keyCode == 83 &&
      (navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey)
    ) {
      event.preventDefault();
    }
  },
  false
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
