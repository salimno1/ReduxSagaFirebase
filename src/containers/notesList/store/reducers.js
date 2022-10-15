import {
  FETCHING_GET_LIST_DATA,
  FETCHING_GET_LIST_DATA_FAILED,
  FETCHING_GET_LIST_DATA_SUCCESS,
  INIT_GET_LIST_DATA,
} from "./actionType";

const initialState = {
  notesList: [],
  isNotesDataFetching: false,
  isNotesDataFetchingFailed: false,
};

const NotesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_GET_LIST_DATA:
      return {
        ...state,
        isNotesDataFetching: true,
      };
    case FETCHING_GET_LIST_DATA_SUCCESS:
      return {
        ...state,
        notesList: action.noteListData,
      };
    case FETCHING_GET_LIST_DATA_FAILED:
      return {
        ...state,
        isNotesDataFetchingFailed: true,
      };

    default:
      return state;
  }
};

export default NotesListReducer;
