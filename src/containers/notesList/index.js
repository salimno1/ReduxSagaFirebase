import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initGetListData } from "./store/actions";
import "./style.css";
const dummydata = [
  {
    name: "salim",
    id: 1,
  },
  { name: "omar", id: 2 },
];
const NotesList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initGetListData());
  });
  return (
    <div className="notes-list-wrapper">
      <h1>notes list</h1>

      <ul>
        {dummydata.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
