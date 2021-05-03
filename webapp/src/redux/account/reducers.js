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

const initialState = {
  loading: false,
  accounBasictInfo: undefined,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return { ...state, loading: true };
    case GET_USER_INFO_SUCCESS:
      return { ...state, accounBasictInfo: action.payload, loading: false };
    case GET_USER_INFO_FAILED:
      return { ...state, loading: false };

    case CHANGE_NAME:
      return { ...state, loading: true };
    case CHANGE_NAME_SUCCESS:
      return { ...state, loading: false };
    case CHANGE_NAME_FAILED:
      return { ...state, loading: false };

    case CHANGE_EMAIL:
      return { ...state, loading: true };
    case CHANGE_EMAIL_SUCCESS:
      return {
        ...state,
        accounBasictInfo: { ...state.accounBasictInfo, email: action.payload },
        loading: false,
      };
    case CHANGE_EMAIL_FAILED:
      return { ...state, loading: false };

    case CHANGE_PASSWORD:
      return { ...state, loading: true };
    case CHANGE_PASSWORD_SUCCESS:
      return { ...state, loading: false };
    case CHANGE_PASSWORD_FAILED:
      return { ...state, loading: false };

    case DELETE_ACCOUNT:
      return { ...state, loading: true };
    case DELETE_ACCOUNT_SUCCESS:
      return { ...state, loading: false };
    case DELETE_ACCOUNT_FAILED:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default accountReducer;
