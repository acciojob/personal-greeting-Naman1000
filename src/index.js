import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const Greeting = ({ name }) => {
  return (
    <div>
      <h2>Hello {name}</h2>
    </div>
  );
};

export default Greeting;




ReactDOM.render(<App />, document.getElementById("root"));
