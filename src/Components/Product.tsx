import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { ProductContext } from "../Context";

type ProductProps = {
  product: {
    id: number;
    title: string;
    price: number;
    company: string;
    description: string;
    featured: boolean;
    image: string;
  };
};

function Product({ product }: ProductProps) {
  const { addToCart, singleProductSet } = React.useContext(ProductContext);
  return (
    <ProductWrapper className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3">
      <div className="card">
        <div className="img-container">
          <img
            src={product.image}
            className="card-img-top p-5"
            alt="product"
            style={{ height: "320px" }}
          />
          <div className="product-icons">
            <Link
              to={`/products/${product.id}`}
              onClick={() => singleProductSet(product.id)}
            >
              <FaSearch className="icon" />
            </Link>
            <FaCartPlus
              className="icon"
              onClick={() => addToCart(product.id)}
            />
          </div>
        </div>
        <div className="card-body d-flex justify-content-between">
          <p className="mb-0 text-uppercase fs-4 fw-bold">{product.title}</p>
          <p className="mb-0 text-main fw-bold">{product.price}</p>
        </div>
      </div>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  .card {
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    height: 100%;
    cursor: pointer;

    &:hover {
      box-shadow: 7px 10px 5px 0 rgba(0, 0, 0, 0.5);
    }
  }
  .card-img-top {
    transition: var(--mainTransition);
  }
  .card:hover .card-img-top {
    transform: scale(1.15);
    opacity: 0.2;
  }

  .img-container {
    position: relative;
  }

  .product-icons {
    transition: var(--mainTransition);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  .icon {
    font-size: 3rem;
    color: var(--primaryColor);
    background-color: var(--mainBlack);
    margin: 1.2rem;
    padding: 0.8rem;
    border-radius: 0.5rem;
  }

  .card:hover .product-icons {
    opacity: 1;
  }

  .card-body {
    letter-spacing: 2px;
  }
`;

export default Product;
