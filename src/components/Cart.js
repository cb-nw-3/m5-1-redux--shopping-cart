import React from "react";
import styled from "styled-components";

import CartItem from "./CartItem";
import Button from "./Button";

const Cart = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Your Cart</Title>
        <ItemCount>2 items</ItemCount>
        <Items>
          <li>
            <CartItem />
          </li>
        </Items>
      </Header>

      <PurchaseArea>
        <Total>
          Total: <strong>8.12</strong>
        </Total>
        <PurchaseButton>Purchase</PurchaseButton>
      </PurchaseArea>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: sticky;
  background-color: #401f43;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 30px;
`;
const Header = styled.header``;

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
  justify-content: space-around;
  align-items: center;
  height: 40px;
  margin-bottom: 40px;
`;

const Total = styled.p`
  flex: 1;
  color: white;
`;

const PurchaseButton = styled(Button)`
  flex: 1;
`;

export default Cart;
