// Libraries
import React from "react";
import { useSelector } from "react-redux";

// Styles
import styled from "styled-components";

// Components
import CartItem from "./CartItem";
import { getStoreItemArray } from "../reducers";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  return (
    <Wrapper>
      <Top>
        <Title>
          <strong>Your Cart</strong>
        </Title>
        <NumOfItems>0 item</NumOfItems>
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
      </Top>
      <Bottom>
        <Total>Total: ????</Total>
        <Button>Purchase</Button>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: rgb(64, 31, 67);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  padding: 30px;
  height: 100%;
`;

const Top = styled.div``;

const Title = styled.div`
  font-size: 30px;
`;

const NumOfItems = styled.div`
  font-size: 15px;
  color: #cdcdcd;
`;

const Bottom = styled.span`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Total = styled.div`
  font-size: 20px;
`;

const Button = styled.button`
  position: relative;
  display: block;
  width: 25%;
  border-radius: 12px;
  background: #ff406e;
  color: white;
  border: none;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export default Cart;
