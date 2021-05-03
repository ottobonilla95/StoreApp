import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_OUT,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILED,
  SEND_PASS_EMAIL,
  SEND_PASS_EMAIL_SUCCESS,
  SEND_PASS_EMAIL_FAILED,
  SEND_CONFIRMATION_EMAIL,
  SEND_CONFIRMATION_EMAIL_SUCCESS,
  SEND_CONFIRMATION_EMAIL_FAILED,
} from "./types";

const initialState = {
  isLoggedIn: false,
  authError: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { isLoggedIn: false, authError: null, loading: true };
    case SIGN_IN_SUCCESS:
      return {
        ...action.payload,
        isLoggedIn: true,
        authError: null,
        loading: false,
      };
    case SIGN_IN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        authError: action.payload,
        loading: false,
      };

    case SIGN_UP:
      return { isLoggedIn: false, authError: null, loading: true };
    case SIGN_UP_SUCCESS:
      return {
        ...action.payload,
        isLoggedIn: true,
        authError: null,
        loading: false,
      };
    case SIGN_UP_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        authError: action.payload,
        loading: false,
      };

    case SIGN_OUT:
      return { ...state, isLoggedIn: false, authError: null, loading: true };
    case SIGN_OUT_SUCCESS:
      return { ...state, isLoggedIn: false, authError: null, loading: false };
    case SIGN_OUT_FAILED:
      return { ...state, isLoggedIn: false, authError: null, loading: false };

    case SEND_PASS_EMAIL:
      return { ...state, loading: true };
    case SEND_PASS_EMAIL_SUCCESS:
      return { ...state, loading: false };
    case SEND_PASS_EMAIL_FAILED:
      return { ...state, loading: false };

    case SEND_CONFIRMATION_EMAIL:
      return { ...state, loading: true };
    case SEND_CONFIRMATION_EMAIL_SUCCESS:
      return { ...state, loading: false };
    case SEND_CONFIRMATION_EMAIL_FAILED:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default authReducer;
