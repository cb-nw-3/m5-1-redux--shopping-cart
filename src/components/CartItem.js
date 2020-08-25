import React from 'react';
import styled from 'styled-components/macro';

const CartItem = () => {
    return (
        <Wrapper>
            <ItemDetail>
                <Item>Name
                    <CloseBtn>X</CloseBtn>
                </Item>
                <Quantity>
                    Quantity:
                    <TextInput
                        type="number"
                    />
                </Quantity>
            </ItemDetail>
            <TotalItem>
                <Total>
                    Total: $12.34
                </Total>
                <Btn>
                    Purchase
                </Btn>
            </TotalItem>
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
`

const TotalItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Total = styled.p`
`

const Btn = styled.button`
    color: white;
    background: red;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    outline: none;
`

export default CartItem;
