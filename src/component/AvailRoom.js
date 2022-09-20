import React from 'react'
import './Avail.css'
 import { NavLink } from 'react-router-dom'

const AvailRoom = () => {
  return (
    <section style={{ backgroundColor: "#eee" }}>
    <div className="container py-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-4">
          {/* Buttons trigger collapse */}
          <a
            className="btn btn-secondary btn-lg btn-block"
            data-mdb-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <div className="d-flex justify-content-between align-items-center">
              <span>Available Rooms</span>
              <i className="fas fa-chevron-down" />
            </div>
          </a>
          {/* Collapsed content */}
          <div className="collapse mt-3" id="collapseExample">
            <div className="card" id="chat4">
              <div
                className="card-body test"
                data-mdb-perfect-scrollbar="true"
                style={{ position: "relative", height: 400 }}
              >
               
                
              </div>
              <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                
              <NavLink
            className="btn btn-outline-dark btn m-2"
            to="AvailRoom"
            role="button"
            
          >
            Create New Room
          </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default AvailRoom