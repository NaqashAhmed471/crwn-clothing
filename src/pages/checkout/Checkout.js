import React from "react";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelectors";

import { useSelector } from "react-redux";

import { makeStyles } from "@mui/styles";

import CheckOutItem from "../../components/checkout-item/CheckOutItem";

const useStyles = makeStyles(() => {
  return {
    checkOutPage: {
      width: "55%",
      minHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "50px auto 0",
    },

    checkOutHeader: {
      width: "100%",
      height: "40px",
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid darkgrey",
    },

    headerBlock: {
      textTransform: "capitalize",
      width: "23%",

      "&:last-child": {
        width: "8%",
      },
    },

    total: {
      fontSize: "30px",
      marginLeft: "80%",
      fontWeight: "lighter",
      marginTop: "25px",
    },
  };
});

const Checkout = () => {
  const { checkOutPage, checkOutHeader, headerBlock, total } = useStyles();

  const cartItems = useSelector(selectCartItems);

  const cartTotal = useSelector(selectCartTotal);
  return (
    <div className={checkOutPage}>
      <div className={checkOutHeader}>
        <div className={headerBlock}>
          <span>Product</span>
        </div>
        <div className={headerBlock}>
          <span>Description</span>
        </div>
        <div className={headerBlock}>
          <span>Quantity</span>
        </div>
        <div className={headerBlock}>
          <span>Price</span>
        </div>
        <div className={headerBlock}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckOutItem key={cartItem.id} cartItem={cartItem} />;
      })}

      <div className={total}>
        <span>TOTAL: $ {cartTotal} </span>
      </div>
    </div>
  );
};

export default Checkout;
