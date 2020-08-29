import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getStoreItemArray } from '../reducers/index'

const Cart = () => {
  // const state = useSelector(state => state)
  const storeItems = useSelector(getStoreItemArray)
  let priceArray = []
  const totalPrice = priceArray.reduce((a, b) => {console.log('hello'); return a + b}, 0)
  console.log(totalPrice)

// Shows no cart if no items are added (trying something new for UI)
if (storeItems.length > 0) {
  return (
    <Wrapper>
      <Div>
        <Head>Your Cart</Head>
    <ItemCount>{storeItems.length} Items</ItemCount>
        <div style={{margin: 'auto'}}>
          <div>{storeItems.map(item => {
            return (
            <CartItem id={item.id} price={item.price} title={item.title} />
            )
          })}</div>
        </div>
        
        <Total>
          Total Price: ${(storeItems.reduce((a, b) => a + b.price, 0)) / 100}
        </Total>
      </Div>
    </Wrapper>
  );
};

return <></>
}



export default Cart;

const Wrapper = styled.div`
  height: 100vh;
  color: white;
  background-color: purple;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
`;

const Div = styled.div`
`;

const Head = styled.p`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 0;
    padding-bottom: 0;
`;

const ItemCount = styled.p`
    font-size: 15px;
    padding-top: 0;
    margin-top: 5px;
    margin-bottom: 45px;
`;

const Total = styled.div`
  margin-top: 50px;
  font-size: 22px;
`;