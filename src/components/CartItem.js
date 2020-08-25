import React, { useState } from "react";
import styled from "styled-components";

const CartItem = () => {
  return (
    <Wrapper>
      <Title>Item</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  border: 2px dashed red;
  z-index: 1;
  color: white;
`;

const Title = styled.h2`
  font-size: 2rem;
`;

const ItemsWrapper = styled.div`
  flex: 1;
  border: 2px solid green;
  width: 95%;
`;

const Total = styled.div``;

export default CartItem;
