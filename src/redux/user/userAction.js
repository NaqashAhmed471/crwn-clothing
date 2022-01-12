import {
  GOOGLE_SIGNIN_START,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  EMAIL_SIGNIN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "./userType";

export const googleSignInStart = () => {
  return {
    type: GOOGLE_SIGNIN_START,
  };
};

export const signInSuccess = (user) => {
  return {
    type: SIGNIN_SUCCESS,
    payload: user,
  };
};

export const signInFailure = (error) => {
  return {
    type: SIGNIN_FAILURE,
    payload: error,
  };
};

export const emailSignInStart = (emailAndPassword) => {
  return {
    type: EMAIL_SIGNIN_START,
    payload: emailAndPassword,
  };
};

export const checkUserSession = () => {
  return {
    type: CHECK_USER_SESSION,
  };
};

export const signOutStart = () => {
  return {
    type: SIGN_OUT_START,
  };
};

export const signOutSuccess = () => {
  return {
    type: SIGN_OUT_SUCCESS,
  };
};

export const signOutFailure = (error) => {
  return {
    type: SIGN_OUT_FAILURE,
    payload: error,
  };
};

export const signUpStart = (userCredentials) => {
  return {
    type: SIGN_UP_START,
    payload: userCredentials,
  };
};

export const signUpSuccess = ({ user, additionalData }) => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: { user, additionalData },
  };
};

export const signUpFailure = (error) => {
  return {
    type: SIGN_UP_FAILURE,
    payload: error,
  };
};
