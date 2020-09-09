import React from "react";
import styled from "styled-components";
import { STORE_ITEMS } from "../data";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";
//We can then import that selector into our `Cart` component, and use it to get an array of store items:
const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  //in the `Cart` component you created, we need to _select_ that state and do something with it.
  //`useSelector` selects a slice of the Redux state.
  //WHAT SLICE??In this first example we're selecting _all_ of the state.

  return (
    <Wrapper>
      <Title>Your Cart</Title>
      <h5>`${}item`</h5>
      <h5>Hello World</h5>
      {STORE_ITEMS.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
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
