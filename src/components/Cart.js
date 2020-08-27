import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import Button from "./Button";
import { getStoreItemArray } from "../reducers";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);

  let totalPrice = 0;
  storeItems.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });
  const formattedTotalPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalPrice / 100);

  return (
    <Wrapper>
      <Header>
        <Title>Your Cart</Title>
        <ItemCount>{storeItems.length} items</ItemCount>
        <Items>
          <li>
            {storeItems.map((item) => {
              return (
                <CartItem
                  key={item.title}
                  id={item.id}
                  title={item.title}
                  quantity={item.quantity}
                />
              );
            })}
          </li>
        </Items>
      </Header>

      <PurchaseArea>
        <Total>
          Total: <strong>{formattedTotalPrice}</strong>
        </Total>
        <PurchaseButton>Purchase</PurchaseButton>
      </PurchaseArea>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: sticky;
  top: 0;
  min-width: 300px;
  background-color: #401f43;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 5px 15px 30px;
`;

const Header = styled.header`
  overflow: auto;
`;

const ItemCount = styled.p`
  color: white;
  font-weight: lighter;
  margin-top: -10px;
  margin-bottom: 50px;
`;

const Items = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const Title = styled.h2`
  color: white;
`;

const PurchaseArea = styled.div`
  display: flex;
  position: sticky;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  margin-bottom: 40px;
  padding-top: 10px;
  padding-right: 20px;
`;

const Total = styled.p`
  flex: 1;
  color: white;
`;

const PurchaseButton = styled(Button)`
  flex: 1;
`;

export default Cart;
