import styled from "styled-components";

import mainBcg from "../images/mainBcg.jpeg";

type HeroProps = {
  children: React.ReactNode;
  img?: string;
  title?: string;
  max: boolean;
};

function Hero(props: HeroProps) {
  return (
    <HeroWrapper
      max={props.max}
      className="d-flex justify-content-center align-items-center"
      img={props.img}
    >
      <h2>{props.title}</h2>
      {props.children}
    </HeroWrapper>
  );
}

//
// This is how you declare WrapperProps for styled components ?
//
type HeroWrapperProps = {
  max?: boolean;
  img?: string;
};

export default Hero;

const HeroWrapper = styled.div<HeroWrapperProps>`
  display: flex;
  flex-direction: column;

  background-color: lightgray;
  min-height: ${(props: HeroWrapperProps) => (props.max ? "100vh" : "60vh")};
  font-size: 2rem;

  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${(props) => props.img}) no-repeat center/cover;

  h2 {
    font-size: 3.5rem;
    padding-bottom: 1.5rem;
    color: var(--mainWhite);
    text-transform: uppercase;
    letter-spacing: 1.2rem;
    text-shadow: 2px 6px 3px var(--primaryRGBA);
  }
`;

Hero.defaultProps = {
  img: mainBcg,
};
