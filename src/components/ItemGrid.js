// Libraries
import React from 'react';
import styled from 'styled-components';
// Components
import StoreItem from './StoreItem';
// Data
import { STORE_ITEMS } from '../data';

const ItemGrid = () => {
    return (
        <Wrapper>
            {STORE_ITEMS.map((item) => (
                <StoreItem key={item.id} {...item} />
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 24px;
`;

export default ItemGrid;
