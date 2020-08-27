import React from "react";
import styled from "styled-components/macro";
import { cross } from "react-icons-kit/icomoon/cross";
import { x } from "react-icons-kit/feather/x";
import { Icon } from "react-icons-kit";
import UnstyledButton from "./UnstyledButton";

const CartItem = ({ price, title, id }) => {
  return (
    <Wrapper>
      <ItemNameAndButton>
        <ItemName>{title}</ItemName>
        <Button>
          <Icon icon={x} size={"100%"}></Icon>
        </Button>
      </ItemNameAndButton>
      <QuantitySection>
        <Label>
          Quantity: <Input />
        </Label>
      </QuantitySection>
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.div`
  border: 3px dashed grey;
  margin-top: 20px;
`;

const ItemNameAndButton = styled.div`
  color: white;
  padding: 8px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ItemName = styled.h2`
  margin: 0;
  font-weight: 500;
`;

const QuantitySection = styled.div`
  background: darkmagenta;
  padding: 5px;
  display: flex;
`;

const Label = styled.label`
  color: lightgrey;
  font-size: 1.2em;
`;

const Input = styled.input`
  width: 30px;
  height: 30px;
  border: none;
  font-size: inherit;
  padding: 4px;
  text-align: center;
  font-weight: bold;
`;

const Button = styled(UnstyledButton)`
  width: 25px;
  height: 25px;
`;
