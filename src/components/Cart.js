import React from 'react';
import styled from 'styled-components/macro';

import CartItem from './CartItem';

const Cart = () => {
    return (
        <Wrapper>
            <Header>
                Your Cart
            </Header>
            <p># item</p>
            <CartItem />
        </Wrapper>

    )
}

const Wrapper = styled.section`
  position: sticky;
  top: 0;
  min-width: 250px;
  height: 100vh;
  background: #301934;
  color: white;
  padding: 35px 25px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h4`
margin: 0;
`

export default Cart;