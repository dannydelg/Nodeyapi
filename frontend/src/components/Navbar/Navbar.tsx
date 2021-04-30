import React from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom';

const Navbar = () => {
    return (
                  
                  


        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container">
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto" >
              <li className="nav-item btn btn-sm btn-outline-secondary">
                <Link className="nav-link" to="/">Home</Link>               
              </li>
              <li className="nav-item">
                <Link className="nav-link "  to="/new-video">Create Video</Link>
              </li>


            
           
        
            </ul>
          </div>
        </div>
      </nav>

         
    

      
    )
}

export default Navbar



//https://www.youtube.com/watch?v=wOLo-B7mrZM&ab_channel=Fazt