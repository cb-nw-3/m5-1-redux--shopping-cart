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
  display: grid;

  /* Creates a grid ref of 4 columnns and 2 rows */
  /* other elemnts must contain grid-area name like header, main, sidebar */
  grid-template-areas:
    "header header header sidebar"
    "main main main sidebar";

  /* border: 5px solid blue; */
`;

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
  /* border: 5px dashed red; */
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
  /* border: 5px dashed red; */
`;

const CartWrapper = styled.div`
  grid-area: sidebar;
  border-left: 3px dashed #ff406e;
  padding-left: 8px;
  /* border: 1px dashed green; */
`;

export default App;
