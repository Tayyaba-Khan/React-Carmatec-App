import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Stickyfooter from "./StickyFooter/stickyFooter";
// import Company from "./About/company";

class App extends Component {
  render() {
    return <div className="app">
      <Header/>
       <Nav/>
      <Route path="/" exact component={Home}></Route>
      <Route path="/company-page" component={Company}></Route>
      <Footer/>
      <Stickyfooter/>
      {/* <Company/> */}
    </div>;
  }
}
export default App;
