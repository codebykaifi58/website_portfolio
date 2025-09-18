import React from "react";
import magic from '../assets/star-2.png';
import me from '../assets/mypic5.png';
import port1 from '../assets/port1.png';
import port2 from '../assets/port2.png';
import port3 from '../assets/port2.png';
import port4 from '../assets/port4.png';
import port5 from '../assets/port5.png';
import port6 from '../assets/port6.png';
import port7 from '../assets/port7.png';
import port8 from '../assets/port8.png';
import port9 from '../assets/port9.png';
import bootstrap from '../assets/bootstrap-stack.png';
import visual from '../assets/visual.svg';
import html from '../assets/html.svg';
import js from '../assets/js.svg';
import react from "../assets/react1.svg";
import jquery from "../assets/jquery.svg";
import php from "../assets/php.webp";
import sql from "../assets/sql.webp";
import laravel from "../assets/laravel.png";
import FAQCarousel from "./FaqCrousel";
import BlogList from "./BlogList";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
useEffect(() => {
  AOS.init({
    duration: 1000,   // Animation ka speed (ms)
    once: false,      // Animation har scroll par chale
    mirror: true,     // Reverse animation jab scroll back kare
    offset: 100,      // Scroll trigger point
  });
}, []);


  return (
    <>
    <div className="container-fluid" id="home-hero-container">
      <div id="home-fluid1">
        <div className="row">
          <div className="col mt-5">
            <div data-aos="fade-right" style={{ display: "flex", alignItems: "center", gap: "10px" }} id="my-name">
              <img src={magic} alt="Magic Star" />
              <span style={{ color: 'white' }}>Hi, I'm Syed Kaif Shah.</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col mt-5" id="hero-heading-col">
            <div id="home-hero-heading" data-aos="fade-down">
              <h1>
                Code the Future with
                Innovative Development
              </h1>
            </div>
          </div>
        </div>

        <div className="row" id="home-hero-expandable">
          <div className="col mt-5" id="expand-hero-content">
            <div id="home-hero-expand1" data-aos="zoom-in">
              <div id="expand1-info-text">
                <p>
                  Unlock the power of innovation with cutting-edge development solutions.
                  From web and mobile apps to AI and blockchain, we build scalable,
                  future-ready technology tailored.
                </p>
              </div>
              <div id="expand1-btns">
                <button>Let's Talk</button>
                <span><i className="bi bi-facebook"></i></span>
                <span><i className="bi bi-instagram"></i></span>
                <span><i className="bi bi-twitter-x"></i></span>
                <span><i className="bi bi-linkedin"></i></span>
              </div>
              <div id="expand1-ability">
                <div id="img-text-ability">
                    <img src={magic} alt="Magic Star" />
                    <span>My Tech Stacks</span>
                </div>
                <p>
                    Expert in modern tech stacks: <br />React, Node.js, Python, and <br /> more.
                </p>
              </div>
            </div>
          </div>

          <div className="col" id="img-col">
            <div id="expand2-img" data-aos="zoom-out">
              <img src={me} alt="Profile" />
            </div>
          </div>

        </div>
      </div>
    </div>
    <div className="container-fluid" id="home-hero2-section">
        <div className="container" id="home-hero2">
            <div id="home-second-hero-pic" data-aos="zoom-in" className="mt-5 mb-5">
                <img src={me} alt="" />
            </div>
            <div id="home-second-hero-text" className="mt-5 mb-5">
               <div>
                    <h1 data-aos="fade-left">I'am a <i> Webdeveloper & Creative Designer</i> & developer based in Pakistan.</h1>
                    <p data-aos="fade-right">
                      "I’m proficient in WordPress and frontend web development with HTML5, CSS3,
                      and JavaScript. I specialize in creating custom themes, integrating third-party
                        plugins, and ensuring websites are fully responsive and optimized."
                    </p>
                    <button data-aos="fade-up">Explore more</button>
               </div>
            </div>
        </div>
    </div>
    <div className="container-fluid" id="home-hero3-section">
      <div className="container" id="home-hero3">
          <div id="hero3-left-section" className="mt-5">
             <div id="hero3-control">
                 <div id="magic-me" data-aos="fade-right" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <img src={magic} alt="" />
                      <span style={{color:'#28E98C'}}>About Me</span>
                  </div>
                  <h1 data-aos="fade-down">
                    My Story and Expertise
                  </h1>
                  <p id="my-text" data-aos="fade-left">
                    With a passion for technology and years of experience, I specialize in web, mobile, 
                    AI, and blockchain development. My expertise lies in creating innovative, scalable,
                    and efficient solutions that help businesses.
                  </p>
                  <div id="increment">
                      <h1>10+ <br /> <p>Year of Experience</p></h1>
                      <h1 id="one">4529 + <br /> <p>Project Completed</p></h1>
                      <h1 id="two">600 + <br /> <p>Happy Customer</p></h1>
                  </div>
                  <div id="about-btn">
                    <button data-aos="fade-down">About Me</button> 
                    <button data-aos="fade-down">Contact Me</button>
                  </div>
             </div>
          </div>
          <div id="hero3-right-section" data-aos="zoom-out" className="mt-5 mb-5">
            <img src={me} alt="" />
          </div>
      </div>
    </div>

<div class="container-fluid" id="container5">
    <div class="container d-flex flex-column justify-content-evenly align-items-center grid gap-3" id="cont5">
        <div class="row py-4" id='row1-of-cont5'>
            <span data-aos="fade-up" data-aos-anchor-placement="top-bottom">AWESOME <i>PROJECTS</i></span>
        </div>
        <div class="row" id="row2-of-cont5">
            <h6   data-aos="fade-down" data-aos-anchor-placement="top-bottom" >Select Work*(2023-2024)</h6>
        </div>
        
       <div class="row d-flex align-items-center justify-content-center" id="r1-p">
            <div class="col p-2 g-col-6" id="dis">
                <div class="project1"  data-aos="fade-up" data-aos-duration="4000">
                <img src={port1} alt="Image"/>
                <div class="overlay"></div>
                <div class="icon"><i class="bi bi-mouse"></i></div>
                </div>
            </div>
            <div class="col p-2 g-col-6" id="dis">
                <div class="project1"  data-aos="zoom-in-down">
                <img src={port2} alt="Image"/>
                <div class="overlay"></div>
                <div class="icon"><i class="bi bi-mouse"></i></div>
                </div>
            </div>
            <div class="col p-2 g-col-6" id="dis">
                <div class="project1"  data-aos="zoom-in-up">
                <img src={port3} alt="Image"/>
                <div class="overlay"></div>
                <div class="icon"><i class="bi bi-mouse"></i></div>
                </div>
            </div>
       
            <div class="col p-2 g-col-6" id="dis">
                <div class="project1"  data-aos="zoom-in">
                <img src={port4} alt="Image"/>
                <div class="overlay"></div>
                <div class="icon"><i class="bi bi-mouse"></i></div>
                </div>
            </div>
            <div class="col p-2 g-col-6" id="dis">
                <div class="project1"  data-aos="fade-up">
                <img src={port5} alt="Image"/>
                <div class="overlay"></div>
                <div class="icon"><i class="bi bi-mouse"></i></div>
                </div>
            </div>
            <div class="col p-2 g-col-6" id="dis">
                <div class="project1"  data-aos="fade-down">
                <img src={port6} alt="Image"/>
                <div class="overlay"></div>
                <div class="icon"><i class="bi bi-mouse"></i></div>
                </div>
            </div>
            <div class="col p-2 g-col-6" id="dis">
                <div class="project1"  data-aos="fade-up">
                <img src={port7} alt="Image"/>
                <div class="overlay"></div>
                <div class="icon"><i class="bi bi-mouse"></i></div>
                </div>
            </div>
            <div class="col p-2 g-col-6" id="dis">
                <div class="project1"  data-aos="fade-down">
                <img src={port8} alt="Image"/>
                <div class="overlay"></div>
                <div class="icon"><i class="bi bi-mouse"></i></div>
                </div>
            </div>
            <div class="col p-2 g-col-6" id="dis">
                <div class="project1" data-aos="flip-right">
                <img src={port9} alt="Image"/>
                <div class="overlay"></div>
                <div class="icon"><i class="bi bi-mouse"></i></div>
                </div>
            </div>
       </div>
        <div class="row py-5" id="cir">
            
          <button data-aos="fade-down">Explore More</button>
           
       </div>
            
       </div>   
      
    </div>


    <div className="container-fluid" id="home-hero-experience">
      <div className="container" id="hero-experience">
          <div className="row">
              <div className="col mt-5 mb-4">
                  <div  data-aos="fade-right" id="magic-me"style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <img src={magic} alt="" />
                      <span style={{color:'#28E98C'}}>Experience</span>
                  </div>
              </div>
          </div>
          <div className="row">
            <div className="col mb-2 mt-2" id="skill-heading">
                <h1 data-aos="fade-up"> Skills & Tools</h1>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex flex-wrap justify-content-center gap-3" id="skill-col">
                <div id="bootstrap" data-aos="fade-right">
                    <img src={bootstrap} alt="bootstrap" width={'40px'} />
                    <span>
                      Bootstrap CSS & CSS3
                    </span>
                </div>
                <div id="visual" data-aos="fade-right">
                    <img src={visual} alt="Visual"  />
                    <span>
                      Visual Basic
                    </span>
                </div>
                <div id="html" data-aos="fade-right">
                    <img src={html} alt="HTML & CSS"  />
                    <span>
                      HTML & CSS
                    </span>
                </div>
                <div id="js" data-aos="fade-right">
                    <img src={js} alt="JavaScript"  />
                    <span>
                      JavaScript
                    </span>
                </div>
                <div id="react" data-aos="fade-right">
                    <img src={react} alt="React"  />
                    <span>
                      React
                    </span>
                </div>
                
            </div>
          </div>
          <div className="row">
            <div className="col mb-4 d-flex flex-wrap justify-content-center gap-3">
              <div id="jquery" data-aos="fade-right">
                    <img src={jquery} alt="JQuery" width={'20px'} />
                    <span>
                      JQuery
                    </span>
                </div>
                <div id="php" data-aos="fade-right">
                    <img src={php} alt="php" width={'20px'} />
                    <span>
                      PHP
                    </span>
                </div>
                <div id="sql" data-aos="fade-right">
                    <img src={sql} alt="MySql" width={'20px'} />
                    <span>
                      MySQL
                    </span>
                </div>
                <div id="laravel" data-aos="fade-right">
                    <img src={laravel} alt="laravel" width={'20px'} />
                    <span>
                      laravel
                    </span>
                </div>
            </div>
          </div>
          <div className="row">
            <div className="col mb-5" id="skill-text">
              <p>You've got a Challenge? <span>Let's talk!</span></p>
            </div>
          </div>
      </div>
    </div>
<BlogList/>
<FAQCarousel />
    </>
  );
}


export default Home;
