import React from "react";
import styled from "styled-components";
import Button from "./Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  console.log(storeItems);
  return (
    <Wrapper>
      <CartHeader>
        <CartTitle>Your Cart</CartTitle>
        <CartItemNumber> 0 Items</CartItemNumber>
        <CartList>
          {storeItems &&
            storeItems.map((storeItem) => {
              return (
                <CartItem
                  id={storeItem.id}
                  price={storeItem.price}
                  quantity={storeItem.quantity}
                  title={storeItem.title}
                />
              );
            })}
        </CartList>
      </CartHeader>
      <CartCheckout>
        <CartTotal>
          Total:<Total>$0.00</Total>
        </CartTotal>
        <Button>Purchase</Button>
      </CartCheckout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  color: white;
  display: flex;
  min-width: 300px;
  height: 100vh;
  padding: 15px 0;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(64, 31, 67);
`;

const CartHeader = styled.div`
  padding: 0 25px;
`;
const CartTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 0px;
`;
const CartItemNumber = styled.p`
  font-weight: normal;
  opacity: 0.7;
  margin-top: 8px;
  margin-bottom: 0px;
`;
const CartCheckout = styled.div`
  display: flex;
  padding: 0 25px 50px 25px;
`;
const CartTotal = styled.div`
  color: white;
  font-size: 22px;
`;
const Total = styled.span`
  font-weight: bold;
  font-size: 22px;
`;
const CartList = styled.ul`
  list-style-type: none;
  display: flex;
  padding-top: 25px;
  padding-left: 0px;
  flex-direction: column;
`;

export default Cart;
