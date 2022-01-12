import React from "react";

import { makeStyles } from "@mui/styles";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/CartIcon";
import CartDropDown from "../cart-dropdown/CartDropDown";

import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUser } from "../../redux/user/userSelectors";
import { selectCardHidden } from "../../redux/cart/cartSelectors";

import { signOutStart } from "../../redux/user/userAction";

const useStyles = makeStyles(() => {
  return {
    header: {
      height: "70px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "25px",
    },

    logoContainer: {
      height: "100%",
      width: "70px",
      padding: "25px",
    },

    options: {
      width: "50%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },

    option: {
      padding: "10px 15px",
      cursor: "pointer",
    },
  };
});

const Header = () => {
  const { header, logoContainer, logo, options, option } = useStyles();

  const currentUser = useSelector(selectCurrentUser);

  const hiddenCart = useSelector(selectCardHidden);

  const dispatch = useDispatch();

  return (
    <div className={header}>
      <Link to="/" className={logoContainer}>
        <Logo className={logo} />
      </Link>
      <div className={options}>
        <Link to="/shop" className={option}>
          SHOP
        </Link>
        <Link to="/contact" className={option}>
          CONTACT
        </Link>
        {currentUser ? (
          <div className={option} onClick={() => dispatch(signOutStart())}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin">SIGN IN</Link>
        )}
        <CartIcon />
      </div>
      {hiddenCart ? null : <CartDropDown />}
    </div>
  );
};

export default Header;
