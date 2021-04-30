import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Videoform from "../Videos/Videoform";
import VideoList from "../Videos/VideoList";
import DropdownList from "./DropdownList";


const Barra = () => {



  return (
    <div className="container p-4 ">
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item btn btn-sm btn-outline-success">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item btn btn-sm btn-outline-success">
                    <Link className="nav-link " to="/new-video">
                      Create Video
                    </Link>
                  </li>
                  <li className="nav-item btn btn-sm">
                    <DropdownList />
                  </li>
                </ul>
              </div>
            </div>
          </nav>

         {/*  <Switch>
            <Route exact path="/" component={VideoList} />
            <Route path="/new-video" component={Videoform} />
          </Switch> */}
        </div>
      </BrowserRouter>
    
    </div>
  );
};

export default Barra;
