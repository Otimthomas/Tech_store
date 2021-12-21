import React from "react";

import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              alt="about company"
              className="img-fluid img-thumbnail"
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3 fs-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              odio officiis iste quidem corporis temporibus aliquid sint,
              inventore aperiam atque nesciunt eveniet tenetur quos earum.
            </p>
            <p className="text-lead text-muted my-3 fs-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              odio officiis iste quidem corporis temporibus aliquid sint,
              inventore aperiam atque nesciunt eveniet tenetur quos earum.
            </p>
            <button className="main-link mt-4" type="button">
              more...
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
