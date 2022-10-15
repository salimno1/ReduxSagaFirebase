import { takeEvery, call, put } from "redux-saga/effects";
import { INIT_SAVE_NOTES_VALUE } from "./actionType";
import axios from "axios";
import { initSaveNotesFailed, initSaveNotesSuccessfull } from "./actions";

export default function* AddNotesSaga() {
  yield takeEvery(INIT_SAVE_NOTES_VALUE, saveNotesSaga);
}

function* saveNotesSaga(action) {
  console.log("getting notes saga here", action);

  const headerParams = {
    "content-type": "application/json",
  };
  const createFinalNotesData = {
    name: action.noteValue,
    id: Math.floor(Math.random() * 100),
  };

  console.log(createFinalNotesData);

  try {
    const response = yield call(
      axios.post,
      "https://vitarplats-8e791-default-rtdb.europe-west1.firebasedatabase.app/notesList.json",
      createFinalNotesData,
      { headers: headerParams }
    );

    if (response.status === 200) {
      yield put(initSaveNotesSuccessfull(true));
    }
    console.log(response);
  } catch (error) {
    yield put(initSaveNotesFailed(true));
    console.log(error);
  }
}
