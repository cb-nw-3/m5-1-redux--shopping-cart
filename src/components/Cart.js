import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import Button from "./Button";
import { getStoreItemArray } from "../reducers";

const Cart = () => {
  const state = useSelector(getStoreItemArray);
  console.log(state);
  return (
    <CartDiv>
      <div>
        <div>Your Cart</div>
        <div>1 Item</div>
      </div>

      {state.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        );
      })}
      <div>
        <Total>Total: $12.34</Total>
        <Button>Purchase</Button>
      </div>
    </CartDiv>
  );
};

const CartDiv = styled.div`
  border: solid blue 1px;
  padding: 20px;
  width: 100%;
`;

const Total = styled.div`
  flex: 1;
`;

export default Cart;
