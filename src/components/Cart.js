import React from "react";
import styled from "styled-components";
import Button from "./Button";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <Wrapper>
      <CartTitle>Your Cart</CartTitle>
      <ItemCounter>1 item</ItemCounter>
      <CartItem></CartItem>
      <TotalAndButton>
        <Total>
          Total:<strong> $12.34</strong>
        </Total>
        <StyledButton>Purchase</StyledButton>
      </TotalAndButton>
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.div`
  color: white;
  background: purple;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  position: sticky;
  top: 0;
  height: 100vh;
`;

const CartTitle = styled.h2`
  margin: 0;
  margin-left: 10px;
`;

const ItemCounter = styled.p`
  color: lightgrey;
  margin-top: 5px;
  margin-left: 10px;
`;

const TotalAndButton = styled.div`
  position: absolute;
  bottom: 30px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
`;

const StyledButton = styled(Button)`
  max-width: 40%;
`;
const Total = styled.div`
  font-size: 1.3em;
`;
