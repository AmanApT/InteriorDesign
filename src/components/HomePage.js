import React from "react";
import NavBar from "./NavBar";
import UserInfo from "./UserInfo";
import Samples from "./Samples";
import ServicesOffered from "./ServicesOffered";
import Features from "./Features";
import Testimonials from "./Testimonials";
import AboutUs from "./AboutUs";

const HomePage = () => {
  return (
    <div className="homePage">
      
      <NavBar />
      <div className="homeText"> 
       Bring home beautiful interiors that <span style={{color:'rgb(254, 204, 42)'}}> fit your budget.</span>
      </div>
      <UserInfo />
      <Samples />
      <ServicesOffered />
      <Features />
      <Testimonials />
      <AboutUs />
    </div>
  );
};
export default HomePage;