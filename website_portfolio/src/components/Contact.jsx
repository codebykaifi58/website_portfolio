import React from "react";
import ContactForm from "./ContactForm";
import Testimonials from "./Testonomial";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="container-fluid"id="hero-contact">
      {/* ======= Top Header Section ======= */}
      <div className="text-center py-5 bg-gradient">
        <h1 className="fw-bold" style={{color:'#28E98C'}}>Contact Me</h1>
        <p className="text-secondary">
          <span className="linka">Home</span> &gt; Contact Me
        </p>
      </div>

      {/* ======= Main Content Section ======= */}
      <div className="container py-5" id="hero-content">
        <div className="row align-items-center">
          {/* ===== Left Side - Contact Info ===== */}
          <div className="col-md-6 mb-4">
            {/* Small heading */}
            <div className="d-flex align-items-center mb-3">
              <FaPhoneAlt className=" me-2 fs-5" style={{color:'#28E98C'}}/>
              <span className="fw-semibold"style={{color:'#28E98C'}}>Contact Me</span>
            </div>

            {/* Main heading */}
            <h2 className="fw-bold mb-3">
              Have A Project In Mind? <br /> Let’s Talk!
            </h2>
            <p className="" style={{ color: 'rgb(201, 194, 194)',fontSize: '17px',letterSpacing: '1px'}}>
              Are you looking to create a seamless and engaging user experience?
              Here to help! Call Now.
            </p>

            {/* Contact Details */}
            <div className="mt-4" style={{color:'#28E98C'}}>
              {/* Phone */}
              <div className="d-flex align-items-center mb-4" >
                <div className="bg-opacity-10 p-3 rounded-circle me-3" style={{background:'#28E98C',color:'white'}} >
                  <FaPhoneAlt className=" fs-5" />
                </div>
                <div>
                  <h6 className="mb-0">Call Now</h6>
                  <p className="mb-0"  style={{ color: 'rgb(201, 194, 194)',fontSize: '17px',letterSpacing: '1px'}}>+888 (555) 546-33</p>
                </div>
              </div>

              {/* Email */}
              <div className="d-flex align-items-center mb-4">
                <div className=" bg-opacity-10 p-3 rounded-circle me-3"  style={{background:'#28E98C',color:'white'}}>
                  <FaEnvelope className=" fs-5" />
                </div>
                <div>
                  <h6 className="mb-0">Email</h6>
                  <p className="mb-0"  style={{ color: 'rgb(201, 194, 194)',fontSize: '17px',letterSpacing: '1px'}}>xiomi@gmail.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="d-flex align-items-center">
                <div className="bg-opacity-10 p-3 rounded-circle me-3"  style={{background:'#28E98C',color:'white'}}>
                  <FaMapMarkerAlt className=" fs-5" />
                </div>
                <div>
                  <h6 className="mb-0">Address</h6>
                  <p className="mb-0"  style={{ color: 'rgb(201, 194, 194)',fontSize: '17px',letterSpacing: '1px'}}>
                    66 Broklyant Road, 120, Canada
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Right Side - Google Map ===== */}
          <div className="col-md-6">
            <div className="shadow rounded overflow-hidden">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.999282447774!2d-0.1208504!3d51.5033242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900000001%3A0x6c9f6f5c5f2c4c0d!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1695456123456!5m2!1sen!2suk"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <ContactForm/>
      <Testimonials/>
    </div>
  );
}

export default Contact;
