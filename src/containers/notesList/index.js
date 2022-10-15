import React from "react";
import "./style.css";

function NotesList() {
  const dummydata = [
    {
      name: "salim",
      id: 1,
    },
    { name: "omar", id: 2 },
  ];
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
}

export default NotesList;
