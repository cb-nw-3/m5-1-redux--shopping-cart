import React from "react";
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../actions';

const CartItem = (props) => {
  const dispatch = useDispatch();
  let itemName = props.item.id.charAt(0).toUpperCase() + props.item.id.slice(1);
  console.log('props', props)
  let id = props.item.id;
  let quantity = props.item.quantity;
  console.log('itemqty', quantity)
  return (
    <Wrapper>
      <ItemHead>
        <ItemName>{itemName}</ItemName>
        <RemoveButton onClick={() => {
          dispatch(removeItem({ id }))
        }}>X</RemoveButton>
      </ItemHead>
      <ItemQuantity>
        Quantity: <input type='number' value={props.item.quantity} onChange={() => {
          dispatch(updateQuantity({ id, quantity }))
        }}></input>
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

export default CartItem;
