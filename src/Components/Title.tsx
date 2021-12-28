import React from "react";

import styled from "styled-components";

type TitleProps = {
  title: string;
  center?: boolean;
};

function Title({ title, center }: TitleProps) {
  return (
    <TitleWrapper className="row" $center={center}>
      <div className="col">
        <h2 className="text-title">{title}</h2>
        <div className="title-underline"></div>
      </div>
    </TitleWrapper>
  );
}

export default Title;

type TitleWrapperProps = {
  $center?: boolean;
};

const TitleWrapper = styled.div<TitleWrapperProps>`
  text-align: ${({ $center }) => ($center ? "center" : "left")};

  h2 {
    text-transform: uppercase;
  }

  .title-underline {
    height: 0.4rem;
    width: 7rem;
    background: var(--primaryColor);
    margin: ${({ $center }) => ($center ? "0 auto" : "0")};
  }
`;
