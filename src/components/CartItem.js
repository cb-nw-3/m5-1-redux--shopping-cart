import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CartItem = ({ item }) => {
  const [itemQuantity, setItemQuantity] = React.useState(item.quantity);

  React.useEffect(() => {
    setItemQuantity(item.quantity);
  });

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
          <StyledH3>{item.title}</StyledH3>
          <h4 style={{ color: "#fff", margin: "0" }}>x</h4>
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
            <StyledLabel htmlFor="fname">Quantity:</StyledLabel>
            <StyledInput
              type="text"
              id="fname"
              name="fname"
              value={itemQuantity}
            />
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
  text-align: center;
`;

export default CartItem;
