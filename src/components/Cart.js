import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';

import CartItem from './CartItem';
import { getStoreItemArray, getTotal } from '../reducers';

const Cart = () => {
    const storeItems = useSelector(getStoreItemArray);
    const total = useSelector(getTotal)
    return (
        <Wrapper>
            <div>
                <Header>
                    Your Cart
            </Header>
                <p>{storeItems.length} {(storeItems.length === 1) ? "Item" : "Items"}</p>
                <ItemContainer>
                    {storeItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </ItemContainer>
            </div>
            <TotalItem>
                <p>
                    Total: {total / 100}
                </p>
                <Btn>
                    Purchase
                </Btn>
            </TotalItem>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  position: sticky;
  top: 0;
  min-width: 250px;
  min-height: 100vh;
  background: #301934;
  color: white;
  padding: 35px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.h4`
margin: 0;
`

const TotalItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Btn = styled.button`
    color: white;
    background: red;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    outline: none;
`

const ItemContainer = styled.div`
    max-height: 70vh;
    overflow: auto;
`

export default Cart;