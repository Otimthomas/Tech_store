import React from "react";

import Hero from "../Components/Hero";
import AboutBcg from "../images/aboutBcg.jpeg";
import Info from "../Components/AboutPage/Info";

function AboutPage() {
  return (
    // children, img, title, max
    <>
      <Hero img={AboutBcg} title="About us" />
      <Info />
    </>
  );
}

export default AboutPage;
