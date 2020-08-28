import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <Wrapper>
      <Div>
        <Head>Your Cart</Head>
        <ItemCount>1 Item</ItemCount>
        <div style={{margin: 'auto'}}>
        <CartItem />
        </div>
      </Div>
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.div`
  height: 100vh;
  color: white;
  background-color: purple;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
`;

const Div = styled.div`
`;

const Head = styled.p`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 0;
    padding-bottom: 0;
`;

const ItemCount = styled.p`
    font-size: 15px;
    padding-top: 0;
    margin-top: 5px;
    margin-bottom: 45px;
`;