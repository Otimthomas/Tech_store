import React from "react";

import Hero from "../Components/Hero";
import Product from "../Components/Product";
import Products from "../Components/ProductsPage/Products";
import productsBcg from "../images/productsBcg.jpeg";

function ProductsPage() {
  return (
    <>
      <Hero img={productsBcg} />
      <Products />
    </>
  );
}

export default ProductsPage;
