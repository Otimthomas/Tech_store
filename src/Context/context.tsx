import React from "react";
import { useStateWithCallbackLazy } from "use-state-with-callback";

import { linkData, LinkDataProps } from "./linkData";
import { socialData, SocialDataProps } from "./socialData";
import { ServicesData, ServicesDataProps } from "./services";
import { items, ItemsProps } from "./productData";

export type StoreProductsProps = {
  id: number;
  title: string;
  price: number;
  company: string;
  description: string;
  featured: boolean;
  image: string;
}[];

type StoreProductProps = {
  id: number;
  title: string;
  price: number;
  company: string;
  description: string;
  featured: boolean;
  image: string;
  count: number;
  total: number;
};

type ProductContextProps = {
  sidebarOpen: boolean;
  handleCart: () => void;
  handleSidebar: () => void;
  cartItems: number;
  links: LinkDataProps;
  socialLinks: SocialDataProps;
  closeSidebar: () => void;
  cartOpen: boolean;
  closeCart: () => void;
  services: ServicesDataProps;
  addToCart: (id: number) => void;
  featuredProducts: StoreProductsProps;
  cart: {}[];
  storeProducts: StoreProductsProps;
  loading: boolean;
  singleProduct: {};
  singleProductSet: (id: number) => void;
  filteredProducts: StoreProductsProps;
};

const ProductContextDefault: ProductContextProps = {
  sidebarOpen: false,
  handleCart: () => {},
  handleSidebar: () => {},
  cartItems: 1,
  links: linkData,
  socialLinks: socialData,
  closeSidebar: () => {},
  cartOpen: false,
  closeCart: () => {},
  services: ServicesData,
  addToCart: () => {},
  featuredProducts: [],
  cart: [],
  storeProducts: [],
  loading: false,
  singleProduct: {},
  singleProductSet: () => {},
  filteredProducts: [],
};

const ProductContext = React.createContext(ProductContextDefault);

type ProductProviderProps = {
  children: React.ReactNode;
};

const ProductProvider = ({ children }: ProductProviderProps) => {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);
  const [cartOpen, setCartOpen] = React.useState<boolean>(false);
  const [cartItems, setCartItems] = React.useState<number>(1);
  const [links, setLinks] = React.useState(linkData);
  const [socialLinks, setSocialLinks] = React.useState(socialData);
  const [services, setServices] = React.useState(ServicesData);
  const [cart, setCart] = useStateWithCallbackLazy<StoreProductsProps>([]);
  const [cartSubTotal, setCartSubTotal] = React.useState<number>(0);
  const [cartTax, setCartTax] = React.useState<number>(0);
  const [cartTotal, setCartTotal] = React.useState<number>(0);
  const [storeProducts, setStoreProducts] = React.useState<StoreProductsProps>(
    []
  );
  const [filteredProducts, setFilteredProducts] =
    React.useState<StoreProductsProps>([]);
  const [featuredProducts, setFeaturedProducts] =
    React.useState<StoreProductsProps>([]);
  const [singleProduct, setSingleProduct] = React.useState({});
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setProducts(items);
    // console.log(items);
  }, []);

  //setProducts
  const setProducts = (products: ItemsProps) => {
    let storeProducts = products.map((item) => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });
    let featuredProducts = storeProducts.filter(
      (item) => item.featured === true
    );

    setStoreProducts(storeProducts);
    setFeaturedProducts(featuredProducts);
    setFilteredProducts(storeProducts);
    setLoading(false);
    // setCart(getStorageCart());
    setSingleProduct(getStorageProduct());
  };

  // get cart from local storage
  const getStorageCart = () => {
    return [];
  };

  // get single product from local storage
  const getStorageProduct = () => {
    return {};
  };

  // get totals
  const getTotal = () => {
    let subtotal = 0;
    let cartItems = 0;
  };

  // addTotals
  const addTotals = () => {};

  // sync storage
  const syncStorage = () => {};

  // add to cart
  const addToCart = (id: number) => {
    let tempCart = [...cart];
    let tempProducts = [...storeProducts];
    let tempItem = tempCart.find((item) => item.id === id) as StoreProductProps;

    if (!tempItem) {
      tempItem = tempProducts.find(
        (item) => item.id === id
      ) as StoreProductProps;
      let total = tempItem?.price;
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }
    setCart(tempCart, () => {
      addTotals();
      syncStorage();
      openCart();
      console.log("the call back run");
    });
    console.log("the function finished");
  };

  // set single product
  const singleProductSet = (id: number) => {
    console.log(`set single product ${id}`);
  };

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
    console.log("open cart");
  };

  return (
    <ProductContext.Provider
      value={{
        sidebarOpen,
        cartItems,
        links,
        socialLinks,
        services,
        cartOpen,
        cart,
        storeProducts,
        featuredProducts,
        loading,
        singleProduct,
        filteredProducts,
        handleCart,
        handleSidebar,
        closeSidebar,
        closeCart,
        addToCart,
        singleProductSet,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
