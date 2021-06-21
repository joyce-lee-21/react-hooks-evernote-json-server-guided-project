import React from "react";
import { Link } from "react-router-dom"

function NoteItem({id, title, body, selectedNoteId}) {

  const handleClick = () => {
    selectedNoteId(id)
  }

  const linkStyle = {
    color: 'inherit', 
    textDecoration: 'none'
  }

  return (
    <li onClick={handleClick}>
      <Link to={`/${id}`} style={linkStyle}>
        <h2 style={{overflowWrap: 'break-word'}}>{title}</h2>
        <p>{body.length > 15 ? body.substr(0, 15) + "..." : body}</p>
      </Link>
    </li>
  );
}

export default NoteItem;
