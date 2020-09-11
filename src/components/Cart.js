import React from "react";
import styled from "styled-components";
import Button from "./Button";
import CartItem from "./CartItem";
import { STORE_ITEMS } from "../data";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";

// 1 a span where you indicate number of items (data.length)
// 2 map over each item to render a CartItem component
// 3 cart item componentshould receive soe props: name and quantity
// 4 show the total price, hard code the value
// 5 make a puchase button
const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  return (
    <>
      <Wrapper>
        <h2>your Cart</h2>
        <span>${}items</span>
        <h4>HELLO WORLD</h4>
        {storeItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <Button>Purchase </Button>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: purple;
  border-radius: 8px;
  margin: 0;
  color: white;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  margin-top: 8px;
  font-size: 22px;
  font-weight: 600;
`;

export default Cart;
