import React from "react";
import { Link } from "react-router-dom";

import Product from "../Product";
import Title from "../Title";
import { ProductContext } from "../../Context";

function Featured() {
  const { featuredProducts } = React.useContext(ProductContext);
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Featured products" center />
        {/* Products */}
        <div className="row">
          {featuredProducts.map((item) => {
            return <Product key={item.id} product={item} />;
          })}
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <Link to="/products" className="main-link">
              products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
