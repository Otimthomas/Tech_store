import React from "react";
import styled from "styled-components";

import { ProductContext } from "../../Context";

function Services() {
  const { services } = React.useContext(ProductContext);
  console.log(services);
  return (
    <ServicesWrapper className="py-5">
      <div className="container">
        <div className="row">
          {services.map((service) => {
            return (
              <div
                className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3"
                key={service.id}
              >
                <div> {service.icon}</div>
                <div className="mt-3 fs-4 text-uppercase fw-bold">
                  {service.title}
                </div>
                <div className="mt-3 fs-4">{service.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </ServicesWrapper>
  );
}

const ServicesWrapper = styled.div`
  background: rgba(95, 183, 234, 0.5);
  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
`;

export default Services;
