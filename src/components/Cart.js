import React, { useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
const Cart = () => {
  const [items, setItems] = useState([]);
  return (
    <Wrapper>
      <Title>Your Cart</Title>
      <p>{items.length} Items</p>
      <ItemsWrapper>
        <CartItem />
      </ItemsWrapper>
      <Total>$100</Total>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 350px;
  min-height: 100%;
  margin-left: 16px;
  outline: 2px dashed red;
  outline-offset: 10px;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;
  background-color: #401f43;
  padding-left: 20px;
  color: white;
`;

const Title = styled.h2`
  font-size: 2rem;
`;

const ItemsWrapper = styled.div`
  flex: 1;
  border: 2px solid green;
  width: 95%;
`;

const Total = styled.div``;

export default Cart;
