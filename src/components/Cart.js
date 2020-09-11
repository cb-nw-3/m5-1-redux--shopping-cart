import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "./CartItem";
import Button from "./Button";
import { getStoreItemArray } from "../reducers/index";

const Cart = () => {
  const state = useSelector(getStoreItemArray);
  console.log(state);
  return (
    <Wrapper>
      <Header>
        Your Cart
        <TotalItem>{state.length} Item</TotalItem>
      </Header>
      {state.map((item, index) => {
        return (
          <CartItem
            key={item.id + index}
            price={item.price}
            quantity={item.quantity}
          />
        );
      })}
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
  border-bottom: 3px dashed grey;
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
