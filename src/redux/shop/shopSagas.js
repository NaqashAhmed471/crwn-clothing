import { takeLatest, call, put, all } from "redux-saga/effects";

import { FETCH_COLLECTIONS_START } from "./shopType";

import {
  convertCollectionsSnapshotToMap,
  db,
} from "../../firebase/firebase.utils";

import { collection, getDocs } from "firebase/firestore";

import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shopAction";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = collection(db, "collection");
    const snapshot = yield getDocs(collectionRef);
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
