import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Departments from "../Departments/Departments";
import Responsive from "../Doctors/Doctors";

import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="">
      {/* home banner */}
      <Banner />

      {/* Departments */}
      <Departments />

      {/* Testimonial */}
      <Testimonial />

      {/* doctors */}
      <Responsive />
      {/* contact form */}
      <Contact />
    </div>
  );
};

export default Home;
