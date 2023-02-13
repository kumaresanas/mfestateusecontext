import React , {useState}from "react";
import ReactDOM from "react-dom";


import { CountProvider,useCount } from "host/store";

import "./index.css";
import Header from "nav/Header";
const App = () => {
  const[count,setCount] = useCount();

  return  (
    <div className="container">
    <Header />
    <div>Name: host</div>
    <div>Count:{count} </div>
    <div><button onClick={()=>setCount(count+1)}>Add to Cart</button></div>
    <div>CSS: Empty CSS</div>
  </div>

  )
  
  };
ReactDOM.render(<CountProvider><App /></CountProvider>, document.getElementById("app"));
