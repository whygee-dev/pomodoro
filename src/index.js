import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { TimersProvider } from "./contexts/timers";

ReactDOM.render(
  <React.StrictMode>
    <TimersProvider>
      <App />
    </TimersProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
