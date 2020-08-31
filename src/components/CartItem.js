import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../actions";

const CartItem = (props) => {
  console.log(props)
  const dispatch = useDispatch();
  let id = props.item.id;
  return (
    <Wrapper>
      <ItemHead>
        <ItemName>{props.item.title}</ItemName>
        <RemoveButton
          onClick={() => {
            dispatch(removeItem({ id }));
          }}
        >
          X
        </RemoveButton>
      </ItemHead>
      <ItemQuantity>
        Quantity:{" "}
        <StyledInput
          type="number"
          min={"0"}
          value={props.item.quantity}
          onChange={(e) => {
            if (parseInt(e.target.value) === 0) {
              console.log('removeactivated')
              dispatch(removeItem({ id }));
            } else {
              let quantity = parseInt(e.target.value);
              dispatch(updateQuantity({ id, quantity }));
            }
          }}
        ></StyledInput>
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
`;
const ItemName = styled.p`
  color: white;
`;
const RemoveButton = styled.button`
  background: #401f43;
  color: white;
  border: none;
  height: 30px;
  width: 30px;
  cursor: pointer;
  transition: background-color 150ms;
  border-radius: 10px;

  &:hover {
    background-color: #29142b;
  }
`;
const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  padding: 10px;
  color: #ddd;
  background-color: #29142b;
`;
const Wrapper = styled.div`
  border: 2px dashed gray;
  margin: 20px 0;
`;
const StyledInput = styled.input`
  width: 50px;
  height: 50px;
  border: none;
  border: 2px solid white;
  border-radius: 10px;
  background-color: #29142b;
  color: white;
  font-size: 20px;
  outline: none;
  text-align: center;
  margin: 0;
  padding-left: 10px;
  margin-left: 10px;

`

export default CartItem;
