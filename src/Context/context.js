import React from "react";

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState(0);

  //handle sidebar
  const handleSidebar = () => {
    setSidebarOpen(!sidebarOpen);

    // log out
    console.log(`The side bar is ${sidebarOpen}`);
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
