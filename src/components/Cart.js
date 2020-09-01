import React, { useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import Buttom from "./Button";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers/cart";
import Close from "./Close";
import ProvinceSelect from "./ProvinceSelect";

const Cart = () => {
  const { state } = useSelector((state) => state);
  const { taxReducer } = useSelector((state) => state);
  const storeItems = useSelector(getStoreItemArray);
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(storeItems.reduce(reducer, 0) / 100);

  const formattedTax = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(((storeItems.reduce(reducer, 0) / 100) * taxReducer) / 100);
  return (
    <Wrapper>
      <Title>Your Cart</Title>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "3rem",
          padding: "0 15px",
        }}
      >
        <p>{storeItems.length} Items</p>
        <Close />
      </div>
      <ProvinceSelect />
      {Object.keys(state).length !== 0 && (
        <ItemsWrapper>
          {storeItems.map((element, index) => {
            return (
              <CartItem key={index} title={element.title} id={element.id} />
            );
          })}
        </ItemsWrapper>
      )}
      <Subtotal>{formattedTax}</Subtotal>
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
  max-height: 450px;
  overflow-y: auto;
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

const Subtotal = styled.div`
  font-size: 1.2rem;
  width: 260px;
  padding: 50px 0;
  &::before {
    color: gray;
    content: "Tax: ";
  }
`;

export default Cart;
