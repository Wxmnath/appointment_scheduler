import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

reportWebVitals();
