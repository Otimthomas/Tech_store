import React from "react";

import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { ProductContext } from "../Context/context";
import logo from "../images/logo.svg";

const Navbar = () => {
  const { handleCart, handleSidebar, cartItems } =
    React.useContext(ProductContext);
  return (
    <NavWrapper className="bg-light">
      <div className="container">
        <div className="d-flex justify-content-between">
          <FaBars className="icon" onClick={handleSidebar} />
          <img className="logo" src={logo} alt="logo" />
          <div className="cart">
            <FaCartPlus className="icon cart__icon" onClick={handleCart} />
            <p className="cart__number">{cartItems}</p>
          </div>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = styled.div`
  position: sticky;
  top: 0;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid var(--primaryColor);
  z-index: 1000;

  .icon {
    font-size: 2.5rem;
    cursor: pointer;
  }
  .cart {
    position: relative;
    &__icon {
      font-size: 2.5rem;
    }
    &__number {
      color: var(--mainWhite);
      background-color: var(--primaryColor);
      border-radius: 50%;
      padding: 0.1rem 0.5rem;
      font-size: 1.2rem;
      font-weight: bold;
      position: absolute;
      top: -1rem;
      right: -1.5rem;
    }
  }
`;
