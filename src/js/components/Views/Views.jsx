import React from "react";

const Views = () => {
    return <div className="mainViews">
        <div className="container">
            {/* <div className="overlay overlayEffect"></div> */}
            <div className="row py-5">
                <div className="col-12 d-flex">
                    <div className="viewImg mr-5">
                        <img src="./images/img-36.png" alt="" height="100%" width="100%"/>
                    </div>
                    <div className="viewImg mr-5 ml-4">
                        <img src="./images/img-37.png" alt="" height="100%" width="100%"/>
                    </div>
                    <div className="viewImg mr-5">
                        <img src="./images/img-38.png" alt="" height="100%" width="100%"/>
                    </div>
                    <div className="viewImg mr-5">
                        <img src="./images/bing-google.png" alt="" height="100%" width="100%"/>
                    </div>
                    <div className="viewImg ml-5">
                        <img src="./images/img-40.png" alt="" height="100%" width="100%"/>
                    </div>
                </div>
            </div>
            <div className="row text-center pb-5 text-light">
                <div className="col-2 mx-4">
                    <span className="display-4 font-weight-bold">10.5K</span><br/><br/>
                    <h6 className="font-weight-bold">WEBSITE INSTANCES</h6>
                </div>
                <span className="display-1 pl-3">|</span>
                <div className="col-3">
                    <span className="display-4 font-weight-bold">5.2M</span><br/><br/>
                    <h6 className="font-weight-bold">IN MARKETING BUDGETS($)</h6>
                </div>
                <span className="display-1">|</span>
                <div className="col-2 mx-4">
                    <span className="display-4 font-weight-bold">2.4M</span><br/><br/>
                    <h6 className="font-weight-bold">MANAGED IT HOURS</h6>
                </div>
                <span className="display-1" style={{"height":"100px"}}>|</span><br/><br/>
                <div className="col-3">
                    <span className="display-4 font-weight-bold">4K</span><br/><br/>
                    <h6 className="font-weight-bold">CLOUD SERVERS MANAGED</h6>
                </div>
            </div>
        </div>
    </div>;
};

export default Views;
