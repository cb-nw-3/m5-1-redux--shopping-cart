import React from "react";
import styled from "styled-components";

import CartItem from "./CartItem";
import { getStoreItemArray } from "../reducers/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearState } from "../actions";

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
        <AnotherHeaderDiv>
          <CartHeader>Your Cart</CartHeader>
          <ClearCartButton
            onClick={() => {
              dispatch(clearState());
            }}
          >
            Clear Cart
          </ClearCartButton>
        </AnotherHeaderDiv>
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
        <CartButton
          onClick={() => {
            if (state.length !== 0) {
              dispatch(clearState());
              alert("Purchase complete!");
            } else {
              alert("Your cart is empty");
            }
          }}
        >
          Purchase
        </CartButton>
      </CartFooter>
    </Wrapper>
  );
};

const AnotherHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #401f43;
  position: fixed;
  padding: 20px;
  width: 350px;
`;
const CartHeader = styled.h2`
  color: white;
  margin: 0;
`;
const CartHeading = styled.div`
  color: white;
  margin: 0;
  flex: 11;
  overflow-y: auto;
`;
const CartDescription = styled.p`
  color: #eee;
`;
const CartPrice = styled.p`
  color: white;
  height: 20px;
  margin: 15px 0;
`;
const CartButton = styled.button`
  width: 100px;
  background-color: pink;
  color: white;
  border-radius: 10px;
  border: none;
  height: 50px;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    background-color: palevioletred;
  }
`;
const CartFooter = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  align-items: flex-start;
`;
const ClearCartButton = styled.button`
  background: #aaa;
  color: #333;
  border: none;
  border-radius: 10px;

  &:hover {
    background: #888;
  }
`;
export default Cart;
