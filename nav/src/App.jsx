import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import "./index.css";
import { CountProvider } from "host/store";

const App = () => (
  <CountProvider>
  <div className="container">
    <Header />
    <div>Name: nav</div>
  
  </div>
  </CountProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
