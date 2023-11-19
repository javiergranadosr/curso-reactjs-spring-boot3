import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorldApp } from "./HelloWorldApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorldApp
      id={1}
      title="Hola mundo"
      user={{ id: 1, name: "Javier Granados Rojas", age: 29 }}
    />
  </React.StrictMode>
);
