// Libraries
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// Components
import Button from './Button';
import CartItem from './CartItem';
// Reducers
import { getStoreItemArray } from '../reducers';

const Cart = () => {
    const storeItems = useSelector(getStoreItemArray);

    return (
        <Wrapper>
            <DivUp>
                <Heading>Your Cart</Heading>
                <Paragraph>1 Item</Paragraph>
                <ItemList>
                    {storeItems.map((item) => (
                        // console.log('Data: ', item),
                        <CartItem key={item.id} item={item} />
                    ))}
                </ItemList>
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

const ItemList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
    padding-top: 30px;
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
