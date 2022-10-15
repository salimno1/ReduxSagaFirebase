import { combineReducers } from "redux";
import AddNotesReducer from "../containers/addList/store/reducers";

const rootReducer = combineReducers({ AddNotesReducer });

export default rootReducer;
