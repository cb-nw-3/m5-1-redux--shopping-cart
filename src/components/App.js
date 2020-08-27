import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import ItemGrid from './ItemGrid';
import GlobalStyles from './GlobalStyles';
import Cart from './Cart';

const App = () => {
  return (
    <Wrapper>
      <MaincontentWrapper>
        <Header>
          <Logo />
        </Header>
        <ItemGridWrapper>
          <ItemGrid />
        </ItemGridWrapper>
      </MaincontentWrapper>
      <CartWrapper><Cart /></CartWrapper>
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
const MaincontentWrapper = styled.div`
  flex: 3;
`
const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
`;

const CartWrapper = styled.div`
  grid-area: sidebar;
  border-left: 3px dashed #ff406e;
  padding-left: 8px;
  flex: 1;
`;

export default App;
