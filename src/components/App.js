import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import ItemGrid from "./ItemGrid";
import GlobalStyles from "./GlobalStyles";
import Cart from "./Cart";

const App = () => {
  return (
    <Wrapper>
      <div style={{ display: "flex" }}>
        <div>
          <Header>
            <Logo />
          </Header>
          <ItemGridWrapper>
            <ItemGrid />
          </ItemGridWrapper>
        </div>

        <div style={{ position: "absolute", right: 0, height: "100%" }}>
          <Cart />
        </div>
      </div>
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
`;

export default App;
