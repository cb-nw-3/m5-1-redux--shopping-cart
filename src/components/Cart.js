import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import CartItem from './CartItem';
import {getStoreItemArray} from '../reducers/index'

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  return(
    <Wrapper>
      <Header>
        <h2>Your Cart</h2>
      </Header>      
      <ItemSection>
        {storeItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
      </ItemSection>
    </Wrapper>
  )
}

const Header = styled.div`
  margin: 10px 15px 10px 15px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 300px;
  padding-top: 15px 0 15px 0;
  height: 100vh;
  background: #401f43;
  color: white;
`

const ItemSection = styled.div`
`

export default Cart;