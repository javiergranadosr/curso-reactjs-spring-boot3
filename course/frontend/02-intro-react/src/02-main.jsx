import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//const div = React.createElement('div', null, React.createElement("ul", null, React.createElement("li", null, "Item 1")));
const div = (
  <div>
    <ul>
      <li>Hola mundo</li>
    </ul>
  </div>
);
ReactDOM.createRoot(document.getElementById("root")).render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>*/
  div
);
