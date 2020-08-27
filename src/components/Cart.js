import React from "react";
import styled from "styled-components";
import Button from "./Button";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <StyledDiv>
      <div style={{ margin: "20px" }}>
        <StyledH1>Your cart</StyledH1>
        <StyledP>0 items</StyledP>
      </div>
      <div></div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          position: "absolute",
          bottom: "40px",
          width: "360px",
        }}
      >
        <StyledP>Total: {}</StyledP>
        <Button style={{ width: "120px", height: "40px" }}>Purchase</Button>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  height: 100%;
  width: 360px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #401f43;
  overflow-x: hidden;
  padding-top: 20px;
`;

const StyledH1 = styled.h1`
  color: #fff;
`;

const StyledP = styled.p`
  color: #b0a2b0;
`;

export default Cart;
