import React from "react";
import styled from "styled-components";
import { STORE_ITEMS } from "../data";
import Button from "./Button";

const CartItem = ({ id, title, src, price }) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);

  return (
    <div>
      <h5>Quantity:{}</h5>
      <h5>Total:{formattedPrice}</h5>
      <Button>Purchase </Button>
    </div>
  );
};

export default CartItem;
