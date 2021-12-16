import React from "react";
import { makeStyles } from "@mui/styles";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

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
    },
  };
});

const Header = () => {
  const { header, logoContainer, logo, options, option } = useStyles();

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
      </div>
    </div>
  );
};

export default Header;
