import React from "react";
import service from '../assets/service-pic.png';
import services1 from '../assets/services1.jpg';
import services2 from '../assets/services2.jpg';
import services3 from '../assets/services3.jpg';
import web1 from '../assets/web1.png';
import web2 from '../assets/web2.png';
import web3 from '../assets/web3.png';
import web5 from '../assets/web5.png';
import web4 from '../assets/web4.png';
import web6 from '../assets/web6.png';
import web7 from '../assets/web7.png';
import web8 from '../assets/web8.png';
function Services(){
    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });

            // highlight effect
            el.classList.add("highlight");
            setTimeout(() => {
                el.classList.remove("highlight");
            }, 1500);
        }
    };
    return(
        <>
            <div className="container-fluid" id="hero-services">
                <div className="container">
                    <div className="row">
                        <div className="col mt-5 mb-5" id="hero-main-services">
                            <h4 data-aos="fade-right">Services</h4>
                            <h1 data-aos="fade-left">
                                Let’s Build Something Powerful Together
                            </h1>
                            <p data-aos="fade-up">
                                Are you in need of a professional WordPress developer to bring your web projects
                                 to life? Look no further! With my expertise in WordPress, I offer a range of
                                  services to create, customize, and enhance websites that perfectly match 
                                  your vision and business goals.
                            </p>
                        </div>
                        <div className="col mt-5 mb-5" id="ser-pic">
                            <img src={service} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="cotainer-fluid" id="hero-serives-second">
                <div className="container">
                    <div className="row">
                        <div className="col mt-5 mb-5">
                            <div id="services-two-back">
                                <div id="service-left-side">
                                    <div id="ser-img" >
                                        <img src={services1} alt="" />
                                    </div>
                                    <div id="web-ser-back" className="mt-4">
                                        <h1 data-aos="fade-right">Web Design</h1>
                                        <p data-aos="fade-down">
                                            In today’s digital landscape, your website is often the first impression of your brand.
                                             That’s why we focus on creating custom, responsive, and user-friendly websites 
                                             that not only look great but also provide an outstanding user experience.
                                        </p>

                                        <p data-aos="fade-up">
                                            Whether you're a startup or an established business, our team designs websites that
                                             meet your specific needs, attract visitors, and convert them into loyal customers.
                                        </p>
                                    </div>
                                    <div id="web-process-back">
                                        <h2 data-aos="fade-left">Our Web Design Process:</h2>
                                        <p data-aos="fade-up">
                                            We begin with discovery and research, create wireframes and prototypes, 
                                            design custom solutions, ensure responsiveness, optimize for SEO,
                                             and provide testing, launch, and ongoing support.
                                        </p>
                                        <div id="discovery-back" data-aos="fade-right">
                                            <div id="icon-ser1">
                                                <i class="bi bi-arrow-right-circle-fill"></i>
                                            </div>
                                            <div id="text-side1">
                                                <h5>Discovery & Research:</h5>
                                                <p>
                                                    We begin by understanding your business, target audience, and goals.
                                                 This helps us design a website that reflects your brand and meets user expectations.
                                                </p>
                                            </div>
                                        </div>
                                        <div id="Wireframing-back" data-aos="fade-right">
                                            <div id="icon-ser2">
                                                <i class="bi bi-arrow-right-circle-fill"></i>
                                            </div>
                                            <div id="text-side2">
                                                <h5>Wireframing & Prototyping:</h5>
                                                <p>
                                                   We develop wireframes and prototypes to visualize the website's
                                                    layout and structure, ensuring a smooth user journey.
                                                </p>
                                            </div>
                                        </div>
                                        <div id="custom-back" data-aos="fade-right">
                                            <div id="icon-ser3">
                                                <i class="bi bi-arrow-right-circle-fill"></i>
                                            </div>
                                            <div id="text-side3">
                                                <h5>Custom Design:</h5>
                                                <p>
                                                 We begin by understanding your business, target audience, and goals.
                                                  This helps us design a website that reflects your brand and meets user expectations.
                                                </p>
                                            </div>
                                        </div>
                                        <div id="seo-back" data-aos="fade-right">
                                            <div id="icon-ser4">
                                                <i class="bi bi-arrow-right-circle-fill"></i>
                                            </div>
                                            <div id="text-side4">
                                                <h5>SEO Optimization:</h5>
                                                <p>
                                                 We begin by understanding your business, target audience, and goals.
                                                  This helps us design a website that reflects your brand and meets 
                                                  user expectations.
                                                </p>
                                            </div>
                                        </div>
                                        <div id="test-back" data-aos="fade-right">
                                            <div id="icon-ser5">
                                                <i class="bi bi-arrow-right-circle-fill"></i>
                                            </div>
                                            <div id="text-side5">
                                                <h5>Testing & Launch:</h5>
                                                <p>
                                                Before going live, we rigorously test the website across browsers and devices to ensure it performs perfectly.
                                                </p>
                                            </div>
                                        </div>
                                        <div id="Ongoing-back" data-aos="fade-right">
                                            <div id="icon-ser6">
                                                <i class="bi bi-arrow-right-circle-fill"></i>
                                            </div>
                                            <div id="text-side6">
                                                <h5>Ongoing Support & Maintenance:</h5>
                                                <p>
                                                    After launch, we provide ongoing support to ensure your website remains
                                                     up-to-date, secure, and optimized for performance.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="service-two-pic" className="mt-4">
                                        <img src={services2} alt="" />
                                        <img src={services3} alt="" />
                                    </div>
                                    <div id="ser-text-normal" className="mt-4">
                                        <p data-aos="fade-right">
                                            When an unknown printer took ar galley offer type year anddey scrambled make aewer 
                                            specimen a book bethas survived not only five when anner year unknown printer eed
                                             little help from friend from time to time. Although we offer the one-stop 
                                             convenience. unknown printer took galley type year anddey unknown printer
                                              took galley type scrambled.
                                        </p>
                                    </div>
                                    <div class="quote-box" data-aos="fade-up">
                                        <p>
                                            Shape Our Team Of UI/UX Experts Conducts A Thorough Evaluation O The Submitted Element,
                                            Analyzing Its Usability, Functionality, Visual Design, And Overall User Experience.
                                        </p>
                                        <h4>- Will Smith</h4>
                                    </div>
                                    <div id="why-serv-back">
                                        <h1 data-aos="fade-right">
                                            Why Choose Us for Your Web Design Needs?
                                        </h1>
                                        <p data-aos="fade-left">
                                            We create custom, user-centered, responsive websites optimized for performance, SEO, 
                                            and mobile, ensuring an outstanding user experience and helping your business succeed online.
                                        </p>
                                        <div id="Tailored-back" data-aos="fade-right">
                                            <div id="icon-ser7">
                                                <i class="bi bi-arrow-right-circle-fill"></i>
                                            </div>
                                            <div id="text-side7">
                                                <h5>Tailored Designs:</h5>
                                                <p>
                                                    Before going live, we rigorously test the website across browsers and devices to ensure it performs perfectly.
                                                </p>
                                            </div>
                                        </div>
                                         <div id="test-back" data-aos="fade-right">
                                            <div id="icon-ser5">
                                                <i class="bi bi-arrow-right-circle-fill"></i>
                                            </div>
                                            <div id="text-side5">
                                                <h5>Testing & Launch:</h5>
                                                <p>
                                                Before going live, we rigorously test the website across browsers and devices to ensure it performs perfectly.
                                                </p>
                                            </div>
                                        </div>  
                                        <p data-aos="fade-up">
                                        We create custom, user-centered, responsive websites optimized for performance, SEO, and mobile, ensuring an outstanding user experience and helping your business succeed online.
                                    </p>
                                    </div>
                                    
                                </div>
                                <div id="service-right-side">
                                    <div className="service-list" data-aos="fade-up"> 
                                    <div id="s-back">
                                        <h3 data-aos="fade-right">Service List</h3>
                                    </div>
                                    <ul>
                                        <li data-aos="fade-right">
                                        <a
                                            href="#business-web-back"
                                            onClick={(e) => {
                                            e.preventDefault();
                                            const el = document.getElementById("business-web-back");
                                            if (el) {
                                                el.scrollIntoView({ behavior: "smooth", block: "start" });
                                                el.classList.add("highlight");
                                                setTimeout(() => el.classList.remove("highlight"), 1500);
                                            }
                                            }}
                                        >
                                            <span >Business Website Development</span>
                                            <span className="arrow">➜</span>
                                        </a>
                                        </li>
                                        <li data-aos="fade-left">
                                        <a
                                            href="#custom-web-back"
                                            onClick={(e) => {
                                            e.preventDefault();
                                            const el = document.getElementById("custom-web-back");
                                            if (el) {
                                                el.scrollIntoView({ behavior: "smooth", block: "start" });
                                                el.classList.add("highlight");
                                                setTimeout(() => el.classList.remove("highlight"), 1500);
                                            }
                                            }}
                                        >
                                            <span>Custom Website Development</span>
                                            <span className="arrow">➜</span>
                                        </a>
                                        </li>
                                        <li data-aos="fade-right">
                                        <a
                                            href="#landing-web-back"
                                            onClick={(e) => {
                                            e.preventDefault();
                                            const el = document.getElementById("landing-web-back");
                                            if (el) {
                                                el.scrollIntoView({ behavior: "smooth", block: "start" });
                                                el.classList.add("highlight");
                                                setTimeout(() => el.classList.remove("highlight"), 1500);
                                            }
                                            }}
                                        >
                                            <span>Landing Page Design & Development</span>
                                            <span className="arrow">➜</span>
                                        </a>
                                        </li>
                                        <li data-aos="fade-left">
                                        <a
                                            href="#bug-web-back"
                                            onClick={(e) => {
                                            e.preventDefault();
                                            const el = document.getElementById("bug-web-back");
                                            if (el) {
                                                el.scrollIntoView({ behavior: "smooth", block: "start" });
                                                el.classList.add("highlight");
                                                setTimeout(() => el.classList.remove("highlight"), 1500);
                                            }
                                            }}
                                        >
                                            <span>Bug & Frontend Issue Resolution</span>
                                            <span className="arrow">➜</span>
                                        </a>
                                        </li>
                                        <li data-aos="fade-right">
                                        <a
                                            href="#e-web-back"
                                            onClick={(e) => {
                                            e.preventDefault();
                                            const el = document.getElementById("e-web-back");
                                            if (el) {
                                                el.scrollIntoView({ behavior: "smooth", block: "start" });
                                                el.classList.add("highlight");
                                                setTimeout(() => el.classList.remove("highlight"), 1500);
                                            }
                                            }}
                                        >
                                            <span>E-Commerce Store Development</span>
                                            <span className="arrow">➜</span>
                                        </a>
                                        </li>
                                        <li data-aos="fade-left">
                                        <a
                                            href="#f-web-back"
                                            onClick={(e) => {
                                            e.preventDefault();
                                            const el = document.getElementById("f-web-back");
                                            if (el) {
                                                el.scrollIntoView({ behavior: "smooth", block: "start" });
                                                el.classList.add("highlight");
                                                setTimeout(() => el.classList.remove("highlight"), 1500);
                                            }
                                            }}
                                        >
                                            <span>Custom Feature Development (JS/PHP)</span>
                                            <span className="arrow">➜</span>
                                        </a>
                                        </li>
                                        <li data-aos="fade-right">
                                        <a
                                            href="#web-web-back"
                                            onClick={(e) => {
                                            e.preventDefault();
                                            const el = document.getElementById("web-web-back");
                                            if (el) {
                                                el.scrollIntoView({ behavior: "smooth", block: "start" });
                                                el.classList.add("highlight");
                                                setTimeout(() => el.classList.remove("highlight"), 1500);
                                            }
                                            }}
                                        >
                                            <span>Website Performance Optimization</span>
                                            <span className="arrow">➜</span>
                                        </a>
                                        </li>
                                        <li data-aos="fade-left">
                                        <a
                                            href="#webm-web-back"
                                            onClick={(e) => {
                                            e.preventDefault();
                                            const el = document.getElementById("webm-web-back");
                                            if (el) {
                                                el.scrollIntoView({ behavior: "smooth", block: "start" });
                                                el.classList.add("highlight");
                                                setTimeout(() => el.classList.remove("highlight"), 1500);
                                            }
                                            }}
                                        >
                                            <span>Website Migration & Hosting Transfer</span>
                                            <span className="arrow">➜</span>
                                        </a>
                                        </li>
                                    </ul>
                                    </div>


                                    {/* <!-- Categories Box --> */}
                                    <div class="categories-box" data-aos="fade-right">
                                        <h3>Categories</h3>
                                        <div class="categories">
                                            <span>Admin Dashboard</span>
                                            <span>Landing Page</span>
                                            <span>Mobile App</span>
                                            <span>UI Design</span>
                                            <span>Website Design</span>
                                            <span>Wireframing</span>
                                        </div>
                                    </div>

                                    {/* <!-- Contact Box --> */}
                                    <div class="contact-box" data-aos="fade-up">
                                            <div class="logo">⚫</div> 
                                            <h2>KAIFI</h2>
                                            <p>Don't Hesitate To<br/>Contact Me</p>
                                            <h4>+77 022 444 05 05</h4>
                                            <button>Get In Touch</button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" id="hero-services-third">
                <div className="container">
                     <div className="row" id="web1-bot">
                        <div className="col mt-5 mb-3">
                            <div id="business-web-back">
                                <div id="bus-first-back">
                                    <img src={web1} alt="" data-aos="fade-right" />
                                    <h1 data-aos="fade-left">Business Website Development</h1>
                                </div>
                                <div id="text-area1">
                                    <h5 data-aos="fade-up">Custom WordPress Sites That Perform</h5>
                                    <p data-aos="fade-up">
                                        I create responsive, modern websites tailored to your business needs, with a clean design, functional layout, and mobile optimization.
                                    </p>
                                    <h6 data-aos="fade-up">
                                        Features:
                                    </h6>
                                    <ul>
                                        <li data-aos="fade-up">Custom layouts with Elementor</li>
                                        <li data-aos="fade-up">Mobile & tablet responsiveness</li>
                                        <li data-aos="fade-up">Speed-optimized structure</li>
                                        <li data-aos="fade-up">SEO-ready design</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col mt-5">
                            
                                <div id="custom-web-back">
                                <div id="cus-first-back">
                                      <img src={web2} alt="" data-aos="fade-right" />
                                    <h1 data-aos="fade-left">Custom Website Development</h1>
                                </div>
                                <div id="text-area2">
                                    <h5 data-aos="fade-up">Lightweight, fast, and fully tailored — no CMS needed.</h5>
                                    <p data-aos="fade-up">
                                        I build fully custom websites from scratch using clean HTML, CSS, JavaScript, Bootstrap, PHP, and jQuery. 
                                    </p>
                                    <h6 data-aos="fade-up">
                                        Features:
                                    </h6>
                                    <ul>
                                         <li data-aos="fade-up">Built from scratch using HTML, CSS, Bootstrap</li>
                                        <li data-aos="fade-up">Custom animations and dynamic UI using jQuery</li>
                                        <li data-aos="fade-up">Contact forms & backend with PHP</li>
                                        <li data-aos="fade-up">Clean, fast codebase (no bloat)</li>
                                        <li data-aos="fade-up">Fully responsive & mobile-optimized</li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className="row" id="web2-bot">
                        <div className="col mt-5 mb-3">
                            <div id="landing-web-back">
                                <div id="land-first-back">
                                    <img src={web3} alt="" data-aos="fade-right" />
                                    <h1 data-aos="fade-left">Landing Page Design & Development</h1>
                                </div>
                                <div id="text-area3">
                                    <h5 data-aos="fade-up">Drive more leads with high-converting pages.</h5>
                                    <p data-aos="fade-up">
                                        Get focused, conversion-driven landing pages for your product, campaign, or business — optimized for action.
                                    </p>
                                    <h6 data-aos="fade-up">
                                        Features:
                                    </h6>
                                    <ul>
                                        <li data-aos="fade-up">Clean, minimal layout</li>
                                        <li data-aos="fade-up">Lead forms, CTAs, popups</li>
                                        <li data-aos="fade-up">Fast loading times</li>
                                        <li data-aos="fade-up">Built for results</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col mt-5">
                            <div id="bug-web-back">
                             <div id="bug-first-back">
                                    <img src={web4} alt="" data-aos="fade-right"/>
                                    <h1 data-aos="fade-left">Bug & Frontend Issue Resolution</h1>
                                </div>
                                <div id="text-area4">
                                    <h5 data-aos="fade-up">Fix layout or design issues quickly.</h5>
                                    <p data-aos="fade-up"> 
                                        Get focused, conversion-driven landing pages for your product, campaign, or business — optimized for action.                                    </p>
                                    <h6 data-aos="fade-up">
                                        Features:
                                    </h6>
                                    <ul>
                                        <li data-aos="fade-up">Clean, minimal layout</li>
                                        <li data-aos="fade-up">Lead forms, CTAs, popups</li>
                                        <li data-aos="fade-up">Fast loading times</li>
                                        <li data-aos="fade-up">Built for results</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" id="web3-bot">
                        <div className="col mt-5 mb-3">
                            <div id="e-web-back">
                                <div id="e-first-back">
                                    <img src={web5} alt="" data-aos="fade-right" />
                                    <h1 data-aos="fade-left">E-Commerce Store Development</h1>
                                </div>
                                <div id="text-area5">
                                    <h5 data-aos="fade-up">Launch your online store with WooCommerce.</h5>
                                    <p data-aos="fade-up">
                                        I’ll set up a secure, easy-to-manage online store that helps you start selling 
                                        fast with product filters, payment gateways, and more.                                    </p>
                                    <h6 data-aos="fade-up">
                                        Features:
                                    </h6>
                                    <ul>
                                        <li data-aos="fade-up">WooCommerce setup</li>
                                        <li data-aos="fade-up">Stripe & PayPal integration</li>
                                        <li data-aos="fade-up">Product variation & coupon setup</li>
                                        <li data-aos="fade-up">Shop & cart customization</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col mt-5 mb-4">
                            <div id="f-web-back">
                             <div id="f-first-back">
                                    <img src={web6} alt="" data-aos="fade-right"/>
                                    <h1 data-aos="fade-left">Custom Feature Development (JS/PHP)</h1>
                                </div>
                                <div id="text-area6">
                                    <h5 data-aos="fade-up">Bring your ideas to life with dynamic functionality.</h5>
                                    <p data-aos="fade-up">
                                        I build interactive and custom features for both HTML-based websites and 
                                        WordPress. Whether it’s a custom calculator, dynamic form, or 
                                        interactive UI — it’s tailored to your needs using JS, jQuery, or PHP.
                                    </p>
                                     <h6 data-aos="fade-up">
                                        Features:
                                    </h6 >
                                    <ul>
                                        <li data-aos="fade-up">JavaScript/jQuery-based interactivity</li>
                                        <li data-aos="fade-up">PHP for backend logic (contact forms, filtering, etc.)</li>
                                        <li data-aos="fade-up">Works with both WordPress & custom sites</li>
                                        <li data-aos="fade-up">Clean integration without plugin overload</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mt-5 mb-5">
                            <div id="web-web-back">
                                <div id="web-first-back">
                                    <img src={web7} alt="" data-aos="fade-right" />
                                    <h1 data-aos="fade-left">Website Performance Optimization</h1>
                                </div>
                                <div id="text-area7">
                                    <h5 data-aos="fade-up">Make your website load blazing fast.</h5>
                                    <p data-aos="fade-up">
                                        A slow site loses users. I optimize loading speed, improve Core Web Vitals, and reduce bounce rates.
                                    </p>
                                    <h6 data-aos="fade-up">
                                        Features:
                                    </h6>
                                    <ul>
                                        <li data-aos="fade-up">Caching & lazy load</li>
                                        <li data-aos="fade-up">Image compression</li>
                                        <li data-aos="fade-up">CDN & minification setup</li>
                                        <li data-aos="fade-up">Core Web Vitals boost</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col mt-5 mb-4">
                            <div id="webm-web-back">
                             <div id="webm-first-back">
                                    <img src={web8} alt="" data-aos="fade-right" />
                                    <h1 data-aos="fade-left">Website Migration & Hosting Transfer</h1>
                                </div>
                                <div id="text-area8">
                                    <h5 data-aos="fade-up">Move your site without a single error.</h5>
                                    <p data-aos="fade-up">
                                        Switching hosting or domain? I migrate your WordPress site safely, keeping everything intact and downtime-free.                                    </p>
                                     <h6 data-aos="fade-up">
                                        Features:
                                    </h6>
                                    <ul>
                                        <li data-aos="fade-up">Full site backup</li>
                                        <li data-aos="fade-up">Hosting & domain transfer</li>
                                        <li data-aos="fade-up">No downtime guaranteed</li>
                                        <li  data-aos="fade-up">SSL & email reconfiguration</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        
        </>
    )
}
export default Services;