import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import Button from "./Button";

const Cart = () => {
  return (
    <Wrapper>
      <Header>
        Your Cart
        <TotalItem>1 Item</TotalItem>
      </Header>
      <CartItem />
      <ItemTotal>
        <Total>
          Total:<strong> $12.34</strong>
        </Total>
        <StyledButton>Purchase</StyledButton>
      </ItemTotal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.h2`
  font-size: 28px;
`;

const TotalItem = styled.div`
  color: lightgrey;
  font-size: 20px;
`;

const ItemTotal = styled.div`
  bottom: 30px;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 10px;
`;

const StyledButton = styled(Button)`
  width: 200px;
`;

const Total = styled.div`
  font-size: 23px;
`;

export default Cart;
