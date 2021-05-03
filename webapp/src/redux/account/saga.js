import { takeLatest, call, put } from "redux-saga/effects";

// api
import api from "../../api/api";

// history
import history from "../../utils/history";

import {
  GET_USER_INFO,
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  DELETE_ACCOUNT,
} from "./types";

// actions
import * as accountActions from "./actions";
import * as authActions from "../auth/actions";

function* getUserInfo() {
  try {

    console.log("getUserInfo")
    let { data } = yield call(() => {
      return api.get("user/user", { handlerEnabled: true });
    });

    console.log("getUserInfo", data)


    yield put(accountActions.getUserInfoSuccess(data));
  } catch {
    yield put(accountActions.getUserInfoFailed());
  }
}

function* changeName(action) {
  try {
    yield call(() => {
      return api.put("user/username", {
        handlerEnabled: true,
        userName: action.payload,
      });
    });

    let user = JSON.parse(localStorage.getItem("user"));
    user.username = action.payload;

    localStorage.setItem("user", JSON.stringify(user));

    yield put(authActions.signInSuccess(user));
    yield put(accountActions.changeNameSucces());
  } catch {
    yield put(accountActions.changeNameFailed());
  }
}

function* changeEmail(action) {
  try {
    yield call(() => {
      return api.put("user/email", {
        handlerEnabled: true,
        userEmail: action.payload,
      });
    });

    yield put(accountActions.changeEmailSuccess(action.payload));
  } catch {
    yield put(accountActions.changeEmailFailed());
  }
}

function* changePassword(action) {
  try {
    yield call(() => {
      return api.put("user/password", {
        handlerEnabled: true,
        currentPassword: action.payload.currentpassword,
        newPassword: action.payload.newpassword,
      });
    });
    history.push("/dashboard/app/account/basicinfo");
    yield put(accountActions.changePasswordSuccess());
  } catch {
    yield put(accountActions.changePasswordFailed());
  }
}

function* deleteAccount() {
  try {
    yield call(() => {
      return api.delete("user/user", { handlerEnabled: true });
    });

    yield put(accountActions.deleteAccountSuccess());
    yield put(authActions.signOut());
  } catch {
    yield put(accountActions.deleteAccountFailed());
  }
}

export function* watchAccount() {
  yield takeLatest(GET_USER_INFO, getUserInfo);
  yield takeLatest(CHANGE_NAME, changeName);
  yield takeLatest(CHANGE_EMAIL, changeEmail);
  yield takeLatest(CHANGE_PASSWORD, changePassword);
  yield takeLatest(DELETE_ACCOUNT, deleteAccount);
}
