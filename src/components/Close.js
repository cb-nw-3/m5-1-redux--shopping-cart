import React from "react";
import styled from "styled-components";
import { deleteItem } from "./actions";
import { useDispatch } from "react-redux";

export default function Close({ id }) {
  const dispatch = useDispatch();
  return (
    <Exit
      onClick={(e) => {
        e.preventDefault();
        dispatch(deleteItem({ id }));
      }}
    >
      x
    </Exit>
  );
}

const Exit = styled.button``;
