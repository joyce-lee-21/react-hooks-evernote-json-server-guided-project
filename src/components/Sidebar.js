import React from "react";
import NoteList from "./NoteList";

function Sidebar({notes, selectedNoteId, newNote}) {
  const handleClick = () => {
    let newNoteObj = {
      title: "Title",
      body: "Body",
      userId: 1,
    }
    newNote(newNoteObj)

    fetch('http://localhost:3000/notes', {
      method: "POST",
      headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify(newNoteObj)
    })
  }

  return (
    <div className="master-detail-element sidebar">
      <NoteList key={notes} notes={notes} selectedNoteId={selectedNoteId}/>
      <button onClick={handleClick}>New</button>
    </div>
  );
}

export default Sidebar;
