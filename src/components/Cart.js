import React from "react";
import CartItem from "./CartItem";
import styled from "styled-components";

const Cart = () => {
  return (
    <Wrapper>
      <Top>
        <Title>
          <strong>Your Cart</strong>
        </Title>
        <div>1 item</div>

        <CartItem />
      </Top>

      <Bottom>
        <Total>Total: $12.34</Total>
        <Button>Purchase</Button>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: sticky;
  top: 0px;
  min-width: 300px;
  height: 100vh;
  color: white;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(64, 31, 67);
`;
const Top = styled.div``;
const Title = styled.div`
  font-size: 25px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Total = styled.div``;

const Button = styled.button`
  position: relative;
  display: block;
  width: 150px;
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
