import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import CartItem from './CartItem';
import {getStoreItemArray} from '../reducers/index'

const Cart = () => {
  const state = useSelector(state => state);
  const storeItems = useSelector(getStoreItemArray);
  return(
    <Wrapper>
      <Header>
        <h2>Your Cart</h2>
        <p>{`Number** Item`}</p>
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
`

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  min-width: 300px;
  height: 100vh;
  background: #401f43;
  color: white;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ItemSection = styled.div`
`

export default Cart;