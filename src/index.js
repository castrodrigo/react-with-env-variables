import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => <h1>{process.env.API_URL}</h1>;

ReactDOM.render(<App />, document.getElementById("app"));
