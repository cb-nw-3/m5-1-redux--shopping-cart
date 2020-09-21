import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { removeItem } from "../actions";
import { useDispatch } from "react-redux";

function json2array(json) {
  var result = [];
  var keys = Object.keys(json);
  keys.forEach(function (key) {
    result.push(json[key]);
  });
  return result;
}

const CartSideBar = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let items = json2array(state);

  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };

  const updatePrice = () => {
    let totalPrice = 0;
    items.forEach((element) => {
      totalPrice += element.price * element.quantity;
    });
    return totalPrice;
  };

  return (
    <>
      <Top>
        <ItemList>
          <TitleAndItem>
            <Title>Your Cart</Title>
            <CartTopItemCount>
              {items.length} {items.length == 1 ? "item" : "items"}{" "}
            </CartTopItemCount>
          </TitleAndItem>
          <CartPurchase>
            {items.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  item={item}
                  deleteItem={deleteItem}
                  updatePrice={updatePrice}
                />
              );
            })}
          </CartPurchase>
        </ItemList>
        <Purchase>
          <PurchaseLblQty>
            <PurchaseLbl>Total: </PurchaseLbl>
            <PurchaseQty>${updatePrice()}</PurchaseQty>
          </PurchaseLblQty>
          <PurchaseBtn>Purchase</PurchaseBtn>
        </Purchase>
      </Top>
    </>
  );
};

const CartPurchase = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemList = styled.div`
  overflow-y: scroll;
`;

const Purchase = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1px;
  margin: 1%;
`;
const PurchaseLblQty = styled.div`
  display: flex;
`;
const PurchaseLbl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  margin-right: 15%;
  font-size: 20px;
`;
const PurchaseQty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
const PurchaseBtn = styled.button`
  background-color: red;
  height: 50px;
  width: 125px;
  color: white;
  border-radius: 25px;
  font-size: 20px;
  font-weight: bold;
`;

const Top = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  background-color: #3c2142;
  padding-left: 2%;
  justify-content: space-between;
  height: 100vh;
`;
const TitleAndItem = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  margin-bottom: 5%;
`;
const Title = styled.h2`
  margin-bottom: 0;
`;

const CartTopItemCount = styled.div`
  display: flex;
  color: white;
`;

export default CartSideBar;
