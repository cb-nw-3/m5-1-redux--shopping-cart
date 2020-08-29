import React from "react";
import styled from "styled-components";

import CartItem from "./CartItem";
import { getStoreItemArray } from "../reducers/index";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { clearState } from '../actions';


const Cart = () => {
  const state = useSelector(getStoreItemArray);
  const dispatch = useDispatch();
  let amountOfItems =
    state.length !== 0
      ? state.reduce((amount, item) => {
          return amount + item.quantity;
        }, 0)
      : 0;
  let priceOfItems =
    state.length !== 0
      ? state.reduce((price, item) => {
          return price + item.price * item.quantity;
        }, 0)
      : 0;
  let truePriceOfItems =
    priceOfItems !== 0
      ? priceOfItems.toString().slice(0, -2) +
        "." +
        priceOfItems.toString().slice(-2)
      : "00.00";
  return (
    <Wrapper>
      <CartHeading>
        <CartHeader>Your Cart</CartHeader>
        <ClearCartButton onClick={() => {
          dispatch(clearState())
        }}>Clear Cart</ClearCartButton>
        <CartDescription>
          {amountOfItems} {amountOfItems > 1 ? "Items" : "Item"}
        </CartDescription>
        {state.map((cartItem) => {
          return (
            <>
              <CartItem item={cartItem} key={cartItem.id} />
            </>
          );
        })}
      </CartHeading>
      <CartFooter>
        <CartPrice>Total: ${truePriceOfItems}</CartPrice>
        <CartButton>Purchase</CartButton>
      </CartFooter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: purple;
  height: 100vh;
  position: fixed;
  padding: 20px;
`;
const CartHeader = styled.h2`
  color: white;
  margin: 0;
`;
const CartHeading = styled.div`
  color: white;
  margin: 0;
  flex: 11;
  overflow-y: scroll;
`;
const CartDescription = styled.p`
  color: #eee;
`;
const CartPrice = styled.p`
  color: white;
  height: 20px;
  margin: 15px;
`;
const CartButton = styled.button`
  width: 150px;
  background-color: pink;
  color: white;
  border-radius: 10px;
  border: none;
  height: 50px;
`;
const CartFooter = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  align-items: flex-start;
`;
const ClearCartButton = styled.button`

`
export default Cart;
