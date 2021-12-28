import React from "react";

import Title from "../Title";
import { ProductContext } from "../../Context";
import Product from "../Product";

function Products() {
  const { filteredProducts } = React.useContext(ProductContext);
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our products" center />
        <div className="row py-5">
          {filteredProducts.map((product) => {
            return <Product product={product} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
