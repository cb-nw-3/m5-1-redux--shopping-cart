import React from "react";
import styled from "styled-components";

const CartItem = () => {
  return (
    <Wrapper>
      <Wrap>
        <Head>Hello World</Head>
        <Btn>X</Btn>
      </Wrap>
      <Quantity>Quantity: 1</Quantity>
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.div`
  width: auto;
  border: 1px dashed grey;
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Head = styled.p`
  padding-left: 5px;
`;

const Btn = styled.button`
    background: transparent;
    border: none;
    color: white;
`;

const Quantity = styled.p`
  background-color: indigo;
  margin: 0;
  padding: 10px 5px 10px 5px;
`;
