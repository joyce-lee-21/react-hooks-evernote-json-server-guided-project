import React from "react";

function NoteViewer({note, setEdit}) {
  // console.log(note)

  const toggleEdit = () => {
    setEdit(true)
  }

  return (
    <>
      <h2>{note[0].title}</h2>
      <p>{note[0].body}</p>
      <button onClick={toggleEdit}>Edit</button>
    </>
  );
}

export default NoteViewer;
