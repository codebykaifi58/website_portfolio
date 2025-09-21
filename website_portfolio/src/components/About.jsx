import React from "react";
import magic from '../assets/star-2.png';
import me from '../assets/mypic5.png';
import figmaIcon from "../assets/1.svg";
import photoshopIcon from "../assets/2.svg";
import illustratorIcon from "../assets/3.svg";
import canvaIcon from "../assets/4.svg";
import Awards from "./Awards";
function About() {
  const skills = [
    { name: "Figma", icon: figmaIcon },
    { name: "Photoshop", icon: photoshopIcon },
    { name: "Illustrator", icon: illustratorIcon },
    { name: "Canva", icon: canvaIcon },
  ];

  return (
    <>
        <div className="container-fluid" id="about-hero">
            <div className="container">
                <div className="row">
                    <div className="col mt-5 py-5" id="myname">
                        <h2 id="about" data-aos="fade-right">About</h2>
                        <h1 data-aos="fade-up">Syed Kaif Shah</h1> <br />
                        <h2 data-aos="fade-left" id="course"><b>Certified </b>Web Developer</h2>
                        <p>
                            I’m passionate about turning creative ideas into functional and visually 
                            appealing websites. I specialize in developing unique, user-friendly websites
                             that are responsive and meet your specific needs.
                        </p>
                        {/* <!-- From Uiverse.io by vinodjangid07 -->  */}
<button class="Documents-btn">
  <span class="folderContainer">
    <svg
      class="fileBack"
      width="146"
      height="113"
      viewBox="0 0 146 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z"
        fill="url(#paint0_linear_117_4)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_117_4"
          x1="0"
          y1="0"
          x2="72.93"
          y2="95.4804"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#616462ff"></stop>
          <stop offset="1" stop-color="#43dc92ff"></stop>
        </linearGradient>
      </defs>
    </svg>
    <svg
      class="filePage"
      width="88"
      height="99"
      viewBox="0 0 88 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="88" height="99" fill="url(#paint0_linear_117_6)"></rect>
      <defs>
        <linearGradient
          id="paint0_linear_117_6"
          x1="0"
          y1="0"
          x2="81"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white"></stop>
          <stop offset="1" stop-color="#9bb7a9ff"></stop>
        </linearGradient>
      </defs>
    </svg>

    <svg
      class="fileFront"
      width="160"
      height="79"
      viewBox="0 0 160 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z"
        fill="url(#paint0_linear_117_5)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_117_5"
          x1="38.7619"
          y1="8.71323"
          x2="66.9106"
          y2="82.8317"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C3BBFF"></stop>
          <stop offset="1" stop-color="#38b77aff"></stop>
        </linearGradient>
      </defs>
    </svg>
  </span>
  <p class="text">Resume</p>
</button>

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
        <div className="container-fluid" id="about-hero-cont2">
            <div className="container">
                <div className="row">
                    <div className="col mt-5" id="col-cont2-about">
                        <div id="exp-head" data-aos="fade-right">
                            <img src={magic} alt="" />
                           <p> My Experience</p>
                        </div>
                        <h1 data-aos="fade-left">My <span>Work</span> Experience</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-5">
                        <div id="exp-details-back">
                            <div id="exp1" data-aos="fade-up">
                                <p>2025</p>
                                <h4>Senior Designer</h4>
                                <p>Behance</p>
                            </div>
                             <div id="exp2" data-aos="fade-down">
                                <p>2024</p>
                                <h4>UX Design case study</h4>
                                <p>Behance</p>
                            </div>
                             <div id="exp3" data-aos="fade-up">
                                <p>2023</p>
                                <h4> Product Designer v/s Product Manage</h4>
                                <p>Behance</p>
                            </div>
                             <div id="exp4" data-aos="fade-down">
                                <p>2022</p>
                                <h4>Xiomi in Product Design (UI/UX)</h4>

                                <p>Behance</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-5 mb-5">
                        <div
                        className="w-full flex flex-col sm:flex-row justify-center items-center flex-wrap p-10 rounded-xl"
                        style={{ backgroundColor: "#1C1D20" }}
                        >
                        {skills.map((skill, index) => (
                            <div
                            data-aos="fade-down"
                            key={index}
                            className="flex flex-col py-2 items-center justify-center w-28 h-28 
                                        bg-[#2A2B2F] rounded-lg shadow-lg 
                                        hover:shadow-2xl hover:scale-105 
                                        transition-all duration-300 cursor-pointer 
                                        mx-4 my-3"
                            >
                            <img src={skill.icon} alt={skill.name} className="w-8 h-8 mb-2" />
                            <span className="text-white text-sm font-medium">{skill.name}</span>
                            </div>
                        ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
       <Awards />

    </>

  );
}


export default About;
