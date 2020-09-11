import React from "react";
import styled from "styled-components";
import { STORE_ITEMS } from "../data";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";
import Button from "./Button";
//We can then import that selector into our `Cart` component, and use it to get an array of store items:
const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  //in the `Cart` component you created, we need to _select_ that state and do something with it.
  //`useSelector` selects a slice of the Redux state.

  return (
    <Wrapper>
      <Title>Your Cart</Title>
      {storeItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <Button>Purchase </Button>
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.div`
  margin: 0;
  background-color: purple;
`;
const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  margin-top: 8px;
  font-size: 22px;
  font-weight: 600;
`;
