import React from "react";
import styled from "styled-components";
import Button from "./Button";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <Wrapper>
      <div>
        <CartTitle>Your Cart</CartTitle>
        <ItemCounter>1 item</ItemCounter>
        <CartItem></CartItem>
      </div>
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
  justify-content: space-between;
  padding: 20px 10px;
  position: sticky;
  top: 0;
  min-height: 100vh;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
`;

const StyledButton = styled(Button)`
  width: 100px;
`;
const Total = styled.div`
  font-size: 1.3em;
`;
