import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

import Hero from "../Components/Hero";

function HomePage() {
  return (
    <HomeWrapper>
      <Hero max title="awesome gadgets">
        <Link to="/products" className="text-uppercase">
          Our Products
        </Link>
      </Hero>
    </HomeWrapper>
  );
}

export default HomePage;

const HomeWrapper = styled.div`
  background: url();

  a {
    color: var(--primaryColor);
    text-decoration: none;
    border: none;
    padding: 1rem 2rem;
    transition: all 0.3s;
    outline: 3px solid var(--primaryColor);
    outline-offset: 4px;
    background-color: var(--primaryColor);
    color: var(--mainWhite);
    letter-spacing: var(--mainSpacing);

    &:hover {
      color: var(--primaryColor);
      background-color: var(--darkGrey);
      outline: 3px solid var(--darkGrey);
    }
  }
`;
