import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { makeStyles } from "@mui/styles";

import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";

import { selectCartItems } from "../../redux/cart/cartSelectors";
import { cartToggle } from "../../redux/cart/cartAction";
import { selectCurrentUser } from "../../redux/user/userSelectors";

import SimpleSnakbar from "../snakbar/SimpleSnakbar";

const useStyles = makeStyles(() => {
  return {
    cartDropDown: {
      position: "absolute",
      width: "240px",
      height: "340px",
      display: "flex",
      flexDirection: "column",
      padding: "20px",
      border: "1px solid black",
      backgroundColor: "white",
      top: "80px",
      right: "0",
      zIndex: "5",

      "& button ": {
        marginTop: "auto",
      },
    },

    cartItems: {
      height: "240px",
      display: "flex",
      flexDirection: "column",
      overflow: "scroll",
      overflowX: "hidden",
    },

    emptyMessage: {
      fontSize: "18px",
      margin: "50px auto",
    },
  };
});

const CartDropDown = () => {
  const { cartDropDown, cartItems, emptyMessage } = useStyles();

  const [open, setOpen] = useState(false);

  const cart = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const handleCloseSnackbar = (event) => {
    setOpen(false);
  };

  return (
    <>
      <div className={cartDropDown}>
        <div className={cartItems}>
          {cart.length ? (
            cart.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <span className={emptyMessage}>Your cart is empty</span>
          )}
        </div>
        <CustomButton
          onClick={() => {
            if (currentUser) {
              navigate("/checkout");
              dispatch(cartToggle());
            } else {
              setOpen(true);
            }
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      </div>
      <SimpleSnakbar open={open} handler={handleCloseSnackbar} />
    </>
  );
};

export default CartDropDown;
