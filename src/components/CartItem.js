import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FiX } from "react-icons/fi";

import { removeItem, updateItem } from "../actions";

const CartItem = ({ id, quantity, title }) => {
  const dispatch = useDispatch();

  //retrieve the current quantity of the item from the store
  //and display it in the text input as the value
  const itemQuantity = useSelector((state) => state[id].quantity);

  return (
    <Wrapper>
      <TopRow>
        {title}
        <Button onClick={() => dispatch(removeItem(id))}>
          <FiX size={22} />
        </Button>
      </TopRow>
      <BottomRow>
        Quantity:
        <input
          type="text"
          value={itemQuantity}
          //need to retrieve the current quantity in the text field to be updated
          onChange={(ev) => dispatch(updateItem(id, ev.target.value))}
        />
      </BottomRow>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  margin-top: 2em;
  border: 2px dashed rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px dashed red; */
  padding: 8px 16px;
  font-size: 21px;
  font-weight: 500;
`;

const Button = styled.button`
  background-color: transparent;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;

  &:active {
    transform: scale(1.1);
  }
`;

const BottomRow = styled.div`
  display: block;
  font-size: 17px;
  color: rgb(204, 204, 204);
  background: rgba(0, 0, 0, 0.25);
  padding: 8px 16px;

  & input {
    width: 30px;
    height: 30px;
    text-align: center;
    font-weight: bold;
    padding: 5px;
  }
`;

export default CartItem;
