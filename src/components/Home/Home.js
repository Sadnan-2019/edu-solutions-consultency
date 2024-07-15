import React from "react";
import Landing from "../Landing/Landing";
import Welcome from "../Welcome/Welcome";
import Services from "../Services/Services";
import Country from "../Country/Country";
import Why from "../Why/Why";
import Review from "../Review/Review";
import Faq from "../Faq/Faq";
import Contact from "../Contact/Contact";
import Inquery from "../Inquery/Inquery";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div>
      <Landing></Landing>
      {/* <Hero></Hero> */}
      <Inquery></Inquery>
      <Welcome></Welcome>
      <Services></Services>
      <Country></Country>
      <Why></Why>
      {/* <Review></Review> */}
      <Faq></Faq>
      <Contact></Contact>
    </div>
  );
};

export default Home;
