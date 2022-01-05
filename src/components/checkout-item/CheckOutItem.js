import React from "react";

import { makeStyles } from "@mui/styles";

import { useDispatch } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cartAction";

const useStyles = makeStyles(() => {
  return {
    checkOutItem: {
      width: "100%",
      display: "flex",
      minHeight: "100px",
      borderBottom: "1px solid darkgrey",
      padding: "15px 0",
      fontSize: "20px",
      alignItems: "center",
    },

    imageContainer: {
      width: "23%",
      paddingRight: "15px",

      "& img": {
        width: "100%",
        height: "100%",
      },
    },
    itemName: {
      width: "23%",
    },
    itemQuantity: {
      width: "23%",
      display: "flex",
    },

    itemPrice: {
      width: "23%",
    },

    removeButton: {
      fontWeight: "bold",
      cursor: "pointer",
    },

    arrow: {
      cursor: "pointer",
    },

    quantityValue: {
      margin: "0 10px",
    },
  };
});

const CheckOutItem = ({ cartItem }) => {
  const {
    checkOutItem,
    imageContainer,
    itemName,
    itemQuantity,
    itemPrice,
    removeButton,
    arrow,
    quantityValue,
  } = useStyles();

  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();
  return (
    <div className={checkOutItem}>
      <div className={imageContainer}>
        <img src={imageUrl} alt="" />
      </div>
      <span className={itemName}>{name}</span>
      <span className={itemQuantity}>
        <div className={arrow} onClick={() => dispatch(removeItem(cartItem))}>
          &#10094;
        </div>
        <span className={quantityValue}>{quantity}</span>
        <div className={arrow} onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className={itemPrice}>$ {price}</span>
      <div
        className={removeButton}
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
