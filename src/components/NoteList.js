import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, selectedNoteId}) {
  return (
    <ul>
      {notes.map(note => {
        return (
          <NoteItem 
            key={note.id} 
            id={note.id}
            title={note.title} 
            body={note.body}
            selectedNoteId={selectedNoteId}
          />
        )
      })}
    </ul>
  );
}

export default NoteList;
