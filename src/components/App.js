import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import ItemGrid from "./ItemGrid";
import Cart from "./Cart";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <Wrapper>
      <Header>
        <Logo />
      </Header>
      <ItemGridWrapper>
        <ItemGrid />
      </ItemGridWrapper>

      <CartWrapper>
        <Cart />
      </CartWrapper>

      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
`;

const ItemGridWrapper = styled.main`
  flex: 2;
  grid-area: main;
  padding: 16px 64px;
`;

const CartWrapper = styled.div`
  background-color: purple;
  flex: 2;
  grid-area: sidebar;
  border-left: 3px dashed #ff406e;
  padding-left: 8px;
  display: flex;
`;

export default App;
