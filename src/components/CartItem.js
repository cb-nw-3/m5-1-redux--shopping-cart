import React from "react";
import styled from "styled-components";
import { STORE_ITEMS } from "../data";
import { useDispatch } from "react-redux";
import { removeItem } from "../actions";

const CartItem = ({ id, title, src, price }) => {
  const dispatch = useDispatch();
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);

  return (
    <div>
      <button onClick={() => dispatch(removeItem(id))}>x</button>
      <h5>Quantity:{}</h5>
      <h5>Total:{formattedPrice}</h5>
    </div>
  );
};

export default CartItem;
