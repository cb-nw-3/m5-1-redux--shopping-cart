// Libraries
import React from "react";

// Styles
import styled from "styled-components";

const CartItem = () => {
  return (
    <Wrapper>
      <Top>
        <ItemName>Item Name</ItemName>
        <Button>X</Button>
      </Top>
      <Bottom>
        <ItemQuantity>
          Quantity:<ItemQuantityNum>1</ItemQuantityNum>
        </ItemQuantity>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 2px dashed rgba(255, 255, 255, 0.1);
  margin-top: 40px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  padding: 10px;
`;

const ItemName = styled.div`
  font-size: 20px;
`;

const Button = styled.button`
  background: transparent;
  color: white;
  border: 0;
`;

const Bottom = styled.div`
  background: rgba(0, 0, 0, 0.25);
  padding: 10px;
`;

const ItemQuantity = styled.div`
  font-size: 15px;
  color: #cdcdcd;
`;

const ItemQuantityNum = styled.span`
  border: 2px dashed rgba(255, 255, 255, 0.1);
  color: white;
  padding: 7px;
  margin: 0 0 0 10px;
`;

export default CartItem;
