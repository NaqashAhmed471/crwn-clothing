import React from "react";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelectors";

import { useSelector } from "react-redux";

import { makeStyles } from "@mui/styles";

import CheckOutItem from "../../components/checkout-item/CheckOutItem";
import StripeButton from "../../components/stripe-button/StripeButton";

const useStyles = makeStyles(() => {
  return {
    checkOutPage: {
      width: "55%",
      minHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "50px auto 0",

      "& button": {
        marginLeft: "auto",
        marginTop: "50px",
      },
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
      marginLeft: "auto",
      fontWeight: "lighter",
      marginTop: "25px",
    },

    testWarning: {
      textAlign: "center",
      marginTop: "40px",
      fontSize: "24px",
      color: "red",
    },
  };
});

const Checkout = () => {
  const { checkOutPage, checkOutHeader, headerBlock, total, testWarning } =
    useStyles();

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
      <div className={testWarning}>
        *Please use the following test credit card for payment*
        <br />
        4242 4242 4242 4242 - Exp : 1/20 - CVV:123
      </div>
      <StripeButton price={cartTotal} />
    </div>
  );
};

export default Checkout;
