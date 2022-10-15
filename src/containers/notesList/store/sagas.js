import axios from "axios";
import { call, takeEvery } from "redux-saga/effects";
import { INIT_GET_LIST_DATA } from "./actionType";

export default function* NotesListSaga() {
  yield takeEvery(INIT_GET_LIST_DATA, getNotesListSaga);
}

function* getNotesListSaga() {
  console.log("list saga");

  try {
    const response = yield call(axios.get, "");
  } catch (error) {}
}
