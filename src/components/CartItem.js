import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { removeItem } from '../actions';

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  return(
    <Wrapper>
      <p>{item.title}</p>
      <RemoveButton onClick={() => dispatch(removeItem(item.id))}>
        X
      </RemoveButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`

const RemoveButton = styled.button`
`

export default CartItem;