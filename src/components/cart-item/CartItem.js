import React from "react";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    cartItem: {
      width: "100%",
      display: "flex",
      height: "80px",
      marginBottom: "15px",
    },

    itemImg: {
      width: "30%",
    },

    itemDetails: {
      width: "70%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: "10px 20px",
    },
  };
});

const CartItem = ({ item }) => {
  const { imageUrl, price, name, quantity } = item;
  const { cartItem, itemDetails, itemName, itemPrice, itemImg } = useStyles();
  return (
    <div className={cartItem}>
      <img src={imageUrl} alt="item" className={itemImg} />
      <div className={itemDetails}>
        <span className={itemName}>{name}</span>
        <span className={itemPrice}>
          {quantity} x $ {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
