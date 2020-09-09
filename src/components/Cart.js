import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

import CartItem from "./CartItem";
import { getStoreItemArray } from "../reducers";

const drawerWidth = "25%";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    height: "100%",
  },
  drawerPaper: {
    width: drawerWidth,
    height: "100%",
    backgroundColor: "purple",
    color: "white",
  },
  marginText: {
    margin: "10%",
  },
}));

const Cart = () => {
  const classes = useStyles();
  const storeItems = useSelector(getStoreItemArray);
  return (
    <>
      <Drawer
        anchor="right"
        variant="permanent"
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <h2 className={classes.marginText}>Your Cart</h2>
        <p className={classes.marginText}>{storeItems.length} Item</p>

        <ItemList>
          {storeItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ItemList>
        <h2>Total: 0$</h2>
        <Button
          variant="contained"
          color="secondary"
          className={classes.marginText}
        >
          Purchase
        </Button>
      </Drawer>
    </>
  );
};

const ItemList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  padding-top: 32px;
`;

export default Cart;
