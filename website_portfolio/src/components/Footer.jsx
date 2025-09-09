import React from "react";
import footerLogo from '../assets/logo-white.svg'; // ✅ Corrected import

function Footer() {
    return (
        <>
            <div className="container-fluid" id="footer-main">
                <div className="container">
                    <div className="row" id="footer-row1">
                        <div className="col mt-5 mb-5">
                            <div id="footer-logo-back">
                                <img src={footerLogo} alt="Footer Logo" />
                            </div>
                            <div id="footer-text-back">
                                <p>
                                    On the other hand, We denounce with righteous indigna-tion And
                                     Dislike men who are beguiled and demoralized the Charms of
                                      Pleasure At vero eos et
                                </p>
                            </div>
                            <div id="footer-call-option">
                                <div id="icon-back">
                                    <i class="bi bi-telephone-fill"></i>
                                </div>
                                <div id="call-text">
                                    <p>
                                        Call Now <br />
                                        +92 3190293464
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col mt-5 mb-5" id="footer-center-col">
                            <div id="footer-center">
                                <div id="heading-back">
                                    <h3>Quick Links</h3>
                                </div>
                                <div id="footer-link">
                                    <a href="#">Home</a>
                                    <a href="#">About</a>
                                    <a href="#">Portfolio</a>
                                    <a href="#">Services</a>
                                    <a href="#">Contact</a>
                                </div>
                            </div>
                        </div>
                        <div className="col mt-5 mb-5">
                            <div id="heading-back">
                                <p>
                                    Say Hello!
                                </p>
                            </div>
                            <div id="footer-email-back">
                                <h3>
                                    skaif1694@gmail.com
                                </h3>
                            </div>
                            <div id="footer-icon">
                                <h4>
                                    Social Icon:
                                </h4>
                                <div id="footer-icon-back">
                                    <span>
                                        <i class="bi bi-facebook"></i>
                                    </span>
                                    <span>
                                        <i class="bi bi-twitter-x"></i>
                                    </span>
                                    <span>
                                        <i class="bi bi-linkedin"></i>
                                    </span>
                                    <span>
                                        <i class="bi bi-instagram"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" id="footer-row2">
                        <div id="copy-back" className="mt-3">
                            <p>Copyright© <a href="#">Kaifi</a></p>
                        </div>
                        <div id="link-url" className="mt-3 mb-3">
                            <a href="#">Terms  & Condition </a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
