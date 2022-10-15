import { all, fork } from "redux-saga/effects";
import AddNotesSaga from "../containers/addList/store/sagas";

export default function* rootSaga() {
  yield all([fork(AddNotesSaga)]);
}
