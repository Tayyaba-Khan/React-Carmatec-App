import React from "react";

const Footer = () => {
    $(function(){
        $('[data-toggle="tooltip"]').tooltip();
      });
    return <div className="mainFooter">
        <div className="container">
            <div className="row ">
                <div className="col-12 d-flex justify-content-center text-center flex-column">
                    <div className="hoursImg text-center "><img src="./images/24-7_footer-1.png" alt="" className="pt-3" /></div>
                    <div className="row justify-content-center mt-5">
                        <ul className="d-flex justify-content-center mt-5 list-unstyled text-muted">
                            <li className="px-3">+1(888)394-0048 (USA)</li>
                            <li className="px-3">|</li>
                            <li><a href="mailto: info@carmatec.com" className="text-muted px-3 text-decoration-none"> info@carmatec.com</a></li>
                        </ul>
                    </div>
                    <div className="row justify-content-center mt-3 text-muted h4">
                        <ul className="d-flex justify-content-center list-unstyled text-muted font-weight-bold">
                            <li><a href="#" className="text-muted px-3 text-decoration-none"><i class="fa fa-facebook-f "></i></a></li>
                            <li><a href="#" className="text-muted px-3 text-decoration-none"><i class="fa fa-twitter "></i></a></li>
                            <li><a href="#"className="text-muted px-3 text-decoration-none" ><i class="fa fa-linkedin "></i></a></li>
                            <li><a href="#" className="text-muted px-3 text-decoration-none"><i class="fa fa-youtube "></i></a></li>
                        </ul>
                    </div>
                    <div className="row justify-content-center pb-5">
                        <ul className="d-flex justify-content-center mt-4 list-unstyled text-muted font-weight-bold" style={{"fontSize":"13px"}}>
                            <li><a href="#" className="text-muted px-3 text-decoration-none" data-toggle="tooltip"
                            data-placement="top" title="Business Center, Dubai World Central, Dubai Phone: +971 58 898 8462">DUBAI, UAE</a></li>
                            <li><a href="#" className="text-muted px-3 text-decoration-none" data-toggle="tooltip"
                            data-placement="top" title="
                            515 S, Flower Street,
                            36th Floor, Los Angeles,
                            California, 90071
                            Phone : +1 (323) 723-4548
                            ">CALIFORNIA, USA</a></li>
                            <li><a href="#" className="text-muted px-3 text-decoration-none" data-toggle="tooltip"
                            data-placement="top" title="
                            172 5th Ave Suite 49 Brooklyn,
                            New York 11217,
                            United States
                            Phone: +1 (929) 300-0087
                            ">NEW YORK, USA</a></li>
                            <li><a href="#" className="text-muted px-3 text-decoration-none" data-toggle="tooltip"
                            data-placement="top" title="
                            3333 Lee Parkway,
                            Ste 600, Dallas,
                            TX 75219 US
                            Phone: +1 (972) 638-8558">DALLAS, USA</a></li>
                            <li><a href="#" className="text-muted px-3 text-decoration-none" data-toggle="tooltip"
                            data-placement="top" title="
                            Al EZZ Tower, 2nd Floor,
                            Building No. 84, Al Aaliya Street,
                            Doha-Qatar
                            Phone: +974 50302805
                            ">DOHA, QATTAR</a></li>
                            <li><a href="#" className="text-muted px-3 text-decoration-none" data-toggle="tooltip"
                            data-placement="top" title="
                            #27, Ambalipura, Bellandur, Bangalore 560103, India.
                            Phone: +91 961 198 1318">LYON, FRANCE</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Footer;