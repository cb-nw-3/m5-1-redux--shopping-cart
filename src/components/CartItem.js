import React from 'react';
import styled from 'styled-components/macro';

import { useDispatch } from 'react-redux';
import { removeItem } from '../actions';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <ItemDetail>
                <Item>
                    {item.title}
                    <CloseBtn
                        onClick={() =>
                            dispatch(removeItem(item.id))
                        }
                    >
                        X
                    </CloseBtn>
                </Item>
                <Quantity>
                    Quantity:
                    <TextInput
                        value={item.quantity}
                        type="number"
                    />
                </Quantity>
            </ItemDetail>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ItemDetail = styled.div`
    border: 1px dashed darkgray;
`

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
    font-size: 18px;
`

const CloseBtn = styled.button`
    font-size: 15px;
    background: none;
    color: white;
    border: none;
`

const TextInput = styled.input`
    width: 40px;
    margin-left: 10px;
`

const Quantity = styled.div`
    background: black;
    padding: 5px;
    font-size: 13px;
`

export default CartItem;
