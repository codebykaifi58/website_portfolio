import React from "react";
import magic from '../assets/star-2.png';
import icon1 from '../assets/2-1.svg';
import icon2 from '../assets/5-1.svg';
import icon3 from '../assets/4-1.svg';
import icon4 from '../assets/8.svg';
import star from '../assets/star.png';
import icon5 from '../assets/8 (1).svg';
function Awards(){

    return(
        <>
            <div className="container-fluid" id="award-hero">
                <div className="container">
                    <div className="row">
                        <div className="col mt-5">
                            <div id="award-head">
                                <img src={magic} alt="" />
                                <span>Awards</span>
                            </div>
                            <div id="award-h1">
                                <h1><span>Awards</span> & Recognition</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col mb-5" id="award12-back">
                            <div id="award1">
                                <img src={icon1} alt="" />
                                <div id="award1-head">
                                    <h3>
                                        Best Website Design
                                    </h3>
                                    <p>
                                        July 26, 2025
                                    </p>
                                </div>
                                <img src={icon2} alt="" />
                            </div>
                            <div id="award1">
                                <img src={icon3} alt="" />
                                <div id="award1-head">
                                    <h3>
                                        Best Website Design
                                    </h3>
                                    <p>
                                        July 26, 2025
                                    </p>
                                </div>
                                <img src={icon5} alt="" />
                            </div>
                        </div>
                        <div className="col mb-5" id="award34-back">
                            <div id="award2">
                                <img src={icon1} alt="" />
                                <div id="award1-head">
                                    <h3>
                                        Best Performance 
                                    </h3>
                                    <p>
                                        July 26, 2025
                                    </p>
                                </div>
                                <img src={icon2} alt="" />
                            </div>
                            <div id="award2">
                                <img src={icon3} alt="" />
                                <div id="award1-head">
                                    <h3>
                                        Best Performance
                                    </h3>
                                    <p>
                                        July 26, 2025
                                    </p>
                                </div>
                                <img src={icon4} alt="" />
                            </div>
                            <img src={star} id="star" alt="star" className="animate-left-right" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Awards;