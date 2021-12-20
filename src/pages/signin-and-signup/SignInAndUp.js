import React from "react";

import { makeStyles } from "@mui/styles";

import SignIn from "../../components/sign-in/SignIn";

const useStyles = makeStyles(() => {
  return {};
});

const SignInAndUp = () => {
  const { signInAndUp } = useStyles();
  return (
    <div className={signInAndUp}>
      <SignIn />
    </div>
  );
};

export default SignInAndUp;
