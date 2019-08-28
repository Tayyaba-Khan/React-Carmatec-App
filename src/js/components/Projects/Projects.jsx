import React from "react";

const Projects = () => {
    return <div className="mainProject mb-5">
        <div className="container pb-4" style={{"background-color":"#f0f0f0"}}>
            <div className="row justify-content-center text-center flex-column mt-3">
                <h2 className="font-weight-bold mt-5">PROJECTS</h2>
                <p style={{"color":"#7d7d7d"}}>Enrich your projects, however complex, with our extensive experience. Just the way they did!</p>
            </div>
                <div className="row justify-content-center text-center mt-3 px-4">
                    <div className="col-6 m-0 p-0">
                        <div className="proImg" style={{"height":"500px"}}>
                            <img className="proInnerImg" src="./images/img-16.jpg" alt="not found" width="100%" height="100%"/>
                            <div className="overlay ">
                                <h2><a className="text-light text-decoration-none" href="#">The Collective</a></h2>
                                <p className="font-weight-bold"><a className="text-light text-decoration-none" href="#">ecommerce</a></p>
                            </div>
                        </div>
                        <div className="row px-3">
                            <div className="col-6 m-0 p-0">
                                <div className="proImg" style={{"height":"205px"}}>
                                    <img className="proInnerImg" src="./images/img-22.jpg" alt="not found" width="100%" height="100%"/>
                                    <div className="overlay ">
                                        <h2><a className="text-light text-decoration-none" href="#">QOL LABS</a></h2>
                                        <p className="font-weight-bold"><a className="text-light text-decoration-none" href="#">Health Care</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 m-0 p-0">
                                <div className="proImg" style={{"height":"205px"}}>
                                    <img className="proInnerImg" src="./images/img-17.jpg" alt="not found" width="100%" height="100%"/>
                                    <div className="overlay ">
                                        <h2><a className="text-light text-decoration-none" href="#">TAKEAWAY<br/>JUNGLE</a></h2>
                                        <p className="font-weight-bold"><a className="text-light text-decoration-none" href="#">Food & Beverages</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 m-0 p-0">
                        <div className="proImg" style={{"height":"270px"}}>
                            <img className="proInnerImg" src="./images/img-20.jpg" alt="not found" width="100%" height="100%"/>
                            <div className="overlay ">
                                <h3><a className="text-decoration-none text-light" href="#">QATAR INNSURANCE COMPANY</a></h3>
                                <p className="font-weight-bold"><a className="text-light text-decoration-none" href="#">ecommerce</a></p>
                            </div>
                        </div>
                        <div className="proImg" style={{"height":"235px"}}>
                            <img className="proInnerImg" src="./images/img-24.jpg" alt="not found" width="100%" height="100%"/>
                            <div className="overlay ">
                                <h2><a className="text-decoration-none text-light" href="#">ESTAD AL DOHA</a></h2>
                                <p className="font-weight-bold"><a className="text-light text-decoration-none" href="#">Media</a></p>
                            </div>
                        </div>
                        <div className="row px-3">
                            <div className="col-6 m-0 p-0">
                                <div className="proImg" style={{"height":"200px"}}>
                                    <img className="proInnerImg" src="./images/img-21.jpg" alt="not found" width="100%" height="100%"/>
                                    <div className="overlay ">
                                        <h2><a className="text-decoration-none text-light" href="#">DITTO TV</a></h2>
                                        <p className="font-weight-bold"><a className="text-light text-decoration-none" href="#">Media</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 m-0 p-0">
                                <div className="proImg" style={{"height":"200px"}}>
                                    <img className="proInnerImg" src="./images/img-19.jpg" alt="not found" width="100%" height="100%"/>
                                    <div className="overlay ">
                                        <h2><a className="text-decoration-none text-light" href="#">MOVE</a></h2>
                                        <p className="font-weight-bold"><a className="text-light text-decoration-none" href="#">Advertising</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center text-center flex-column mt-5">
                        <button className="proIstBtn btn btn-outline-primary font-weight-bold">KNOW MORE</button>
                    </div>
                </div> 
        </div>
    </div>;
};
export default Projects;