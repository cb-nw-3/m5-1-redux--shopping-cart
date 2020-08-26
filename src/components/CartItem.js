import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeItem } from "../actions";

const CartItem = ({ id, price, quantity, title }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Item>
        <ItemName>{title}</ItemName>
        <RemoveButton
          onClick={() => dispatch(removeItem({ id, title, price }))}
        >
          X
        </RemoveButton>
      </Item>
      <QuantityDiv>
        Quantity:
        <InputNum type="number" value={quantity}></InputNum>
      </QuantityDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 2px dashed rgba(250, 250, 250, 0.2);
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  color: white;
  background: transparent;
  padding: 15px 10px;
`;
const ItemName = styled.div`
  font-size: 24px;
  flex: 4;
`;
const RemoveButton = styled.button`
  border: none;
  background: transparent;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;
const QuantityDiv = styled.div`
  display: flex;
  align-items: middle;
  justify-content: left;
  color: rgb(200, 200, 200);
  padding: 15px 10px;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 18px;
`;

const InputNum = styled.input`
  width: 25px;
  height: 25px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: inherit;
  background: transparent;
  border-style: none none solid;
  border-bottom: 3px solid white;
  padding: 4px;
  color: rgb(200, 200, 200);
  & input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default CartItem;
