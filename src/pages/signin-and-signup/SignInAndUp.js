import React from "react";

import { makeStyles } from "@mui/styles";

import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

const useStyles = makeStyles(() => {
  return {
    signInAndUp: {
      width: "850px",
      display: "flex",
      justifyContent: "space-between",
      margin: "30px auto",
    },
  };
});

const SignInAndUp = () => {
  const { signInAndUp } = useStyles();
  return (
    <div className={signInAndUp}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndUp;
