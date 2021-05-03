import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
  SIGN_OUT,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILED,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILED,
  SEND_PASS_EMAIL,
  SEND_PASS_EMAIL_SUCCESS,
  SEND_CONFIRMATION_EMAIL,
  SEND_CONFIRMATION_EMAIL_SUCCESS,
  SEND_CONFIRMATION_EMAIL_FAILED,
  SEND_PASS_EMAIL_FAILED,
} from "./types";

// signIn
export const signIn = (userData) => {
  return { type: SIGN_IN, payload: userData };
};
export const signInSuccess = (userData) => {
  return { type: SIGN_IN_SUCCESS, payload: userData };
};
export const signInFailed = (message) => {
  return { type: SIGN_IN_FAILED, payload: message };
};

// signOut
export const signOut = () => {
  return { type: SIGN_OUT };
};
export const signOutSuccess = () => {
  return { type: SIGN_OUT_SUCCESS };
};
export const signOutFailed = () => {
  return { type: SIGN_OUT_FAILED };
};

// signUp
export const signUp = (userData) => {
  return { type: SIGN_UP, payload: userData };
};
export const signUpSuccess = (userData) => {
  return { type: SIGN_UP_SUCCESS, payload: userData };
};
export const signUpFailed = (message) => {
  return { type: SIGN_UP_FAILED, payload: message };
};

// sendPassEmail
export const sendPassEmail = (username) => {
  return { type: SEND_PASS_EMAIL, payload: username };
};
export const sendPassEmailSuccess = () => {
  return { type: SEND_PASS_EMAIL_SUCCESS };
};
export const sendPassEmailFailed = () => {
  return { type: SEND_PASS_EMAIL_FAILED };
};

// sendConfirmationEmail
export const sendConfirmationEmail = (userData) => {
  return { type: SEND_CONFIRMATION_EMAIL, payload: userData };
};
export const sendConfirmationEmailSuccess = () => {
  return { type: SEND_CONFIRMATION_EMAIL_SUCCESS };
};
export const sendConfirmationEmailFailed = () => {
  return { type: SEND_CONFIRMATION_EMAIL_FAILED };
};
