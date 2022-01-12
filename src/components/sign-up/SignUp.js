import React, { useState } from "react";

import { makeStyles } from "@mui/styles";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { useDispatch } from "react-redux";

import { signUpStart } from "../../redux/user/userAction";

const useStyles = makeStyles(() => {
  return {
    signUp: {
      width: "390px",
      display: "flex",
      flexDirection: "column",
    },

    title: {
      margin: "10px 0",
    },
  };
});

const SignUp = () => {
  const [signUpUser, setSignUpUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();

  const { signUp, title } = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = signUpUser;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    dispatch(signUpStart({ displayName, email, password }));
  };

  const handleChange = (event) => {
    setSignUpUser({ ...signUpUser, [event.target.name]: event.target.value });
  };

  return (
    <div className={signUp}>
      <h2 className={title}>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={signUpUser.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={signUpUser.email}
          onChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={signUpUser.password}
          onChange={handleChange}
          label="Password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={signUpUser.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
