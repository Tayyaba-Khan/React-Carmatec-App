import React from "react";

const About = () => {
    return <div className="mainAbout">;
        <div className="container">
            <div className="row aboutIstRow justify-content-center mt-4 mb-5 text-center flex-column">
                <div className="col-12 aboutIstCol">
                    <h2 className="aboutIstHeading font-weight-bold">Get Your Organisation ‘Digital Ready’</h2>
                    <p className="paraColor mt-3 mx-3" style={{"font-size":"15px"}}>Time to leave your legacy operations behind. Make your move in the digital realm. Turn big data into actionable insight. A brilliant digital future is awaiting you! There is no cookie-cutter digital transformation solution for any business. With years of experience at working with organizations like yours, we know what kind of personalization will work for you. With our knack for following the latest in tech-trends, we specialize at empowering your business with the right set of platform, application and solutions.</p>
                    <h2 className="font-weight-bold mt-5">What we do</h2>
                    <h6 className="paraColor">We handhold businesses like yours in each phase of their digital transformation journeys</h6>
                    <div className="row justify-content-center mt-5">
                        <div className="col-3 innerAboutColOne d-flex flex-column border border-dark mb-4 active" data-toggle="collapse"        data-target="#tabAboutOne" aria-expanded="true" aria-controls="tabAboutOne">
                            <i class="fa fa-bullhorn aboutIcon mt-3 mb-2" aria-hidden="true"></i>
                            <span className="text-black font-weight-bold innerSpan">Web Presence Solutions</span>
                        </div>
                        <div className="col-3 d-flex flex-column border border-dark mb-4" data-toggle="collapse" data-target="#tabAboutTwo" aria-expanded="false" aria-controls="tabAboutTwo">
                            <i class="fa fa-laptop aboutIcon mt-3 mb-2" aria-hidden="true"></i>
                            <span className="text-black font-weight-bold innerSpan" >Web & Mobile app<br/>Development</span>
                        </div>
                        <div className="col-3 d-flex flex-column border border-dark mb-4" data-toggle="collapse" data-target="#tabAboutThree" aria-expanded="false" aria-controls="tabAboutThree">
                            <i class="fa fa-rocket aboutIcon mt-3 mb-2" aria-hidden="true"></i>
                            <span className="text-black font-weight-bold innerSpan">Managed IT Solutions</span>
                        </div>
                    </div>
                </div>
                <div className="row innerAboutSecOne justify-content-center flex-column mt-3 collapse active" id="tabAboutOne">
                    <div className="col-12 innerAboutColTwo">
                        <h4 className="font-weight-bold">Web Presence Solutions</h4>
                        <p style={{"font-size":"15px"}} className="mt-1 mb-5">Planning to start a new business? Dreaming of your small business to grow into a large enterprise? Get<br/> empowered by our qualitative UI/UX Design, Digital Marketing, Web Analytics, SEO, Social Media Strategy, Email<br/> Marketing and Conversion Rate Optimization (CRO) services to spell out online success for your business.
                        </p>
                        <div className="row justify-content-center">
                            <div className="col-2 d-flex flex-column mb-4 aboutdata">
                                <img src="./images/img-4.png" alt="" className=" border py-4 px-5 paraColor"/>
                                <span className="text-black font-weight-bold innerSpan mt-2" style={{"font-size":"12px"}}>WEBSITE DESIGN</span>
                            </div>
                            <div className="col-2 d-flex flex-column mb-4 ml-5 aboutdata">
                                <img src="./images/img-5.png" alt="" className="border py-4 px-5 paraColor"/>
                                <span className="text-black font-weight-bold innerSpan mt-2" style={{"font-size":"12px"}}>SEO</span>
                            </div>
                            <div className="col-2 d-flex flex-column mb-4 ml-4 aboutdata">
                                <img src="./images/img-6.png" alt="" className="border py-4 px-5 paraColor"/>
                                <span className="text-black font-weight-bold innerSpan mt-2" style={{"font-size":"12px"}}>INTERNET MARKETING</span>
                            </div>
                            <div className="col-2 d-flex flex-column mb-4 ml-5 aboutdata">
                                <img src="./images/img-7.png" alt="" className="border py-4 px-5 paraColor"/>
                                <span className="text-black font-weight-bold innerSpan mt-2" style={{"font-size":"12px"}}>MARKETING AUTOMATION</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row innerAboutSecOne justify-content-center flex-column mt-3 collapse" id="tabAboutTwo">
                    <div className="col-12 innerAboutColTwo">
                        <h4 className="font-weight-bold">Web Mobile & Development</h4>
                        <p style={{"font-size":"15px"}} className="mt-1 mb-5">How about mapping the digital transformation journey of your business with your own app in the web & mobile<br/> market-places? From mobile apps to web apps to websites to custom software, we’ve got it all covered! Now,<br/> revolutionize the way you engage, interact with and convert your prospects into customers & the way you do<br/> business.
                        </p>
                        <div className="row justify-content-center collapse" id="tabAboutTwo">
                            <div className="col-2 d-flex flex-column mb-4 aboutdata">
                                <img src="./images/img-8.png" alt="" className=" border py-4 px-5 paraColor"/>
                                <span className="text-black font-weight-bold innerSpan mt-2" style={{"font-size":"12px"}}>WEB APPLICATIONS</span>
                            </div>
                            <div className="col-2 d-flex flex-column mb-4 ml-5 aboutdata">
                                <img src="./images/img-9.png" alt="" className="border py-4 px-5 paraColor"/>
                                <span className="text-black font-weight-bold innerSpan mt-2" style={{"font-size":"12px"}}>MOBILE APPLICATIONS</span>
                            </div>
                            <div className="col-2 d-flex flex-column mb-4 ml-4 aboutdata">
                                <img src="./images/img-10.png" alt="" className="border py-4 px-5 paraColor"/>
                                <span className="text-black font-weight-bold innerSpan mt-2" style={{"font-size":"12px"}}>ECOMMERCE SOLUTIONS</span>
                            </div>
                            <div className="col-2 d-flex flex-column mb-4 ml-5 aboutdata">
                                <img src="./images/img-11.png" alt="" className="border py-4 px-5 paraColor"/>
                                <span className="text-black font-weight-bold innerSpan mt-2" style={{"font-size":"12px"}}>HIRE A DEVELOPER</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row innerAboutSecOne justify-content-center flex-column mt-3 collapse" id="tabAboutThree">
                    <div className="col-12 innerAboutColTwo">
                        <h4 className="font-weight-bold">Managed IT Solutions</h4>
                        <p style={{"font-size":"15px"}} className="mt-1 mb-5">Empower your business IT with the flexibility, scalability and optimization, the contemporary IT infrastructure<br/> offers. Leverage our 360° Managed IT solutions to effectively bring down your IT support costs. We strive to<br/> deliver exceptional speed and high up-times to make sure that you are always there when your client needs<br/> you.
                        </p>
                        <div className="row justify-content-center collapse" id="tabAboutThree">
                            <div className="col-2 d-flex flex-column mb-4 aboutdata">
                                <img src="./images/img-12.png" alt="" className=" border py-4 px-5 paraColor"/>
                                <span className="text-black font-weight-bold innerSpan mt-2" style={{"font-size":"12px"}}>24/7 MANAGED IT</span>
                            </div>
                            <div className="col-2 d-flex flex-column mb-4 ml-5 aboutdata">
                                <img src="./images/img-13.png" alt="" className="border py-4 px-5 paraColor"/>
                                <span className="text-black font-weight-bold innerSpan mt-2" style={{"font-size":"12px"}}>AWS MANAGED SOLUTIONS</span>
                            </div>
                            <div className="col-2 d-flex flex-column mb-4 ml-4 aboutdata">
                                <img src="./images/img-14.png" alt="" className="border py-4 px-5 paraColor"/>
                                <span className="text-black font-weight-bold innerSpan mt-2" style={{"font-size":"12px"}}>CLOUD SOLUTIONS</span>
                            </div>
                            <div className="col-2 d-flex flex-column mb-4 ml-5 aboutdata">
                                <img src="./images/img-15.png" alt="" className="border py-4 px-5 paraColor"/>
                                <span className="text-black font-weight-bold innerSpan mt-2" style={{"font-size":"12px"}}>DEVOPS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default About;