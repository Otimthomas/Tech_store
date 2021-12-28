import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { ProductContext } from "../Context";

type SidebarProps = {
  show: boolean;
};

const Sidebar = () => {
  const { links, sidebarOpen, closeSidebar } = React.useContext(ProductContext);
  return (
    <SideWrapper show={sidebarOpen} onClick={closeSidebar}>
      <ul>
        {links.map((link) => {
          return (
            <li className="list__item" key={link.id}>
              <NavLink className="list__link" to={link.path}>
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </SideWrapper>
  );
};

const SideWrapper = styled.div`
  position: fixed;
  left: 0;
  background-color: var(--mainGrey);
  width: 100%;
  height: 100%;
  border-right: 4px solid var(--primaryColor);
  transform: ${(props: SidebarProps) =>
    props.show ? "translate(0)" : "translateX(-100%)"};
  transition: var(--mainTransition);
  z-index: 999;

  ul {
    list-style: none;
    padding-left: 0;
  }

  .list__link {
    text-decoration: none;
    padding: 2rem;
    display: inline-block;
    width: 100%;
    color: var(--mainBlack);
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: 500;
    transition: all 0.3s;

    &:hover {
      color: #fff;
      background-color: var(--primaryColor);
      padding: 2rem 3rem;
    }
  }

  @media (min-width: 576px) {
    width: 30rem;
  }
`;

export default Sidebar;
