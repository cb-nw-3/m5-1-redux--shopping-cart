import React from "react";
import styled from "styled-components";
import Button from "./Button";
import CartItem from "./CartItem";

const data = [
  {
    name: "Happy corgis",
    price: 2.19,
    id: 1,
    quantity: 1,
  },
  {
    name: "Prode cats",
    price: 2.89,
    id: 1,
    quantity: 1,
  },
];

// 1 a span where you indicate number of items (data.length)
// 2 map over each item to render a CartItem component
// 3 cart item componentshould receive soe props: name and quantity
// 4 show the total price, hard code the value
// 5 make a puchase button
const Cart = () => {
  return (
    <>
      <Wrapper>
        <h2>your Cart</h2>
        <span>
          {data.length} {data.length === 1 ? "Item" : "Items"}
        </span>
        <dataList>
          {data.map((data) => (
            <CartItem key={data.id} data={data} />
          ))}
        </dataList>
        <Button>purchase</Button>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: purple;
  color: white;
`;
