import React from "react";

import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";

import { cartToggle } from "../../redux/cart/cartAction";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";

import { makeStyles } from "@mui/styles";

import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(() => {
  return {
    cartIcon: {
      width: "45px",
      height: "45px",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },

    shoppingIcon: {
      width: "24px",
      height: "24px",
    },

    itemCount: {
      position: "absolute",
      fontSize: "10px",
      fontWeight: "bold",
      bottom: "12px",
    },
  };
});

const CartIcon = () => {
  const dispatch = useDispatch();

  const { cartIcon, shoppingIcon, itemCount } = useStyles();

  const cartToggleHidden = () => {
    dispatch(cartToggle());
  };

  const cartCount = useSelector(selectCartItemsCount);

  return (
    <div className={cartIcon} onClick={cartToggleHidden}>
      <ShoppingCart className={shoppingIcon} />
      <span className={itemCount}>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
