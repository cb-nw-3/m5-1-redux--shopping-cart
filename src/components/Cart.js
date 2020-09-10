// Libraries
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// Components
import Button from './Button';
import CartItem from './CartItem';
// Reducers
import { getStoreItemArray, getSubtotal } from '../reducers';

const Cart = () => {
    const storeItems = useSelector(getStoreItemArray);
    const subtotal = useSelector(getSubtotal);

    const isCartEmpty = () => {
        if (storeItems.length > 1) {
            return `${storeItems.length} Items`;
        } else if (storeItems.length === 1) {
            return '1 Item';
        } else {
            return 'Your cart is empty!';
        }
    };

    const formatPrice = (price) =>
        (price / 100).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });

    return (
        <Wrapper>
            <DivUp>
                <Heading>Your Cart</Heading>
                <Paragraph>{isCartEmpty()}</Paragraph>
                <ItemList>
                    {storeItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </ItemList>
            </DivUp>
            <DivDown>
                <PurchaseWrapper>
                    <Total>
                        Total:{' '}
                        <span style={{ fontWeight: 'bold' }}>
                            {formatPrice(subtotal)}
                        </span>
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
