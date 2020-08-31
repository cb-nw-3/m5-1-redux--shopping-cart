import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import ItemGrid from "./ItemGrid";
import Cart from "./Cart";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <GlobalWrapper>
      <Wrapper>
        <Header>
          <Logo />
        </Header>
        <ItemGridWrapper>
          <ItemGrid />
        </ItemGridWrapper>
        <GlobalStyles />
      </Wrapper>
      <Cart />
    </GlobalWrapper>
  );
};

const GlobalWrapper = styled.div`
  display: flex;
  position: relative;
`;
const Wrapper = styled.div`
  position: relative;
  flex: 1;
  margin-right: 350px;
`;

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
`;

const CartWrapper = styled.div`
  grid-area: sidebar;
  border-left: 3px dashed #ff406e;
  padding-left: 8px;
`;

export default App;
