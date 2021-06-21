import React from "react";
import { Link } from "react-router-dom"

function NoteViewer({note, setEdit}) {
  // console.log(note)

  const toggleEdit = () => {
    setEdit(true)
  }

  return (
    <>
      <h2>{note[0].title}</h2>
      <p>{note[0].body}</p>
      <Link to={`/${note[0].id}/edit`}>
        <button onClick={toggleEdit}>Edit</button>
      </Link>
    </>
  );
}

export default NoteViewer;
