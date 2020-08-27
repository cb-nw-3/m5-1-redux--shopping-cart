import React from 'react';
import styled from 'styled-components/macro';

const Logo = () => {
  return <Wrapper>Sruthi's Sticker Shop</Wrapper>;
};

const Wrapper = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: normal;
  font-family: 'Fredoka One';

  @media(min-width: 600px){
    font-size: 32px;
  }
`;

export default Logo;
