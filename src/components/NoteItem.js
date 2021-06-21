import React from "react";

function NoteItem({id, title, body, selectedNoteId}) {

  const handleClick = () => {
    selectedNoteId(id)
  }


  return (
    <li onClick={handleClick}>
      <h2 style={{overflowWrap: 'break-word'}}>{title}</h2>
      <p>{body.length > 15 ? body.substr(0, 15) + "..." : body}</p>
    </li>
  );
}

export default NoteItem;
