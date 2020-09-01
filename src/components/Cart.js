import React from 'react';
import styled from 'styled-components';

const Cart = () => {

    return (
        <Wrapper>
            <CartHeader>Your cart</CartHeader>
            <CartNumItems>0 Items</CartNumItems>
            <CartItem>
                <CartItemTitle>Hello World</CartItemTitle>
                <p>Quantity: 1</p>
            </CartItem>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    background: rgb(64, 31, 67);
    color: white;
    width: 400px;
    padding: 10px;
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

const CartHeader = styled.h1`
    padding-left: 5px;
    margin: 40px 0 10px 0;
`

const CartItemTitle = styled.h2`
    
`

export default Cart;