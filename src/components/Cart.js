import React from "react";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../reducers";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../actions";

const Cart = () => {
  const dispatch = useDispatch();

  const storeItems = useSelector(getStoreItemArray);
  const [total, setTotal] = React.useState("0");

  React.useEffect(() => {
    let subtotal = 0.0;
    storeItems.forEach((storeItem) => {
      subtotal = subtotal + storeItem.price * storeItem.quantity;
    });
    subtotal = subtotal / 100;
    setTotal(parseFloat(subtotal));
  }, [storeItems]);

  function quantChanged(event) {
    dispatch(updateQuantity(event.target.id, parseInt(event.target.value)));
  }

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
                  <Button onClick={() => dispatch(removeItem(item))}>X</Button>
                </CartHeader>

                <Quantity>
                  Quantity:
                  <ItemsAmount
                    type="text"
                    id={item.id}
                    value={item.quantity}
                    onChange={quantChanged}
                  ></ItemsAmount>
                </Quantity>
              </CartItem>
            );
          })}
        </Items>
      </FlexItems>
      <BottomTotal>Total: {total}</BottomTotal>
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

const BottomTotal = styled.div`
  font-weight: bold;
  color: white;
  position: absolute;
  bottom: 0px;
  padding: 20px;
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
  width: 40px;
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
  justify-content: space-between;
`;

const Wrapper = styled.div`
  background: #401f43;
  height: 100%;
`;

export default Cart;
