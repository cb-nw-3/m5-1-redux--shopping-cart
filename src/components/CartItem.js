// Libraries
import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

const CartItem = () => {
    return (
        <Wrapper>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <ItemTitle>Hello World</ItemTitle>
                <AiOutlineClose
                    style={{
                        width: '25px',
                        height: '25px',
                        color: 'white',
                        margin: '20px',
                    }}
                />
            </div>
            <ItemQuantity>
                <div>
                    <Paragraph>Quantity: </Paragraph>{' '}
                    <ItemInput value="1"></ItemInput>
                </div>
            </ItemQuantity>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: absolute;
    height: 130px;
    width: 92%;
    border: dashed gray 2px;
    margin-top: 30px;
`;

const ItemTitle = styled.div`
    display: inline-block;
    padding: 20px;
    font-size: 22px;
    color: white;
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
