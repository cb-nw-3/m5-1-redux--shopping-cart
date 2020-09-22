import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { removeItem } from '../actions';

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  return(
    <Wrapper>
      <ItemNameWrapper>
        <p>{item.title}</p>
        <RemoveButton onClick={() => dispatch(removeItem(item.id))}>
          X
        </RemoveButton>
      </ItemNameWrapper>
      <QuantityWrapper>
        <p>Quantity: </p>
        <Quantity>1</Quantity>
      </QuantityWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: dashed white 1px;
  padding: 15px
`

const ItemNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const QuantityWrapper = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
`

const RemoveButton = styled.button`
  height: 30px;
  width: 30px;
  border: solid white 1px;
  background: transparent;
  color: inherit;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  padding: 5px;
  height: 30px;
  width: 30px;
  margin: 0 0 0 15px;
`

export default CartItem;