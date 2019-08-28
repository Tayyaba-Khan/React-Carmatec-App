import React from "react";

const Header = () => {
    return <div className="mainHeader">
        <div className="container">
            <div className="row headerFirstRow">
                <div className="col-8 hdFirstRowIstCol">
                    <ul className="hdFirstRowIstCollisting">
                        <li>+1 (888) 394-0048</li>
                        <li>+971 58 898 8 462(UAE)</li>
                        <li>+91 961 1981318 (IND)</li>
                        <li>
                            <a href="mailto:info@carmatec.com"><i class="fa fa-envelope"></i>Info@carmatec.com</a>
                        </li>
                    </ul>
                </div>
                <div className="col-4 hdFirstRowSecCol justify-content-end d-flex justify-content-end">
                  <a href="#">Blog</a>
                </div>
            </div>
        </div>
    </div>;
};

export default Header;