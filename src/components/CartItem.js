import React from "react";
import styled from "styled-components";

import UnstyledButton from "./UnstyledButton";

const CartItem = ({ title, price, quantity }) => {
  return (
    <Wrapper>
      <Top>
        <ItemName>{title}</ItemName>
        <CloseButton>x</CloseButton>
      </Top>
      <Bottom>
        Quantity:
        <QtyBox>{quantity}</QtyBox>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  border: dashed white 3px;
  color: white;
  margin-bottom: 24px;
`;

const Top = styled.div`
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
`;
const Bottom = styled.div`
  padding: 15px 15px;
  background-color: rgba(0, 0, 0, 0.25);
`;

const ItemName = styled.p`
  font-weight: bold;
`;

const CloseButton = styled(UnstyledButton)``;

const QtyBox = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  padding-top: 2px;
  background-color: white;
  color: black;
  text-align: center;
`;

export default CartItem;
