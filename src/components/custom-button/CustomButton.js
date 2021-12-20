import React from "react";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    customButton: {
      minWidth: "165px",
      width: "auto",
      height: "50px",
      letterSpacing: "0.5px",
      padding: "0 35px 0 35px",
      fontSize: "15px",
      backgroundColor: "black",
      color: "white",
      textTransform: "uppercase",
      fontFamily: "Open Sans Condensed",
      fontWeight: "bolder",
      border: "none",
      cursor: "pointer",

      "&:hover": {
        backgroundColor: "white",
        color: "black",
        border: "1px solid black",
      },
    },

    googleSignIn: {
      backgroundColor: "#4285f4",
      color: "white",

      "&:hover": {
        backgroundColor: "#357ae8",
        border: "none",
        color: "white",
      },
    },
  };
});

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  const { customButton, googleSignIn } = useStyles();

  return (
    <button
      className={`${isGoogleSignIn ? googleSignIn : ""} ${customButton}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
