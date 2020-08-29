import React from "react";
import styled from "styled-components";
import { removeItem } from '../actions';
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const price = props.price
  
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price / 100);
  return (
    <Wrapper>
      <Wrap>
  <Head>{props.title}</Head>
        <Btn onClick={() => {
          dispatch(removeItem({ id: props.id, title: props.title, price: props.price }))
        }}>X</Btn>
      </Wrap>
  <Quantity>Price: {formattedPrice}</Quantity>
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.div`
  width: auto;
  border: 1px dashed grey;
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Head = styled.p`
  padding-left: 5px;
`;

const Btn = styled.button`
    background: transparent;
    border: none;
    color: white;
`;

const Quantity = styled.p`
  background-color: indigo;
  margin: 0;
  padding: 10px 5px 10px 5px;
`;
