import React from "react";

import styled from "styled-components";
import { ProductContext } from "../Context";

function Footer() {
  const { socialLinks } = React.useContext(ProductContext);
  console.log(socialLinks);
  return (
    <FooterWrapper>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <p className="fs-4 fw-bold">
              Copyright &copy; TechStore {new Date().getFullYear()}. All right
              reserved
            </p>
          </div>
          <div className="col-md-6">
            <div className="icons d-flex justify-content-around mt-3">
              {socialLinks.map((link) => {
                return (
                  <a href={link.url} target="_blank">
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  background-color: var(--darkGrey);
  color: var(--mainWhite);
  text-align: center;

  a {
    color: var(--mainWhite);
  }

  .icon {
    font-size: 2.5rem;
    cursor: pointer;
    transition: var(--mainTransition);

    &:hover {
      color: var(--primaryColor);
    }
  }
`;

export default Footer;
