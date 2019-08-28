import React from "react";

const Sliding = () => {
    return <div className="mainSliding">
        <div id="demo" class="carousel slide" data-ride="carousel">

            {/* <div className="slidingContent">
                <span>Discover Your<br/><b style={{"color":"#5d257e"}}>DIGITAL BUSINESS EDGE<br/>WITH CARMATEC</b>
                    <h6>WEb - MOBILE - MARKETING - CLOUD - ANALYTICS</h6>
                </span>
            </div> */}

            {/* <!-- The slideshow --> */}
            <div className="carousel-inner">
                <div className="carousel-item active slidingFirstImg">
                    <img src="./images/img-2.jpg" alt="Los Angeles" width="100%" height="100%"/>
                    <div className="carousel-caption captionData ">
                        <span>Discover Your<br/><h2 style={{"color":"#5d257e"}}>DIGITAL BUSINESS EDGE<br/>WITH CARMATEC</h2>
                            <h6 className="mt-3">WEb - MOBILE - MARKETING - CLOUD - ANALYTICS</h6>
                        </span>
                    </div>
                </div>
                <div className="carousel-item slidingFirstImg">
                    <img src="./images/img-3.jpg" alt="Chicago" width="100%" height="100%"/>
                </div>
                <div className="carousel-item slidingFirstImg ">
                    <img src="./images/img-25.jpg" alt="New York" width="100%" height="100%"/>
                    <div className="carousel-caption captionData ">
                        <span style={{"fontSize":"25px"}}>INTELLIGENT CLOUD POWERED<br/><h2 style={{"color":"#5d257e"}}>MULTI DEVICE SOLUTIONS!</h2>
                            <h6 className="mt-3">DATA ANYWHERE ANYTIME LOCATION AWARE</h6>
                        </span>
                    </div>
                </div>
            </div>

            {/* <!-- Left and right controls --> */}
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
            </a>

            </div>
    </div>;
};

export default Sliding;