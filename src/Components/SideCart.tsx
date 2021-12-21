import React from "react";
import styled from "styled-components";

import { ProductContext } from "../Context/context";

type SideCartProps = {
  show: boolean;
};

const SideCart = () => {
  const { cartOpen, closeCart } = React.useContext(ProductContext);
  return (
    <CartWrapper show={cartOpen} onClick={closeCart}>
      Hello from sideCart
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  position: fixed;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  background-color: var(--mainGrey);
  border-left: 4px solid var(--primaryColor);
  transform: ${(props: SideCartProps) =>
    props.show ? "translateX(0)" : "translateX(100%)"};
  transition: var(--mainTransition);

  @media (min-width: 576px) {
    width: 30rem;
  }
`;

export default SideCart;
