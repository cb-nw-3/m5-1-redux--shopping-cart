// Libraries
import React from 'react';
import styled from 'styled-components';
// Components
import Button from './Button';
import CartItem from './CartItem';

const Cart = () => {
    return (
        <Wrapper>
            <DivUp>
                <Heading>Your Cart</Heading>
                <Paragraph>1 Item</Paragraph>
                <CartItem />
            </DivUp>
            <DivDown>
                <PurchaseWrapper>
                    <Total>
                        Total:{' '}
                        <span style={{ fontWeight: 'bold' }}>$12.34</span>
                    </Total>
                    <Button style={{ width: '150px' }}>Purchase</Button>
                </PurchaseWrapper>
            </DivDown>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
    padding: 20px;
    background-color: #4d004d;
`;

const DivUp = styled.div`
    margin: 0;
    flex: 1;
`;

const DivDown = styled.div`
    flex: none;
    padding-bottom: 50px;
`;

const Heading = styled.h2`
    margin: 0;
    font-size: 24px;
    color: white;
`;

const Paragraph = styled.p`
    font-size: 16px;
    color: lightgray;
`;

const PurchaseWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Total = styled.span`
    color: white;
    font-size: 24px;
`;

export default Cart;
