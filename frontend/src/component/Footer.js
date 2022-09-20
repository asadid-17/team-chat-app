import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div className="container">
      
    <div className='page-container'>
    <div className='content-wrap'>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-white text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div >
            {/* <NavLink to="" className="me-4 link-secondary">
              <i className="fab fa-facebook-f" />
            </NavLink> */}
             {/* <NavLink to="" className="me-4 link-secondary">
              <i className="fab fa-twitter" />
            </NavLink> */}
            <a href="mailto:asadhamee00786@gmail.com?body=My custom mail body" className="me-4 secondary">
              <i className="fab fa-google" />
             </a>  
            <a href="https://www.instagram.com/asadid.17" className="me-4 secondary">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://in.linkedin.com/in/mohammad-asad-a7405324b" target="" className="me-4 link-secondary">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://github.com/asadid-17" className="me-4 link-secondary">
              <i className="fab fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary" />
                  AH Tech Solutions
                </h6>
                <p>
                  We provide tech solutions 
                </p>
              </div>
              
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary" /> Gauriganj, 227409, INDIA
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary" />
                  asadengineer.cs.12@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary" /> +91 7607467558
                </p>
                <p>
                  <i className="fas fa-mobile me-3 text-secondary" /> 2022
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
       
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
        >
          © 2022 Copyright:
          <a className="text-reset text-color-white fw-bold  " href="https://in.linkedin.com/in/mohammad-asad-a7405324b">
            Asad Hameed
          </a>
        </div>
        
      </footer>
      
      </div>
      </div>
      </div>
      
  );
};
export default Footer;
