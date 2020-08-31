import React from "react";
import styled from "styled-components";
import Button from "./Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getStoreItemArray, getSubtotal } from "../reducers";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  const subtotal = useSelector(getSubtotal);

  let totalPrice = 0;
  storeItems.forEach((storeItem) => {
    totalPrice += storeItem.price;
  });

  // const formattedPrice = new Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: "USD",
  // }).format(totalPrice / 100);

  const priceFormatted = (price) =>
    (price / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  return (
    <Wrapper>
      <CartHeader>
        <CartTitle>Your Cart</CartTitle>
        <CartItemNumber>{storeItems.length} Item(s)</CartItemNumber>
        <CartList>
          {storeItems &&
            storeItems.map((storeItem) => {
              return (
                <CartItem
                  key={storeItem.id}
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
          Total:<Total>{priceFormatted(subtotal)}</Total>
        </CartTotal>
        <PurchaseButton>Purchase</PurchaseButton>
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
  max-height: 80vh;
  overflow: auto;
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
  flex: 3;
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
const PurchaseButton = styled(Button)`
  flex: 1.5;
`;

export default Cart;
