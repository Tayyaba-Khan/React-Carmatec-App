import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return <div className="mainNav">
        <div className="container">
            <div className="row navFirstRow">
                <div className="col-12 navFirstRowSeccol">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand navFirstRowImg" href="#"><img src="./images/img-1.png" alt="Not Found"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto navulTopping">
                            <li className="nav-item dropdown navFirstRowitems">
                                <a className="nav-link dropdown-toggle font-weight-bold" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About Us
                                </a>
                                <div className="dropdown-menu navdropTopping" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#"><Link to="company-page" className="text-decoration-none"><i class="fa fa-building mr-1 naviconics" aria-hidden="true"></i> <span className="navicondata" style={{"color":"#000"}}>company</span></Link></a>
                                <a className="dropdown-item" href="#"><i class="fa fa-bullseye mr-1 naviconics" aria-hidden="true"></i> <span className="navicondata">Mission, Vission & Values</span></a>
                                <a className="dropdown-item" href="#"><i class="fa fa-handshake-o mr-1 naviconics" aria-hidden="true"></i> <span className="navicondata">Clients</span></a>
                                <a className="dropdown-item" href="#"><i class="fa fa-users mr-1 naviconics" aria-hidden="true"></i> <span className="navicondata">Our Team</span></a>
                                <a className="dropdown-item" href="#"><i class="fa fa-trophy mr-1 naviconics" aria-hidden="true"></i> <span className="navicondata">Careers</span></a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle font-weight-bold" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Smart web
                                </a>
                                <div className="dropdown-menu navdropTopping" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#"><i class="fa fa-paint-brush mr-2 naviconics" aria-hidden="true"></i><span className="navicondata">Web Design Services</span></a>
                                <a className="dropdown-item" href="#"><i class="fa fa-bullhorn mr-2 naviconics" aria-hidden="true"></i><span className="navicondata">Internet Marketing Services</span></a>
                                <a className="dropdown-item" href="#"><i class="fa fa-search-plus mr-2 naviconics" aria-hidden="true"></i><span className="navicondata">SEO</span></a>
                                <a className="dropdown-item" href="#"><i class="fa fa-futbol-o mr-2 naviconics" aria-hidden="true"></i><span className="navicondata">Marketing Automation</span></a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle font-weight-bold" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Web & Mobile
                                </a>
                                <div className="dropdown-menu navdropTopping" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#"><i class="fa fa-code mr-3 naviconics" aria-hidden="true"></i><span className="navicondata">Web Apps</span></a>
                                <a className="dropdown-item" href="#"><i class="fa fa-mobile mr-3 naviconics" aria-hidden="true"></i><span className="navicondata">Mobile Apps</span></a>
                                <a className="dropdown-item" href="#"><i class="fa fa-shopping-cart mr-2 naviconics" aria-hidden="true"></i><span className="navicondata">E-commerce</span></a>
                                <a className="dropdown-item" href="#"><i class="fa fa-user-o mr-2 naviconics" aria-hidden="true"></i><span className="navicondata">Hire A Developer</span></a>
                                <a className="dropdown-item" href="#"><img className="mr-2 naviconics" src="https://www.carmatec.com/wp-content/uploads/2017/02/php_icon.png" alt="php_icon"/><span className="navicondata">PHP Dev services</span></a>
                                <a className="dropdown-item" href="#"><img className="mr-2 naviconics"  src="https://www.carmatec.com/wp-content/uploads/2017/02/ror_icon.png" alt="ror_icon"/><span className="navicondata">ROR Dev services</span></a>
                                <a className="dropdown-item" href="#"><img className="mr-2 naviconics" src="https://www.carmatec.com/wp-content/uploads/2017/06/internet-of-things.png" alt="application-development"/><span className="navicondata">IoT Developmenet</span></a>
                                <a className="dropdown-item" href="#"><img className="mr-2 naviconics" src="https://www.carmatec.com/wp-content/uploads/2018/10/react-jsicon.png"/><span className="navicondata">React JS</span></a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle font-weight-bold" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Cloud IT
                                </a>
                                <div className="dropdown-menu navdropTopping" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#"><i class="fa fa-users mr-2 naviconics" aria-hidden="true"></i><span className="navicondata">Managed IT Services [24*7]</span></a>
                                <a className="dropdown-item" href="#"><i class="fa fa-cloud-upload mr-2 naviconics" aria-hidden="true"></i><span className="navicondata">Cloud Consulting</span></a>
                                <a className="dropdown-item" href="#"><i class="fa fa-cloud-download mr-2 naviconics" aria-hidden="true"></i><span className="navicondata">Cloud Solutions</span></a>
                                <a className="dropdown-item" href="#"><img className="mr-2 naviconics" src="https://www.carmatec.com/wp-content/uploads/2017/02/aws_icon.png" alt="aws_icon"/><span className="navicondata">AWS Managed Services</span></a>
                                <a className="dropdown-item" href="#"><i class="fa fa-cog mr-2 naviconics" aria-hidden="true"></i><span className="navicondata">DevOps Services</span></a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle font-weight-bold" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Biz Solutions
                                </a>
                                <div className="dropdown-menu navdropTopping" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#"><i class="fa fa-rocket mr-2 naviconics" aria-hidden="true"></i><span className="navicondata">Startups</span></a>
                                <a className="dropdown-item" href="#"><i class="fa fa-cogs mr-2 naviconics" aria-hidden="true"></i><span className="navicondata">Enterprise Application Integration</span></a>
                                <a className="dropdown-item" href="#"><i class="fa fa-handshake-o mr-2 naviconics" aria-hidden="true"></i><span className="navicondata">CRM Solutions</span></a>
                                <a className="dropdown-item" href="#"><i class="fa fa-cloud mr-2 naviconics" aria-hidden="true"></i><span className="navicondata">Enterprise Cloud Solutions</span></a>
                                <a className="dropdown-item" href="#"><i class="fa fa-line-chart mr-2 naviconics" aria-hidden="true"></i><span className="navicondata">Enterprise DashBoard Development</span></a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle font-weight-bold" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Our Work
                                </a>
                                <div className="dropdown-menu navdropTopping" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#"><i class="fa fa-suitcase mr-2 naviconics" aria-hidden="true"></i><span className="navicondata">Portfolio</span></a>
                                <a className="dropdown-item" href="#"><i class="fa fa-files-o mr-2 naviconics" aria-hidden="true"></i><span className="navicondata">Case Study</span></a>
                                <a className="dropdown-item" href="#"><span className="navicondata">Tools</span></a>
                                <a className="dropdown-item" href="#"><span className="navicondata">Products</span></a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <button className="btn navFirstBtn">Contact Us</button>
                            </li>
                        </ul>
                    </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>;
};

export default Nav;