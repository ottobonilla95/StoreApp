import api from "../../api/api";

// effects
import { takeLatest, put, call } from "redux-saga/effects";

// types
import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  SEND_PASS_EMAIL,
  SEND_CONFIRMATION_EMAIL,
} from "./types";

// actions
import * as authActions from "./actions";

// history
import history from "../../utils/history";

function* signIn(action) {
  try {
    let { data } = yield call(() => {
      return api.post("/user/signin", {
        handlerEnabled: false,
        userData: action.payload.userData,
      });
    });

    localStorage.setItem("user", JSON.stringify(data));

    history.push("/");

    yield put(authActions.signInSuccess(data));
  } catch (err) {
    yield put(authActions.signInFailed(err.message));
  }
}

function* singUp(action) {
  try {
    let { data } = yield call(() => {
      return api.post("/user/signup", {
        handlerEnabled: true,
        userData: action.payload,
      });
    });

    localStorage.setItem("user", JSON.stringify(data.user));

    history.push("/");

    yield put(authActions.signUpSuccess(data.user));
  } catch (err) {
    yield put(authActions.signUpFailed());
  }
}

function* sendPassEmail(action) {
  try {
    yield call(() => {
      return api.post("/user/resetpassword", {
        handlerEnabled: true,
        userData: { email: action.payload },
      });
    });

    history.push("/dashboard/user/signin");
    yield put(authActions.sendPassEmailSuccess());
  } catch {
    yield put(authActions.sendPassEmailFailed());
  }
}

function* sendConfirmationEmail(action) {
  try {
    yield call(() => {
      return api.post("/user/confirmationemail", {
        handlerEnabled: true,
        userData: action.payload.userData,
      });
    });
    yield put(authActions.sendConfirmationEmailSuccess());

    history.push("/dashboard/user/signin");
  } catch {
    yield put(authActions.sendConfirmationEmailFailed());
  }
}

function* signOut() {
  yield put(authActions.signOutSuccess());

  if (localStorage.getItem("user")) {
    localStorage.removeItem("user");
  }
  history.push("/dashboard/app/home");
  yield put(authActions.signOutSuccess());
}

export function* watchLogin() {
  yield takeLatest(SIGN_IN, signIn);
  yield takeLatest(SIGN_UP, singUp);
  yield takeLatest(SEND_PASS_EMAIL, sendPassEmail);
  yield takeLatest(SEND_CONFIRMATION_EMAIL, sendConfirmationEmail);
  yield takeLatest(SIGN_OUT, signOut);
}
