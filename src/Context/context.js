import React from "react";

import { linkData } from "./linkData";

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState(1);
  const [links, setLinks] = React.useState(linkData);

  //handle sidebar
  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);

    // log out
    console.log(`The side bar is ${sidebarOpen}`);
  };

  // close sidebar
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  //handle cart
  const handleCart = () => {
    setCartOpen(!cartOpen);
  };

  // close Cart
  const closeCart = () => {
    setCartOpen(false);
  };

  // open Cart
  const openCart = () => {
    setCartOpen(true);
  };

  return (
    <ProductContext.Provider
      value={{
        cartOpen,
        cartItems,
        sidebarOpen,
        links,
        closeSidebar,
        handleSidebar,
        handleCart,
        closeCart,
        openCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
