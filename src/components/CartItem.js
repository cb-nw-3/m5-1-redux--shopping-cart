// Libraries
import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

const CartItem = ({ item }) => {
    return (
        <Wrapper>
            <ItemTitleWrapper>
                <ItemTitle>{item.title}</ItemTitle>
                <AiOutlineClose
                    style={{
                        width: '15px',
                        height: '15px',
                        color: 'white',
                        marginTop: '8px',
                        marginRight: '20px',
                        textAlign: 'center',
                    }}
                />
            </ItemTitleWrapper>
            <ItemQuantity>
                <div>
                    <Paragraph>Quantity:</Paragraph>{' '}
                    <ItemInput defaultValue={item.quantity}></ItemInput>
                </div>
            </ItemQuantity>
        </Wrapper>
    );
};

const Wrapper = styled.li`
    height: 132px;
    width: 92%;
    border: dashed gray 2px;
    margin-top: 20px;
`;

const ItemTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    padding-right: 0;
    margin-right: 0;
    font-size: 22px;
    color: white;
`;

const ItemTitle = styled.div`
    display: inline-block;
`;

const ItemQuantity = styled.div`
    height: 60px;
    padding: 0 20px 0 20px;
    font-size: 16px;
    color: lightgray;
    background-color: #340034;
`;

const Paragraph = styled.p`
    display: inline-block;
    margin: 0;
    margin-top: 20px;
    font-size: 16px;
    color: lightgray;
`;

const ItemInput = styled.input`
    width: 30px;
    height: 30px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    padding: 0;
`;

export default CartItem;
