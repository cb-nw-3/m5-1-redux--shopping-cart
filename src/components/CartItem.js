import React from "react";
import styled from 'styled-components';

const CartItem = (props) => {
  let itemName = props.item.id.charAt(0).toUpperCase() + props.item.id.slice(1);
  return (
    <Wrapper>
      <ItemHead>
        <ItemName>{itemName}</ItemName>
        <RemoveButton>X</RemoveButton>
      </ItemHead>
      <ItemQuantity>
        Quantity: <ItemAmount>{props.item.quantity}</ItemAmount>
      </ItemQuantity>
    </Wrapper>
  );
};

const ItemHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 10px;
`
const ItemName = styled.p`
  color: white;
`
const RemoveButton = styled.button`
  color: white;
  height: 50px;
  width: 50px;
`
const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  margin: 10px;
  color: #ddd;
`
const Wrapper = styled.div`
  border: 2px dashed gray;
`
const ItemAmount = styled.div`
  background: white;
  height: 50px;
  width: 50px;
`

export default CartItem;
