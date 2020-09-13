import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import Button from "./Button";

const Cart = () => {
  return (
    <CartDiv>
      <div>
        <div>Your Cart</div>
        <div>1 Item</div>
      </div>
      <CartItem />
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
