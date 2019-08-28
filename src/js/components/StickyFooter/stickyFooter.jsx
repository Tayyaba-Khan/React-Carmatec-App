import React from "react";

const Stickyfooter = () => {
    return <div className="mainSticky">
        <div className="row innerSticky">
            <div className="col-2 ml-5 pt-1" style={{"width":"0px","height":"50px"}}><img src="./images/whatsapp.png" alt="" height="80%" width="20%"></img></div>
            <div className="col-8 text-center">
                <p className="pt-3" style={{"fontSize":"12px"}}>We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</p>
                {/* <button className="btn btn-outline btn-outline-light">Okay</button> */}
            </div>
        </div>
    </div>;
};

export default Stickyfooter;