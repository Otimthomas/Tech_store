import React from "react";

import styled from "styled-components";

function HomePage() {
  return (
    <HomeWrapper>
      <h1>Hello from the Home page</h1>
    </HomeWrapper>
  );
}

export default HomePage;

const HomeWrapper = styled.div`
  height: 1000px;
`;
