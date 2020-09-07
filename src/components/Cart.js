// Libraries
import React from "react";

// Styles
import styled from "styled-components";

// Components
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <Wrapper>
      <Top>
        <Title>
          <strong>Your Cart</strong>
        </Title>
        <NumOfItems>0 item</NumOfItems>
        <CartItem />
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
  height: 100vh;
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
