import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import port from '../assets/port.png';
import port1 from '../assets/port1.png';
import port2 from '../assets/port2.png';
import port4 from '../assets/port4.png';
import port5 from '../assets/port5.png';
import port6 from '../assets/port6.png';
import port7 from '../assets/port7.png';
import port8 from '../assets/port8.png';
import port9 from '../assets/port9.png';

function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="container-fluid" id="hero-port">
        <div className="container">
          <div className="row">
            <div className="col mt-5 mb-5" id="port-main-data">
              <h5>Portfolio</h5>
              <h1>Welcome to my Works & Creations</h1>
              <p>
                A showcase of custom-designed websites and creative digital
                solutions I’ve built for clients across the globe.
              </p>
            </div>
            <div className="col mt-5 mb-5" id="port-main-pic">
              <img src={port} alt="portfolio main" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" id="port-cont2">
        <div className="container">
          <div className="row py-4" id="port-cont2-r1">
            <span data-aos="fade-up">(2023-2025)</span>
          </div>

          <div className="row" id="port-cont2-r2">
            <span data-aos="fade-up">
              Have a look at some of the projects I’ve worked on.
              <br />
              Clients vary from lifestyle to tech and design companies.
            </span>
          </div>

          <div className="row py-5" id="port-cont2-r3">
            <span data-aos="zoom-in">HTML5 & CSS3</span>
          </div>

          <div className="row d-flex align-items-center justify-content-center py-2" id="r1-p">
            {[port1, port2, port2, port4, port5, port6].map((img, index) => (
              <div className="col p-2 g-col-6" key={index}>
                <div className="project1" data-aos="fade-up">
                  <img src={img} alt={`project ${index}`} />
                  <div className="overlay"></div>
                  <div className="icon">
                    <i className="bi bi-mouse"></i>
                  </div>
                </div>
              </div>
            ))}

            <div className="row py-5" id="rr1">
              <span data-aos="zoom-out">E-Commerce Project</span>
            </div>

            {[port7, port8, port9].map((img, index) => (
              <div className="col p-2 g-col-6" key={`ecommerce-${index}`}>
                <div className="project1" data-aos="zoom-in-up">
                  <img src={img} alt={`ecommerce project ${index}`} />
                  <div className="overlay"></div>
                  <div className="icon">
                    <i className="bi bi-mouse"></i>
                  </div>
                </div>
              </div>
            ))}

            <div className="row py-4" id="rr2">
              <span>HTML | CSS | JS - Interesting Projects</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
