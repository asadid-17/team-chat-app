import React from "react";
import { NavLink } from 'react-router-dom'
import mouse from '../assets/about.png'





const Home = () => {
  return (
    <div>
   
    
  {/* Intro settings */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    /* Default height for small devices */\n    #intro-example {\n      height: 400px;\n    }\n\n    /* Height for devices larger than 992px */\n    @media (min-width: 992px) {\n      #intro-example {\n        height: 600px;\n      }\n    }\n  "
    }}
  />
  {/* Navbar */}
  
  {/* Navbar */}
  {/* Background image */}
  <div
    id="intro-example"
    className="p-5 text-center bg-image"
    style={{
      backgroundImage: `url(${mouse})`
    }}
  >
    <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white">
          <h1 className="mb-3">Create Room & Chat With Friends</h1>
          <h5 className="mb-4">
            Just one click away 
          </h5>
          <NavLink
            className="btn btn-outline-light btn-lg m-2"
            to="Login"
            role="button"
            
          >
            Login 
          </NavLink>
          <NavLink
            className="btn btn-outline-light btn-lg m-2"
            to="/Register"
            
            role="button"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  </div>
  {/* Background image */}


  </div>
  );
};

export default Home;
