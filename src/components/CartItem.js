import React from "react";
import styled from "styled-components/macro";
import { cross } from "react-icons-kit/icomoon/cross";
import { Icon } from "react-icons-kit";
import UnstyledButton from "./UnstyledButton";

const CartItem = () => {
  return (
    <Wrapper>
      <ItemNameAndButton>
        <ItemName>Hello World</ItemName>
        <Button>
          <Icon icon={cross} size={"100%"}></Icon>
        </Button>
      </ItemNameAndButton>
      <QuantitySection>
        <Label>
          Quantity:
          <Input />
        </Label>
      </QuantitySection>
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.div`
  border: 3px dashed lightgrey;
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
`;

const QuantitySection = styled.div`
  background: darkmagenta;
  padding: 5px;
  display: flex;
`;

const Label = styled.label`
  color: lightgrey;
`;

const Input = styled.input`
  width: 30px;
  height: 30px;
`;

const Button = styled(UnstyledButton)`
  width: 5%;
`;
