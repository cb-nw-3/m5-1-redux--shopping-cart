import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import ItemGrid from "./ItemGrid";
import GlobalStyles from "./GlobalStyles";
import CartSideBar from "./CartSideBar";

const App = () => {
  return (
    <Wrapper>
      <ItemGridAndCart>
        <ItemGridWrapper>
          <Header>
            <Logo />
          </Header>
          <ItemGrid />
        </ItemGridWrapper>
        <CartSideBar />
      </ItemGridAndCart>
      <GlobalStyles />
    </Wrapper>
  );
};

const ItemGridAndCart = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;

const Header = styled.header`
  grid-area: header;
  padding: 32px 0px;
  margin-top: -16px;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
  flex: 2;
  height: 100vh;
  overflow-y: scroll;
`;

const CartWrapper = styled.div`
  grid-area: sidebar;
  border-left: 3px dashed #ff406e;
  padding-left: 8px;
`;

export default App;
