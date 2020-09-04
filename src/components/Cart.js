import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import ItemGrid from "./ItemGrid";
import GlobalStyles from "./GlobalStyles";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);

  return (
    <Wrapper>
      <FlexItems>
        <TopTitle>Your Items</TopTitle>
        <SubTitle>{storeItems.length} Items</SubTitle>
        <Items>
          {storeItems.map((item) => {
            console.log(item);
            return (
              <CartItem>
                <CartHeader>
                  <CartItemName>{item.title}</CartItemName>
                  <Button>X</Button>
                </CartHeader>

                <Quantity>
                  Quantity:
                  <ItemsAmount
                    type="text"
                    name="name"
                    defaultValue={item.quantity}
                  ></ItemsAmount>
                </Quantity>
              </CartItem>
            );
          })}

          {/* <Quantity>
              Quantity:
              <ItemsAmount type="text" name="name" />
            </Quantity> */}
        </Items>
      </FlexItems>
      <GlobalStyles />
    </Wrapper>
  );
};

const Button = styled.button`
  font-size: 15px;

  border: 0px;
  background-color: transparent;
  color: grey;
  :hover {
    cursor: pointer;

    color: white;
  }
`;

const TopTitle = styled.div`
  font-weight: bold;
  color: white;
`;

const SubTitle = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: grey;
`;

const Items = styled.div`
  padding-top: 20px;
`;

const Quantity = styled.div`
  background: rgba(0, 0, 0, 0.25);
  color: grey;
  padding: 10px;
`;

const ItemsAmount = styled.input`
  width: 20px;
  height: 20px;
  background-color: white;
  border-top: 0px black;
  border-left: 0px black;
  border-right: 0px black;
`;

const CartItemName = styled.div`
  font-size: 15px;
  color: white;
  padding: 10px;
`;

const CartItem = styled.div`
  border: 2px dashed grey;
  margin-bottom: 10px;
`;

const CartHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const FlexItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Wrapper = styled.div`
  background: #401f43;
  height: 100%;
`;

export default Cart;
