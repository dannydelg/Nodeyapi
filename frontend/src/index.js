import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import VideoList from "./components/Videos/VideoList";
import Videoform from "./components/Videos/Videoform";

import "bootswatch/dist/darkly/bootstrap.min.css";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Barra from "./components/Navbar/Barra";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import DropdownList from "./components/Navbar/DropdownList";


ReactDOM.render(
  <React.StrictMode>
   
    <Barra></Barra>
   


    <div className="container ">
      <ToastContainer />
    </div>

{/*     <Router>
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={VideoList} />
          <Route path="/new-video" component={Videoform} />
        </Switch>
        <ToastContainer />
      </div> 
    </Router>*/}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//https://www.youtube.com/watch?v=wOLo-B7mrZM&ab_channel=Fazt
