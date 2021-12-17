import React from "react";

import { linkData } from "./linkData";

type ProductContextProps = {
  sidebarOpen: boolean;
  handleCart: () => void;
  handleSidebar: () => void;
  cartItems: number;
  links: {
    id: number;
    text: string;
    path: string;
  }[];
  closeSidebar: () => void;
  cartOpen: boolean;
  closeCart: () => void;
};

const ProductContextDefault: ProductContextProps = {
  sidebarOpen: false,
  handleCart: () => {},
  handleSidebar: () => {},
  cartItems: 1,
  links: [],
  closeSidebar: () => {},
  cartOpen: false,
  closeCart: () => {},
};

const ProductContext = React.createContext(ProductContextDefault);

type ProductProviderProps = {
  children: React.ReactNode;
};

const ProductProvider = ({ children }: ProductProviderProps) => {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);
  const [cartOpen, setCartOpen] = React.useState<boolean>(false);
  const [cartItems, setCartItems] = React.useState<number>(1);
  const [links, setLinks] = React.useState<
    | {
        id: number;
        text: string;
        path: string;
      }[]
  >(linkData);

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
        sidebarOpen,
        handleCart,
        handleSidebar,
        cartItems,
        links,
        closeSidebar,
        cartOpen,
        closeCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
