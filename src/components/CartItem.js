// Libraries
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

import { removeItem } from '../actions';
import UnstyledButton from './UnstyledButton';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <ItemTitleWrapper>
                <ItemTitle>{item.title}</ItemTitle>
                <Button onClick={() => dispatch(removeItem(item.id))}>
                    <AiOutlineClose />
                </Button>
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
    height: 134px;
    width: 92%;
    border: dashed gray 2px;
    margin-top: 20px;
`;

const ItemTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin-right: 0;
    font-size: 22px;
    color: white;
`;

const ItemTitle = styled.div`
    display: inline-block;
`;

const Button = styled(UnstyledButton)`
    padding: 4px 4px 0;
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
    width: 28px;
    height: 28px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    padding: 0;
`;

export default CartItem;
