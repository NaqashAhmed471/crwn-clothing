import React, { useState } from "react";

import { makeStyles } from "@mui/styles";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import { signInWithEmailAndPassword } from "firebase/auth";

const useStyles = makeStyles(() => {
  return {
    signIn: {
      width: "380px",
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = signInUser;

    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setSignInUser({ email: "", password: "" });
      })
      .catch((err) => {
        console.log(err.message);
      });
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
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={signInUser.password}
          handleChange={handleChange}
          required
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
