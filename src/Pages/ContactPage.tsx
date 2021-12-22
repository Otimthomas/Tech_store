import React from "react";

import Hero from "../Components/Hero";
import Contact from "../Components/ContactPage/Contact";

import contactBcg from "../images/contactBcg.jpeg";

function ContactPage() {
  return (
    <div>
      <Hero img={contactBcg} />
      <Contact />
    </div>
  );
}

export default ContactPage;
