import {
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAILED,
  CHANGE_NAME,
  CHANGE_NAME_SUCCESS,
  CHANGE_NAME_FAILED,
  CHANGE_EMAIL,
  CHANGE_EMAIL_SUCCESS,
  CHANGE_EMAIL_FAILED,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILED,
  DELETE_ACCOUNT,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAILED,
} from "./types";

// getUserInfo
export const getUserInfo = () => {
  return { type: GET_USER_INFO };
};
export const getUserInfoSuccess = (userInfo) => {
  return { type: GET_USER_INFO_SUCCESS, payload: userInfo };
};
export const getUserInfoFailed = () => {
  return { type: GET_USER_INFO_FAILED };
};

// changeName
export const changeName = (newName) => {
  return { type: CHANGE_NAME, payload: newName };
};
export const changeNameSucces = (newName) => {
  return { type: CHANGE_NAME_SUCCESS, payload: newName };
};
export const changeNameFailed = () => {
  return { type: CHANGE_NAME_FAILED };
};

// changeEmail
export const changeEmail = (newEmail) => {
  return { type: CHANGE_EMAIL, payload: newEmail };
};
export const changeEmailSuccess = (newEmail) => {
  return { type: CHANGE_EMAIL_SUCCESS, payload: newEmail };
};
export const changeEmailFailed = () => {
  return { type: CHANGE_EMAIL_FAILED };
};

// changePassword
export const changePassword = (newPassword) => {
  return { type: CHANGE_PASSWORD, payload: newPassword };
};
export const changePasswordSuccess = () => {
  return { type: CHANGE_PASSWORD_SUCCESS };
};
export const changePasswordFailed = () => {
  return { type: CHANGE_PASSWORD_FAILED };
};

// deleteAccount
export const deleteAccount = () => {
  return { type: DELETE_ACCOUNT };
};
export const deleteAccountSuccess = () => {
  return { type: DELETE_ACCOUNT_SUCCESS };
};
export const deleteAccountFailed = () => {
  return { type: DELETE_ACCOUNT_FAILED };
};
