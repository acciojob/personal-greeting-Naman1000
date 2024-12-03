import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

export const Greeting = ({ name }) => {
  return (
    <div>
      <h2>Hello {name}</h2>
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));
