import React from "react";
import styled from "styled-components";
import Cart from "./Cart.js";
import Logo from "./Logo";
import ItemGrid from "./ItemGrid";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  return (
    <Wrapper>
      <Header>
        <Logo />
      </Header>
      <ItemGridWrapper>
        <CartWrapper>
          <Cart></Cart>
        </CartWrapper>
        <ItemGrid />
      </ItemGridWrapper>

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

const CartWrapper = styled.div`
  grid-area: sidebar;
  float: right;
  width: 20%;
  border-left: 3px dashed #ff406e;
  padding-left: 8px;
`;

export default App;
