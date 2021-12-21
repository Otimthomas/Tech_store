import styled from "styled-components";

import mainBcg from "../images/mainBcg.jpeg";

type HeroProps = {
  children?: React.ReactNode;
  img?: string;
  title?: string;
  max?: boolean;
};

function Hero({ children, img, title, max }: HeroProps) {
  return (
    <HeroWrapper
      $max={max}
      className="d-flex justify-content-center align-items-center"
      img={img}
    >
      <h2>{title}</h2>
      {children}
    </HeroWrapper>
  );
}

//
// This is how you declare WrapperProps for styled components ?
//
type HeroWrapperProps = {
  $max?: boolean;
  img?: string;
};

Hero.defaultProps = {
  img: mainBcg,
  $max: false,
};

export default Hero;

const HeroWrapper = styled.div<HeroWrapperProps>`
  display: flex;
  flex-direction: column;

  background-color: lightgray;
  min-height: ${({ $max }) => ($max?.toString() ? "100vh" : "60vh")};
  font-size: 2rem;

  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${({ img }) => img}) no-repeat center/cover;

  h2 {
    font-size: 3.5rem;
    padding-bottom: 1.5rem;
    color: var(--mainWhite);
    text-transform: uppercase;
    letter-spacing: 1.2rem;
    text-shadow: 2px 6px 3px var(--primaryRGBA);
  }
`;
