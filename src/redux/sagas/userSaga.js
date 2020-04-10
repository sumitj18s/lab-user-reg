import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../api";
import {
  USERS_LOAD,
  USERS_LOAD_SUCCESS,
  USERS_CREATE,
  USERS_CREATE_SUCCESS,
} from "../actions";

function* fetchUsersSaga() {
  try {
    const data = yield call(api().getUsers);
    yield put({ type: USERS_LOAD_SUCCESS, data });
  } catch (error) {
    yield put(error);
  }
}

function* createUsersSaga(props) {
  try {
    console.log("*** createUsers", {
      name: props.data.name,
      address: props.data.address,
      city: props.data.city,
    });
    yield call(api().submitUser, {
      name: props.data.name,
      address: props.data.address,
      city: props.data.city,
    });

    yield put({ type: USERS_CREATE_SUCCESS});
  } catch (error) {
    yield put(error);
  }
}

function* watchUsersSaga() {
  yield takeLatest(USERS_LOAD, fetchUsersSaga),
    yield takeLatest(USERS_CREATE, createUsersSaga);
}

export { watchUsersSaga as userSaga };
