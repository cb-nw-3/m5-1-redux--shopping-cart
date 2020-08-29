import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeItem } from "../actions";

const CartItem = ({ quantity, title, id }) => {
  const dispatch = useDispatch();

  console.log(quantity);
  return (
    <Wrapper>
      <Top>
        <ItemName>{title}</ItemName>
        <Button onClick={() => dispatch(removeItem(id))}>X</Button>
      </Top>
      <Bottom>
        <ItemQty>
          Quantity:<ItemQtyNum>{quantity}</ItemQtyNum>
        </ItemQty>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 2px dashed rgba(255, 255, 255, 0.1);
  margin-top: 50px;
`;

const ItemName = styled.div``;
const Button = styled.button`
  background: transparent;
  color: white;
  border: 0;
`;
const ItemQty = styled.div``;
const ItemQtyNum = styled.span`
  background: white;
  color: purple;
  padding: 5px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  padding: 10px;
`;

const Bottom = styled.div`
  background: rgba(0, 0, 0, 0.25);
  padding: 10px;
`;

export default CartItem;
