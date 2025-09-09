import React from "react";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top" id="navbar">
        <div className="container" id="bg">
          <a href="#">
            <img src="" width="100px" className="img-fluid" alt="Logo" />
          </a>

          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            style={{ color: "white", zIndex: 100 }}
          >
            <i className="fa-solid fa-bars menu text-white"></i>
          </button>

          <div className="sidebar offcanvas offcanvas-start bg-dark text-white" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header text-dark border-bottom">
              <a href="#">
                <img src={logo} width="100px" className="img-fluid" alt="Logo" />
              </a>
              <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body d-flex flex-lg-row flex-column p-4">
              <ul id="ul" className="navbar-nav justify-content-center align-items-center fs-6 flex-grow-1 pe-3">
                <li className="nav-item mx-2">
                  <Link to="/" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item mx-2">
                 <Link to="/About" className="nav-link active">About</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/Services" className="nav-link active">Services</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/Portfolio" className="nav-link active">Portfolio</Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/Contact" className="nav-link active">Contact</Link>
                </li>
              </ul>

              <div className="d-flex justify-content-center align-items-center" id="icon">
                <span id="ins">
                  <a href="https://www.instagram.com/web_work_389/profilecard/?igsh=MXhzZ2U3N3lhcHAzNw%3D%3D" target="_blank" rel="noreferrer">
                    <i className="bi bi-instagram px-3 py-2 rounded-4"></i>
                  </a>
                </span>
                <span id="fb">
                  <i className="bi bi-facebook px-3 py-2 rounded-4"></i>
                </span>
                <span id="tw">
                  <i className="bi bi-twitter-x px-3 py-2 rounded-4"></i>
                </span>
                <span id="dr">
                  <a href="https://github.com/syedkaif12" target="_blank" rel="noreferrer">
                    <i className="bi bi-github px-3 py-2 rounded-4"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
