import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit'
import { ic_close } from 'react-icons-kit/md/ic_close'

const Cart = () => {

    return (
        <Wrapper>
            <div>
                <CartHeader>Your cart</CartHeader>
                <CartNumItems>0 Items</CartNumItems>
                <CartItem>
                    <CartItemHeader>
                        <CartItemTitle>Hello World</CartItemTitle>
                        <CloseCartItem size={24} icon={ic_close} />
                    </CartItemHeader>
                    <p>Quantity: 1</p>
                </CartItem>
            </div>
            <CartFooterWrapper>
                <CartTotal>Some stuff</CartTotal>
                <div>
                    <CartPurchaseButton />
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
`

const CartItemTitle = styled.h2`
    
`

const CartFooterWrapper = styled.div`
`

const CartTotal = styled.div`
`

const CartPurchaseButton = styled.button`
`

export default Cart;