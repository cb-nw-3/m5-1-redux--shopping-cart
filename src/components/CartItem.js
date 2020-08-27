import React from "react";
import styled from "styled-components";

const CartItem = () => {
  return (
    <StyledDiv>
      <div
        style={{
          margin: "0px",
          padding: "0px",
          border: "1px dashed #b0a2b0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 10px 20px 10px",
          }}
        >
          <StyledH3>Pink Alpaca</StyledH3>
          <StyledH3>x</StyledH3>
        </div>

        <div
          style={{
            display: "flex",
            background: "#301732",
            margin: "0",
            padding: "0 0 10px 0",
          }}
        >
          <form style={{ marginTop: "10px" }}>
            <StyledLabel for="fname">Quantity:</StyledLabel>
            <StyledInput type="text" id="fname" name="fname" />
          </form>
        </div>
      </div>
      <div></div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const StyledH3 = styled.h3`
  color: #fff;
  margin: 0;
`;

const StyledLabel = styled.label`
  color: #b0a2b0;
  padding: 0 0 10px 10px;
`;

const StyledInput = styled.input`
  width: 30px;
  background: #301732;
  border: none;
  border-bottom: 2px solid #fff;
  color: #fff;
  font-weight: bold;
`;

export default CartItem;
