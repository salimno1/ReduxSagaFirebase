import { combineReducers } from "redux";
import AddNotesReducer from "../containers/addList/store/reducers";
import NotesListReducer from "../containers/notesList/store/reducers";

const rootReducer = combineReducers({ AddNotesReducer, NotesListReducer });

export default rootReducer;
