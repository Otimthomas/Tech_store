import { maxHeaderSize } from "http";
import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";

import DefaultBcg from "../images/defaultBcg.jpeg";

function Default() {
  return (
    <>
      <Hero max={true} title="404" img={DefaultBcg}>
        <h2 className="text-uppercase">Page not found</h2>
        <Link to="/" className="text-uppercase main-link">
          Return to home page
        </Link>
      </Hero>
    </>
  );
}

export default Default;
