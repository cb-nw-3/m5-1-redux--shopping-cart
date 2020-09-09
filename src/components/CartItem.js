import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { removeItem } from "../actions";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "2%",
    backgroundColor: "mediumpurple",
    color: "white",
  },
  cardContent: {
    backgroundColor: "indigo",
    color: "white",
  },
}));

const CartItem = ({ key, item }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardHeader
          subheader={item.title}
          action={
            <IconButton aria-label="settings">
              <DeleteIcon onClick={() => dispatch(removeItem(item.id))} />
            </IconButton>
          }
        ></CardHeader>
        <CardContent className={classes.cardContent}>
          <Typography variant="body2" color="white" component="p">
            Quantity : {item.quantity}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CartItem;
