import React from "react";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";

function Theme() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Theme;

/* File src/index.js

import ReactDOM from "react-dom";
import Theme from "./components/Theme/index.jsx";

ReactDOM.render(
  <Theme />, 
  document.getElementById("root")
);

*/
