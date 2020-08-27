import React, { useState } from "react";
import styled from "styled-components";

const CartItem = ({ title = "Item title", quantity = 1 }) => {
  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "3rem",
          padding: "0 15px",
        }}
      >
        <Title>{title}</Title>
        <Exit>x</Exit>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#301732",
          height: "3rem",
          padding: "0 15px",
        }}
      >
        <label htmlFor="qty">Quantity:</label>
        <Frame>
          <Input
            type="number"
            id="qty"
            name="qty"
            min="1"
            max="999"
            value={1}
          />
        </Frame>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  border: 2px dashed #eabbde;
  z-index: 1;
  color: white;
  margin-bottom: 5px;
`;

const Title = styled.h2`
  font-size: 2rem;
`;

const ItemsWrapper = styled.div`
  flex: 1;
  border: 2px solid green;
  width: 95%;
`;

const Input = styled.input`
  width: 50px;
  height: 30px;
  background: transparent;
  border: none;
  color: white;
  border-bottom: 3px solid white;
`;

const Frame = styled.div`
  margin-left: 10px;
  &:focus {
    border: 1px solid white;
    border-radius: 4px;
    padding: 3px;
  }
`;
const Exit = styled.div``;

const Total = styled.div``;

export default CartItem;
