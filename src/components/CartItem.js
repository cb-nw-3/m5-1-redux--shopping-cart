import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addQuantity } from "../actions";

const CartItem = (props) => {
  const { id, title, price, quantity } = props.item;
  const { deleteItem, purchase } = props;
  const itemQuantity = useSelector((state) => state[id].quantity);
  const dispatch = useDispatch();

  return (
    <Item>
      <CartTitleAndBtn>
        <Title>{title}</Title>
        <Btn
          onClick={() => {
            deleteItem(id);
          }}
        >
          X
        </Btn>
      </CartTitleAndBtn>
      <CartLblAndQty>
        <CartLbl>Quantity: </CartLbl>
        <CartQty
          value={itemQuantity}
          onChange={(ev) => dispatch(addQuantity(id, ev.target.value))}
        />
      </CartLblAndQty>
    </Item>
  );
};

const Item = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  flex: 1;
`;
const CartTitleAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2%;
`;

const Title = styled.p`
  color: white;
`;

const Btn = styled.button`
  background-color: #3c2142;
  color: white;
`;

const CartLblAndQty = styled.div`
  display: flex;
  justify-content: flex-start;
  color: white;
  background-color: #2d1832;
  padding: 2%;
`;

const CartLbl = styled.label`
  margin-right: 5%;
`;
const CartQty = styled.input`
  width: 10%;
`;

export default CartItem;
