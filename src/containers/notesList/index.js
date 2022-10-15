import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initGetListData } from "./store/actions";
import "./style.css";

const NotesList = () => {
  const dispatch = useDispatch();
  const { notesList, isNotesDataFetching } = useSelector(
    (state) => state.NotesListReducer
  );

  console.log(notesList, isNotesDataFetching);

  useEffect(() => {
    dispatch(initGetListData());
  }, []);

  if (isNotesDataFetching) {
    <div>data is fethcing</div>;
  }
  return (
    <div className="notes-list-wrapper">
      <h1>notes list</h1>

      <ul>
        {notesList &&
          notesList.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
};

export default NotesList;
