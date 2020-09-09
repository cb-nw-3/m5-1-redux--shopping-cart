import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
//sends out the action to the store
//`dispatch` is a function we get from the `useDispatch` Redux hook. We call this when we want to _tell redux that something happened_.
import { addItem } from "../actions";
import Button from "./Button";

const StoreItem = ({ id, title, src, price }) => {
  const dispatch = useDispatch();

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);

  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={src} alt={`${title} sticker`} />
      </ImageWrapper>
      <Title>{title}</Title>
      <Button onClick={() => dispatch(addItem({ id, title, price }))}>
        Add to Cart
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 16px;
  background: #fff;
  box-shadow: 3px 2.8px 2.2px rgba(0, 0, 0, 0.07),
    3px 6.7px 5.3px rgba(0, 0, 0, 0.05), 3px 12.5px 10px rgba(0, 0, 0, 0.042),
    3px 22.3px 17.9px rgba(0, 0, 0, 0.035),
    3px 41.8px 33.4px rgba(0, 0, 0, 0.028), 3px 100px 80px rgba(0, 0, 0, 0.02);
  border-radius: 16px;
  text-align: center;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 12px;
  border: 3px solid rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  margin-top: 8px;
  font-size: 22px;
  font-weight: 600;
`;

export default StoreItem;

//When the user clicks the button, we create the `ADD_ITEM` action that is in action.js with the `addItem` function, and dispatch it to the store.
//When we receive the `ADD_ITEM` action, we produce a new copy of the state, with an added item.
//Next, we will update our reducer to handle this action. Remember, _actions describe a change_, but they aren't opinionated about what should happen as a result.
