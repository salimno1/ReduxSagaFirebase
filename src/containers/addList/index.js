import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { initSaveNotesValue } from "./store/actions";
import "./style.css";

function Addnew() {
  const [notesName, setNotesName] = useState("");
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { value } = e.target;

    setNotesName(value);
  };

  const handleClick = () => {
    dispatch(initSaveNotesValue(notesName));
  };
  return (
    <div classname="add-new-note-wrap">
      <h1>add new note</h1>

      <div className="form-wrapper">
        <input
          name="addTodo"
          placeholder="enter a todo"
          onChange={handleOnChange}
        />
        <button onClick={handleClick}>add</button>
      </div>
    </div>
  );
}

export default Addnew;
