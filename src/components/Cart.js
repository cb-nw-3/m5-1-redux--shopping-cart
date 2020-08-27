import React from "react";
import styled from "styled-components";

import CartItem from "./CartItem";

import { getStoreItemArray } from "../reducers";
import { useSelector } from "react-redux";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  console.log(storeItems);

  return (
    <SidebarContainer>
      <CartContainer>
        <Title>Your Cart</Title>
        <Counter>{storeItems.length} Item(s)</Counter>
        {storeItems.map((item) => (
          <CartItem key={item.id} quantity={item.quantity} title={item.title} />
        ))}
      </CartContainer>
      <CheckoutContainer>
        <Total>
          Total:
          <strong> $12.34</strong>
        </Total>
        <PurchaseButton>Purchase</PurchaseButton>
      </CheckoutContainer>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.section`
  position: sticky;
  top: 0px;
  min-width: 300px;
  height: 100vh;
  color: white;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(64, 31, 67);
`;

const CartHeader = styled.div``;

const Counter = styled.p`
  opacity: 0.75;
  margin: 0;
  margin-block-start: 1em;
`;

const CartContainer = styled.div`
  padding: 0 16px;
  max-height: calc(100vh-240px);
  /* border: 5px solid red; */
  overflow: auto;
`;

const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px 64px 32px;
`;

const Total = styled.div`
  font-size: 22px;
`;

const PurchaseButton = styled.button`
  display: block;
  width: 200px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 15px;
  background: rgb(255, 64, 110);
  border-style: none;
  padding: 8px;
  outline: none;

  &:active {
    transform: scale(1.1);
  }

  &:hover {
    background: rgba(255, 64, 110, 0.85);
  }
`;

const Title = styled.h1`
  margin: 0;
  font-family: "Lato";
  font-size: 24px;
  font-weight: bold;
  margin-block-start: 0.83em;
`;

export default Cart;
