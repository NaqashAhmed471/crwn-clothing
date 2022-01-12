import { call, put, takeLatest, all } from "redux-saga/effects";

import { SIGN_OUT_SUCCESS } from "../user/userType";

import { clearCart } from "./cartAction";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
