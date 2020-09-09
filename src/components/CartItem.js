import React from "react";
import styled from "styled-components/macro";
import { cross } from "react-icons-kit/icomoon/cross";
import { Icon } from "react-icons-kit";
import UnstyledButton from "./UnstyledButton";

const CartItem = () => {
  return (
    <Wrapper>
      <ItemDescription>
        <ItemName>Hello World</ItemName>
        <Button>
          <Icon icon={cross} size={"100%"}></Icon>
        </Button>
      </ItemDescription>
      <Quantity>
        <Label>
          Quantity:
          <Input />
        </Label>
      </Quantity>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 3px dashed grey;
  height: 100vh;
`;

const ItemDescription = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: lightgrey;
  padding: 8px;
`;

const ItemName = styled.h2`
  margin: 0;
`;

const Quantity = styled.div`
  display: flex;
  background: darkmagenta;
  padding: 5px;
`;

const Label = styled.label`
  color: lightgrey;
`;

const Input = styled.input`
  width: 30px;
  height: 30px;
`;

const Button = styled(UnstyledButton)`
  width: 22px;
`;

export default CartItem;
