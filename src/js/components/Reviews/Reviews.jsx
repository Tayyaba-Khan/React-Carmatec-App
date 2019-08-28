import React from "react";

const Review = () => {
    return <div className="mainReview">
        <div className="container pb-5">
            <div className="row justify-content-center text-center flex-column">
                <h2 className="font-weight-bold mt-5">WHAT CLIENTS SAY</h2>
                <p className="text-muted">Our clients totally vouch for our services when it comes to quality, timely deliver & the results achieved</p>
            </div>
            <div className="row text-center my-slider mt-5">
                    <div className=" text-center ">
                        <div className="reviewContent d-flex justify-content-center">
                            <div className="reviewImg"><img src="./images/test-2.png" alt=""/></div>
                            <div className="mt-4 ml-2">
                                <b className="text-danger mt-2">Dr Suchetha S Swamy</b>
                                <h6 className="text-muted mt-1 font-weight-bold">YOGIN’S CLINIC</h6>
                            </div>
                        </div>
                        <p className="text-muted py-4 font-weight-bold">Just a sentence would say every thing<br/> “You all made my dream design come true”<br/> Thanks a ton!</p>
                    </div>
                    <div className=" text-center ">
                        <div className="reviewContent d-flex justify-content-center">
                            <div className="reviewImg"><img src="./images/test3.png" alt=""/></div>
                            <div className="mt-4 ml-2">
                                <b className="text-danger mt-2">Tory Jacob</b>
                                <h6 className="text-muted mt-1 font-weight-bold">Design for Health</h6>
                            </div>
                        </div>
                        <p className="text-muted py-4 font-weight-bold">Carmatec has changed the game on how we manage/deploy our current Practice Management<br/> System. We are now able to view real-time dashboards that provide invaluable information and<br/> trends. Their top-tier service and scalability allow us to make changes that positively impacts our<br/> performance, product and keeps our business moving forward.</p>
                    </div>
                    <div className=" text-center ">
                        <div className="reviewContent d-flex justify-content-center">
                            <div className="reviewImg"><img src="./images/test4.png" alt=""/></div>
                            <div className="mt-4 ml-2">
                                <b className="text-danger mt-2">Max Langhurst</b>
                                <h6 className="text-muted mt-1 font-weight-bold">QOL Labs</h6>
                            </div>
                        </div>
                        <p className="text-muted py-4 font-weight-bold">I was very impressed by the team at Carmatec. They are very knowledgeable and creative. We were<br/> able to deliver our site within cost and met our deadline because of their expertise in the field. I<br/> would gladly recommend to someone looking to build a<br/>
                        website!</p>
                    </div>
                    <div className=" text-center ">
                        <div className="reviewContent d-flex justify-content-center">
                            <div className="reviewImg"><img src="./images/test5.png" alt=""/></div>
                            <div className="mt-4 ml-2">
                                <b className="text-danger mt-2">Michael Lavrik</b>
                                <h6 className="text-muted mt-1 font-weight-bold">Interserver.net</h6>
                            </div>
                        </div>
                        <p className="text-muted py-4 font-weight-bold">Carmatec has put up sound systems in place, coupled with an excellent team that enables them to<br/> provide high quality service on a consistent basis. We owe our recent growth curve to the excellent<br/> services from Carmatec.</p>
                    </div>
                    <div className=" text-center ">
                        <div className="reviewContent d-flex justify-content-center">
                            <div className="reviewImg"><img src="./images/test6.png" alt=""/></div>
                            <div className="mt-4 ml-2">
                                <b className="text-danger mt-2">Mark Esho</b>
                                <h6 className="text-muted mt-1 font-weight-bold">EasyInternetSolutions.co.uk</h6>
                            </div>
                        </div>
                        <p className="text-muted py-4 font-weight-bold">I want to let everyone know how happy we are with Carmatec. The management is extremely<br/> responsive too and takes feedback very seriously. They work with you closely to ensure positive<br/> results. I highly recommend Carmatec. You cannot go wrong with these guys.</p>
                    </div>
            </div>
        </div>
    </div>;
};

export default Review;