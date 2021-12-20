import React, { useState } from "react";

import { makeStyles } from "@mui/styles";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { signInWithGoogle } from "../../firebase/firebase.utils";

const useStyles = makeStyles(() => {
  return {
    signIn: {
      width: "390px",
      display: "flex",
      flexDirection: "column",
    },

    title: {
      margin: "10px 0",
    },

    buttons: {
      display: "flex",
      justifyContent: "space-between",
    },
  };
});

const SignIn = () => {
  const [signInUser, setSignInUser] = useState({ email: "", password: "" });

  const { signIn, title, buttons } = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();

    setSignInUser({ email: "", password: "" });
  };

  const handleChange = (event) => {
    setSignInUser({ ...signInUser, [event.target.name]: event.target.value });
  };

  return (
    <div className={signIn}>
      <h2 className={title}>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          value={signInUser.email}
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={signInUser.password}
          handleChange={handleChange}
        />

        <div className={buttons}>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
