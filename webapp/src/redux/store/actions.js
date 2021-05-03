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
  SAVE_STORE,
  SAVE_STORE_SUCCESS,
  SAVE_STORE_FAILED,
  UPDATE_STORE,
  UPDATE_STORE_SUCCESS,
  UPDATE_STORE_FAILED,
  DELETE_STORE,
  DELETE_STORE_SUCCESS,
  DELETE_STORE_FAILED,
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

//fetchStores
export const fetchStores = (pagination) => {
  return { type: FETCH_STORES, payload: pagination };
};

export const fetchStoresSuccess = (stores) => {
  return { type: FETCH_STORES_SUCCESS, payload: stores };
};
export const fetchStoresFailed = () => {
  return { type: FETCH_STORES_FAILED };
};
// fetchOwnStores
export const fetchOwnStores = (pagination) => {
  return { type: FETCH_OWN, payload: pagination };
};
export const fetchOwnStoresSuccess = (stores) => {
  return { type: FETCH_OWN_SUCCESS, payload: stores };
};
export const fetchOwnStoresFailed = () => {
  return { type: FETCH_OWN_FAILED };
};
// fetchStore
export const fetchStore = (storeId) => {
  return { type: FETCH_STORE, payload: storeId };
};
export const fetchStoreSuccess = (store) => {
  return { type: FETCH_STORE_SUCCESS, payload: store };
};
export const fetchStoreFailed = () => {
  return { type: FETCH_STORE_FAILED };
};
// saveStore
export const saveStore = (storeData) => {
  return { type: SAVE_STORE, payload: storeData };
};
export const saveStoreSuccess = () => {
  return { type: SAVE_STORE_SUCCESS };
};
export const saveStoreFailed = () => {
  return { type: SAVE_STORE_FAILED };
};
// updateStore
export const updateStore = (storeData) => {
  return { type: UPDATE_STORE, payload: storeData };
};
export const updateStoreSuccess = () => {
  return { type: UPDATE_STORE_SUCCESS };
};
export const updateStoreFailed = (storeData) => {
  return { type: UPDATE_STORE_FAILED };
};

// deleteStore
export const deleteStore = (storeId) => {
  return { type: DELETE_STORE, payload: storeId };
};
export const deleteStoreSuccess = () => {
  return { type: DELETE_STORE_SUCCESS };
};
export const deleteStoreFailed = () => {
  return { type: DELETE_STORE_FAILED };
};

// setCurrentStore
export const setCurrentStore = (store) => {
  return { type: SET_CURRENT_STORE, payload: store };
};

// // // items
// saveItem
export const saveItem = (itemData) => {
  return { type: SAVE_ITEM, payload: itemData };
};
export const saveItemSuccess = () => {
  return { type: SAVE_ITEM_SUCCESS };
};
export const saveItemFailed = () => {
  return { type: SAVE_ITEM_FAILED };
};

// updateItem
export const updateItem = (itemData) => {
  return { type: UPDATE_ITEM, payload: itemData };
};
export const updateItemSuccess = () => {
  return { type: UPDATE_ITEM_SUCCESS };
};
export const updateItemFailed = () => {
  return { type: UPDATE_ITEM_FAILED };
};

// deleteItem
export const deleteItem = (item) => {
  return { type: DELETE_ITEM, payload: item };
};
export const deleteItemSuccess = () => {
  return { type: DELETE_ITEM_SUCCESS };
};
export const deleteItemFailed = () => {
  return { type: DELETE_ITEM_FAILED };
};
