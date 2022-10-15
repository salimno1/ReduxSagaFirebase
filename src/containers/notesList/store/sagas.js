import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";
import {
  initFetchingGetListData,
  initFetchingGetListDataSuccessfull,
} from "./actions";
import { INIT_GET_LIST_DATA } from "./actionType";

export default function* NotesListSaga() {
  yield takeEvery(INIT_GET_LIST_DATA, getNotesListSaga);
}

function* getNotesListSaga() {
  yield put(initFetchingGetListData());
  try {
    const response = yield call(
      axios.get,
      "https://vitarplats-8e791-default-rtdb.europe-west1.firebasedatabase.app/notesList.json"
    );

    if (response && response.status === 200) {
      const { data } = response;
      const createData = [];

      for (const key in data) {
        createData.push(data[key]);
      }

      yield put(initFetchingGetListDataSuccessfull(createData));
    }
  } catch (error) {}
}
