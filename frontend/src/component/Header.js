import React from 'react'
import { NavLink } from 'react-router-dom'



const Header = () => {
  return (
    


    <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* Container wrapper */}
    <div className="container">
      
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarButtonsExample">
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <button type="button" className="btn btn-dark px-3 me-2">
            Live User Count
          </button>
          </li>
        </ul>
        {/* Left links */}
        <div className="d-flex align-items-center">
        <NavLink
            className="btn btn-outline-dark btn m-2"
            to="AvailRoom"
            role="button"
            
          >
            Join Room
          </NavLink>
          
        </div>
      </div>
      {/* Collapsible wrapper */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

      
  //   <header>
  //      <nav className="navbar navbar-dark bg-dark">{/* Navbar content */}</nav>
  //   <nav className="navbar navbar-expand-lg navbar-light bg-white">
  //   <div className="container-fluid">
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-mdb-toggle="collapse"
  //       data-mdb-target="#navbarExample01"
  //       aria-controls="navbarExample01"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <i className="fas fa-bars" />
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarExample01">

  //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //         <li className="nav-item active">
  //           <NavLink className="nav-link" aria-current="page" to="/">
  //             ChatRoom
  //           </NavLink>
  //         </li>
  //         <li className="nav-item">
  //           <NavLink className="nav-link" to="/">
  //             Features
  //           </NavLink>
  //         </li>
  //         <li className="nav-item">
  //           <NavLink className="nav-link" to="/">
  //             Pricing
  //           </NavLink>
  //         </li>
  //         <li className="nav-item">
  //           <NavLink className="nav-link" to="./About">
  //             About
  //           </NavLink>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
  // </header>
  
  )
}

export default Header