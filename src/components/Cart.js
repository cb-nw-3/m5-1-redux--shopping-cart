import React from "react";
import styled from "styled-components";

import CartItem from './CartItem'

const Cart = () => {
  return (
    <Wrapper>
      <CartHeading>
        <CartHeading>Your Cart</CartHeading>
        <CartDescription>X Item</CartDescription>
      </CartHeading>
      <CartItemWrapper><CartItem /></CartItemWrapper>
      <CartFooter>
        <CartPrice>Total: $00.00</CartPrice>
        <CartButton>Purchase</CartButton>
      </CartFooter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
  background: purple;
  height: 100vh;
  position: fixed;
  padding: 20px;
`;
const CartHeading = styled.h2`
  color: white;
  margin: 0;
  flex: 2;
`;
const CartDescription = styled.p`
  color: #eee;
`
const CartPrice = styled.p`
  color: white;
  height: 20px;
  margin: 15px;
`
const CartButton = styled.button`
  width: 150px;
  background-color: pink;
  color: white;
  border-radius: 10px;
  border: none;
  height: 50px;
`
const CartFooter = styled.div`
flex: 1;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  align-items: flex-start;
`
const CartItemWrapper = styled.div`
  flex: 9;
`

export default Cart;
