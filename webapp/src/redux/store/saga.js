import api from "../../api/api";

// effects
import { takeLatest, put, call } from "redux-saga/effects";

// types
import {
  FETCH_STORES,
  FETCH_OWN,
  FETCH_STORE,
  SAVE_STORE,
  UPDATE_STORE,
  DELETE_STORE,
  START_LOADING,
  LOAD_ITEMS,
  SAVE_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  DELETE_ITEM_FINISHED,
} from "./types";

// actions
import * as storeActions from "./actions";

// history
import history from "../../utils/history";

function* fetchStores(action) {
  try {
    let pagination = action.payload;

    let { data } = yield call(() => {
      return api.get("/store/all", {
        handlerEnabled: true,
        params: { pagination },
      });
    });

    yield put(storeActions.fetchStoresSuccess(data.stores));
  } catch (err) {
    yield put(storeActions.fetchStoresFailed());
  }
}

// Get user stores
function* fetchOwn(action) {
  try {
    let pagination = action.payload;

    let { data } = yield call(() => {
      return api.get("store/ownstores", {
        handlerEnabled: true,
        params: { pagination },
      });
    });
    yield put(storeActions.fetchOwnStoresSuccess(data.stores));
  } catch (err) {
    yield put(storeActions.fetchOwnStoresFailed());
  }
}

// Get unique store
function* fetcStore(action) {
  try {
    let { data } = yield call(() => {
      return api.get(`/store/${action.payload}`, { handlerEnabled: true });
    }, action.payload);

    yield put(storeActions.fetchStoreSuccess(data));
  } catch (err) {
    yield put(storeActions.fetchStoreFailed());
  }
}

// Save store
function* saveStore(action) {
  try {
    yield call(() => {
      return api.post(`/store/creation`, {
        handlerEnabled: true,
        storeData: action.payload,
      });
    });
    history.push("/dashboard/app/store");

    yield put(storeActions.saveStoreSuccess());
  } catch (err) {
    yield put(storeActions.saveStoreFailed());
  }
}

// Update store
function* updateStore(action) {
  try {
    yield call(() => {
      return api.put(`/store/${action.payload.id}`, {
        handlerEnabled: true,
        storeData: action.payload,
      });
    });
    history.push("/dashboard/app/store");
    yield put(storeActions.updateStoreSuccess());
  } catch (err) {
    yield put(storeActions.updateStoreFailed());
  }
}

// Delete store
function* deleteStore(action) {
  try {
    yield call(() => {
      return api.delete(`/store/${action.payload}`, { handlerEnabled: true });
    });
    history.push("/dashboard/app/store");
    yield put(storeActions.deleteStoreSuccess());
  } catch (err) {
    yield put(storeActions.deleteStoreFailed());
  }
}

function* saveItem(action) {
  try {
    var itemData = action.payload;

    let { data } = yield call(() => {
      return api.post("store/item", { handlerEnabled: true, itemData });
    });

    yield put(storeActions.saveItemSuccess());
    yield put(storeActions.fetchStore(itemData.store_id));
  } catch (err) {
    yield put(storeActions.saveItemFailed());
  }
}

function* updateItem(action) {
  try {
    var itemData = action.payload;

    let { data } = yield call(() => {
      return api.put(`store/item/${itemData.id}`, {
        handlerEnabled: true,
        itemData,
      });
    });

    yield put(storeActions.updateItemSuccess());
    yield put(storeActions.fetchStore(itemData.store_id));
  } catch (err) {
    yield put(storeActions.updateItemFailed());
  }
}

function* deleteItem(action) {
  try {
    var itemId = action.payload.id;

    yield call(() => {
      return api.delete(`store/item/${itemId}`, { handlerEnabled: true });
    });
    yield put(storeActions.deleteItemSuccess());
    yield put(storeActions.fetchStore(action.payload.store_id));
  } catch (err) {
    yield put(storeActions.deleteItemFailed());
  }
}

export function* watchFetchAll() {
  //Stores
  yield takeLatest(FETCH_STORES, fetchStores);
  yield takeLatest(FETCH_OWN, fetchOwn);
  yield takeLatest(FETCH_STORE, fetcStore);
  yield takeLatest(SAVE_STORE, saveStore);
  yield takeLatest(UPDATE_STORE, updateStore);
  yield takeLatest(DELETE_STORE, deleteStore);

  //Items
  yield takeLatest(SAVE_ITEM, saveItem);
  yield takeLatest(UPDATE_ITEM, updateItem);
  yield takeLatest(DELETE_ITEM, deleteItem);
}
