import React from "react";
import styled from "styled-components";

import Title from "../Title";

function Contact() {
  return (
    <ContactWrapper className="py-5">
      <div className="row">
        <div className="col-6 mx-auto col-md-6 my-3">
          <Title title="Contact" />
          <form
            action="https://formspree.io/f/totim1992@gmail.com"
            className="mt-5"
          >
            {/* First */}
            <div className="form-group mb-4">
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder="thomas"
              />
            </div>

            {/* Email */}
            <div className="form-group mb-4">
              <input
                type="email"
                className="form-control"
                name="Email"
                placeholder="eg. email@email.com"
              />
            </div>

            {/* Subject */}
            <div className="form-group mb-4">
              <input
                type="subject"
                className="form-control"
                name="subject"
                placeholder="SUBJECT"
              />
            </div>

            {/* Text Area */}
            <div className="form-group mb-4">
              <textarea
                className="form-control"
                name="textarea"
                rows={10}
                placeholder="Hello there!!!"
              />
            </div>

            {/* Submit */}
            <div className="form-group">
              <input
                type="submit"
                value="send"
                className="form-control bg-primary text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.section`
  input,
  textarea {
    font-size: 1.6rem;
  }
`;

export default Contact;
