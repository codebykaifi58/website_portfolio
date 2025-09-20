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
                        <h2 id="about">About</h2>
                        <h1>Syed Kaif Shah</h1> <br />
                        <h2 id="course"><b>Certified </b>Web Developer</h2>
                        <p>
                            I’m passionate about turning creative ideas into functional and visually 
                            appealing websites. I specialize in developing unique, user-friendly websites
                             that are responsive and meet your specific needs.
                        </p>
                        <button>Resume</button>
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
                        <div id="exp-head">
                            <img src={magic} alt="" />
                           <p> My Experience</p>
                        </div>
                        <h1>My <span>Work</span> Experience</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-5">
                        <div id="exp-details-back">
                            <div id="exp1">
                                <p>2025</p>
                                <h4>Senior Designer</h4>
                                <p>Behance</p>
                            </div>
                             <div id="exp2">
                                <p>2024</p>
                                <h4>UX Design case study</h4>
                                <p>Behance</p>
                            </div>
                             <div id="exp3">
                                <p>2023</p>
                                <h4> Product Designer v/s Product Manage</h4>
                                <p>Behance</p>
                            </div>
                             <div id="exp4">
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
