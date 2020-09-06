import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { Icon } from 'react-icons-kit'
import { ic_close } from 'react-icons-kit/md/ic_close'

import { getStoreItemArray } from '../reducers'
import { removeItem } from '../actions';

const Cart = () => {
    const dispatch = useDispatch();

    const storeItems = useSelector(getStoreItemArray);

    console.log("store items", storeItems);

    // the button should, onClick, simply remove the relevant item from the array.
    // that shouldn't be too difficult, *hollow laugh*

    // WRONG! I need to actually dispatch the action.

    const fullCart = storeItems.map((item) => {
        return (
            <CartItem>
                <CartItemHeader>
                    <CartItemTitle>{item.title}</CartItemTitle>
                    <CloseCartItemButton onClick={() => dispatch(removeItem(item.id))}>
                        <CloseCartItem size={24} icon={ic_close} />
                    </CloseCartItemButton>
                </CartItemHeader>
                <p>Quantity: {item.quantity}</p>
            </CartItem >
        )
    });

    return (
        <Wrapper>
            <div>
                <CartHeader>Your cart</CartHeader>
                <CartNumItems>0 Items</CartNumItems>
                {fullCart}
            </div>
            <CartFooterWrapper>
                <CartTotal>Total: <CartPrice>$3.14</CartPrice></CartTotal>
                <div>
                    <CartPurchaseButton>Purchase</CartPurchaseButton>
                </div>
            </CartFooterWrapper>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    background: rgb(64, 31, 67);
    color: white;
    width: 400px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

const CartItem = styled.div`
    border: 1px #693b6e dashed;
    padding: 10px;
    margin-top: 20px;
`

const CartNumItems = styled.div`
    padding-left: 5px;
    padding-bottom: 50px;
`

const CartItemHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

const CartHeader = styled.h1`
    padding-left: 5px;
    margin: 40px 0 10px 0;
`

const CloseCartItem = styled(Icon)`
    margin-top: 24px;
    color: white;
`

const CloseCartItemButton = styled.button`
    border: none;
    background: none;
`

const CartItemTitle = styled.h2`
    
`

const CartFooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
`

const CartTotal = styled.div`
`

const CartPrice = styled.span`
    font-weight: bold;
`

const CartPurchaseButton = styled.button`
    border: none;
    background: #d13861;
    border-radius: 8px;
    color: white;
    padding: 5px 20px;
`

export default Cart;