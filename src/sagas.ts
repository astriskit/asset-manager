import { takeLatest, put, delay } from "redux-saga/effects";
import { loading, setData as setDataAction, getData, setErr } from "./actions";
import { data as mockData } from "./data";

const setData = function* () {
  try {
    yield put(loading(true));
    const data = yield delay(1000, mockData);
    yield put(setDataAction(data));
    yield put(loading(false));
  } catch (err) {
    yield put(setErr(err.message));
  }
};

export const watchForSetData = function* () {
  yield takeLatest(getData.type, setData);
};
