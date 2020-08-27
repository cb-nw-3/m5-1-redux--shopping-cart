import React from "react";
import styled from "styled-components";
import Button from "./Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  let total = 0;
  storeItems.forEach((item) => {
    total = total + item.price * item.quantity;
  });

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(total / 100);
  return (
    <Wrapper>
      <div>
        <CartTitle>Your Cart</CartTitle>
        <ItemCounter>{storeItems.length} item</ItemCounter>
        {storeItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              price={item.price}
              title={item.title}
              id={item.id}
              quantity={item.quantity}
            ></CartItem>
          );
        })}
      </div>
      <TotalAndButton>
        <Total>
          Total:<strong> {formattedPrice}</strong>
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
