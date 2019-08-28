import React from "react";

const Help = () => {
    return <div className="mainHelp pb-5">
        <div className="container">
            <div className="row helpIstRow justify-content-center flex-column text-center">
                <h2 className="font-weight-bold mt-4">INDUSTRIES WE HELP</h2>
                <p className="paraColor">Regardless of its industry, your business gets an instant boost with our custom-crafted solutions</p>
                <div className="col-12 mt-5">
                   <div className="polygonCol">
                        <div className="polygonOne">
                            <img className="polygonImg" src="./images/poly.png" alt=""/>
                            <div className="polyIcon"><img src="./images/icon-1.png" alt=""/></div>
                            <a href="#" className="font-weight-bold polygonDataOne text-dark text-decoration-none">Health Care</a>
                        </div>
                        <div className="polygonTwo">
                            <img className="polygonImg" src="./images/poly.png" alt=""/>
                            <div className="polyIcon"><img src="./images/icon-2.png" alt=""/></div>
                            <a href="#" className="font-weight-bold polygonDataTwo text-dark text-decoration-none">ECOMMERCE</a>
                        </div>
                        <div className="polygonThree">
                            <img className="polygonImg" src="./images/poly.png" alt=""/>
                            <div className="polyIcon"><img src="./images/icon-6.png" alt=""/></div>
                            <a href="#" className="font-weight-bold polygonDataThree text-dark text-decoration-none">HOSTING & <br/> DATACENTER</a>
                        </div>
                        <div className="polygonFour">
                            <img className="polygonImg" src="./images/poly.png" alt=""/>
                            <div className="polyIcon"><img src="./images/icon-5.png" alt=""/></div>
                            <a href="#" className="font-weight-bold polygonDataFour text-dark text-decoration-none">BANK &<br/> INSURANCE</a>
                        </div>
                        <div className="polygonFive">
                            <img className="polygonImg" src="./images/poly.png" alt=""/>
                            <div className="polyIcon"><img src="./images/icon-3.png" alt=""/></div>
                            <a href="#" className="font-weight-bold polygonDataFive text-dark text-decoration-none">START-UP</a>
                        </div>
                        <div className="polygonSix">
                            <img className="polygonImg" src="./images/poly.png" alt=""/>
                            <div className="polyIcon"><img src="./images/icon-4.png" alt=""/></div>
                            <a href="#" className="font-weight-bold polygonDataSix text-dark text-decoration-none">MEDIA</a>
                        </div>
                   </div>
                    {/* <div className="row polygon polygonRowTwo justify-content-center">
                        <img src="./images/poly.png" alt=""/>
                        <div className="polyIcon"><img src="./images/icon-1.png" alt=""/></div>
                    </div>
                    <div className="row polygon polygonRowThree">
                        <img src="./images/poly.png" alt=""/>
                        <div className="polyIcon"><img src="./images/icon-1.png" alt=""/></div>
                    </div>
                    <div className="row polygon polygonRowFour">
                        <img src="./images/poly.png" alt=""/>
                        <div className="polyIcon"><img src="./images/icon-1.png" alt=""/></div>
                    </div>
                    <div className="row polygon polygonRowFive">
                        <img src="./images/poly.png" alt=""/>
                        <div className="polyIcon"><img src="./images/icon-1.png" alt=""/></div>
                    </div>
                    <div className="row polygon polygonRowSix">
                        <img src="./images/poly.png" alt=""/>
                        <div className="polyIcon"><img src="./images/icon-1.png" alt=""/></div>
                    </div> */}
                </div>
                {/* <svg height="500">
                    <path d="M510 50 L600 50 L647 135 L600 210 L510 210 L460 133 L510 50" stroke="black" fill="none"/>
                    <path d="M657 135 L747 135 L794 220 L747 295 L657 295 L607 220 L657 135" stroke="black" fill="none"/>
                    <path d="M657 135 L747 135 L794 220 L747 295 L657 295 L607 220 L657 135" stroke="black" fill="none"/>
                </svg> */}
            </div>
        </div>
    </div>;
};

export default Help;