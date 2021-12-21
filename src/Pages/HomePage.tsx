import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

import Hero from "../Components/Hero";

function HomePage() {
  return (
    <HomeWrapper>
      <Hero max={true} title="awesome gadgets">
        <Link to="/products" className="text-uppercase main-link">
          Our Products
        </Link>
      </Hero>
    </HomeWrapper>
  );
}

export default HomePage;

const HomeWrapper = styled.div`
  background: url();

 
  }
`;
