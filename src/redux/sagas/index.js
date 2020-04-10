import { all } from "redux-saga/effects";

import { fetchUsersSaga, watchUsersSaga } from './userSaga'

export default function* rootSaga() {
    yield all([
        fetchUsersSaga(),
        watchUsersSaga()
    ])
  }