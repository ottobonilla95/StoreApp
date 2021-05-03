import {
  FETCH_STORES,
  FETCH_STORES_SUCCESS,
  FETCH_STORES_FAILED,
  FETCH_OWN,
  FETCH_OWN_SUCCESS,
  FETCH_OWN_FAILED,
  FETCH_STORE,
  FETCH_STORE_SUCCESS,
  FETCH_STORE_FAILED,
  UPDATE_STORE,
  UPDATE_STORE_SUCCESS,
  UPDATE_STORE_FAILED,
  DELETE_STORE,
  DELETE_STORE_SUCCESS,
  DELETE_STORE_FAILED,
  SAVE_STORE,
  SAVE_STORE_SUCCESS,
  SAVE_STORE_FAILED,
  SET_CURRENT_STORE,
  SAVE_ITEM,
  SAVE_ITEM_SUCCESS,
  SAVE_ITEM_FAILED,
  UPDATE_ITEM,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAILED,
  DELETE_ITEM,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILED,
} from "./types";

const initialState = {
  stores: {
    list: [],
    pagination: {
      page: 1,
      pages: 0,
    },
  },
  currentStore: undefined,
  loading: false,
  currentItems: [],
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORES:
      return { ...state, loading: true };
    case FETCH_STORES_SUCCESS:
      return { ...state, stores: action.payload, loading: false };
    case FETCH_STORES_FAILED:
      return { ...state, loading: false };

    case FETCH_OWN:
      return { ...state, loading: true };
    case FETCH_OWN_SUCCESS:
      return { ...state, stores: action.payload, loading: false };
    case FETCH_OWN_FAILED:
      return { ...state, loading: false };

    case FETCH_STORE:
      return { ...state, loading: true };
    case FETCH_STORE_SUCCESS:
      return { ...state, currentStore: action.payload, loading: false };
    case FETCH_STORE_FAILED:
      return { ...state, loading: false };

    case UPDATE_STORE:
      return { ...state, loading: true };
    case UPDATE_STORE_SUCCESS:
      return { ...state, loading: false };
    case UPDATE_STORE_FAILED:
      return { ...state, loading: false };

    case DELETE_STORE:
      return { ...state, loading: true };
    case DELETE_STORE_SUCCESS:
      return { ...state, loading: false };
    case DELETE_STORE_FAILED:
      return { ...state, loading: false };

    case SAVE_STORE:
      return { ...state, loading: true };
    case SAVE_STORE_SUCCESS:
      return { ...state, loading: false };
    case SAVE_STORE_FAILED:
      return { ...state, loading: false };

    case SET_CURRENT_STORE:
      return { ...state, currentStore: action.payload };

    case SAVE_ITEM:
      return { ...state, loading: true };
    case SAVE_ITEM_SUCCESS:
      return { ...state, loading: false };
    case SAVE_ITEM_FAILED:
      return { ...state, loading: false };

    case DELETE_ITEM:
      return { ...state, loading: true };
    case DELETE_ITEM_SUCCESS:
      return { ...state, loading: false };
    case DELETE_ITEM_FAILED:
      return { ...state, loading: false };

    case UPDATE_ITEM:
      return { ...state, loading: true };
    case UPDATE_ITEM_SUCCESS:
      return { ...state, loading: false };
    case UPDATE_ITEM_FAILED:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default storeReducer;
