import React from "react";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    group: {
      position: "relative",
      margin: "45px 0",
    },

    formInput: {
      background: "none",
      color: "grey",
      fontSize: "18px",
      padding: "10px 10px 10px 5px",
      display: "block",
      width: "100%",
      border: "none",
      borderRadius: "0",
      borderBottom: `1px solid grey`,
      margin: "25px 0",

      "&:focus": {
        outline: "none",
        "&~label": {
          top: "-14px",
          fontSize: "12px",
          color: "black",
        },
      },
      "&[type='password']": {
        letterSpacing: "6px",
      },
    },

    formInputLabel: {
      color: "grey",
      fontSize: "16px",
      fontWeight: "normal",
      position: "absolute",
      pointerEvents: "none",
      left: "5px",
      top: "10px",
      transition: "300ms ease all",
    },
  };
});

const FormInput = ({ handleChange, label, ...otherProps }) => {
  const { group, formInput, formInputLabel } = useStyles();

  return (
    <div className={group}>
      <input className={formInput} onChange={handleChange} {...otherProps} />
      <label className={formInputLabel}>{label}</label>
    </div>
  );
};

export default FormInput;
