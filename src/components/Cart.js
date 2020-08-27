import React, { useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import Buttom from "./Button";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";
const Cart = () => {
  const state = useSelector((state) => state);

  const storeItems = useSelector(getStoreItemArray);
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(storeItems.reduce(reducer, 0) / 100);
  return (
    <Wrapper>
      <Title>Your Cart</Title>
      <p>{storeItems.length} Items</p>
      <ItemsWrapper>
        {storeItems.map((element, index) => (
          <CartItem
            key={index}
            title={element.title}
            quantity={element.quantity}
            id={element.id}
          />
        ))}
      </ItemsWrapper>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 15px",
        }}
      >
        <Total>{formattedPrice}</Total>
        <Buttom type="submit">Purchanse</Buttom>
      </div>
    </Wrapper>
  );
};

const reducer = (accumulator, currentValue) =>
  accumulator + currentValue.quantity * currentValue.price;

const Wrapper = styled.form`
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
  width: 95%;
`;

const Total = styled.div`
  font-size: 1.2rem;
  width: 260px;
  padding: 50px 0;
  &::before {
    color: gray;
    content: "Total: ";
  }
`;

export default Cart;
