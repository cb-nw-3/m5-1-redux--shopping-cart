import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Button from "./Button";

const CartItem = () => {
  return (
    <CartItemDiv>
      <Top>
        <Title>Hello World</Title>
        <Xbutton>X</Xbutton>
      </Top>
      <Bottom>
        <p>Quantity:</p>
        <input value="1" />
      </Bottom>
    </CartItemDiv>
  );
};

const CartItemDiv = styled.div`
  border: solid red 1px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: green solid 1 px;
`;

const Title = styled.p`
  font-size: 22px;
  color: lightgrey;
  margin: 5px;
`;

const Xbutton = styled.button`
  padding: 10px;
  background: transparent;
  border: none;
  margin-right: 1px;
`;

const Bottom = styled.div`
  display: flex;
`;

export default CartItem;
