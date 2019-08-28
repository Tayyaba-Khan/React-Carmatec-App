import React from "react";
import Sliding from "../slide/slide";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Help from "../Help/Help";
import Blog from "../Blog/Blog";
import Views from "../Views/Views";
import Clients from "../Client/Client";
import Review from "../Reviews/Reviews";
import Search from "../Search/Search";
import Quote from "../Quote/Quote";

const Home = () => {
    return <div>
       <Sliding/>
       <About/>
       <Projects/>
       <Help/>
       <Blog/>
       <Views/>
       <Clients/>
       <Review/>
       <Search/>
       <Quote/>
    </div>;
};

export default Home;