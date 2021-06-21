import React, { useState } from "react";

function NoteEditor({note, updateNote, cancelEdit}) {
  const [title, setTitle] = useState(note[0].title)
  const [body, setBody] = useState(note[0].body)

  // console.log(note[0].title)

  const handleSubmit = (e) => {
    e.preventDefault()
    let updatedNote = {
      id: note[0].id,
      userId: 1,
      title: title,
      body: body
    }

    fetch(`http://localhost:3000/notes/${note[0].id}`, {
      method: "PATCH",
      headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        title: title,
        body: body
      })
    })
    return updateNote(updatedNote)
  }

  const handleClick = () => {
    cancelEdit(true)
  }

  return (
    <form className="note-editor" onSubmit={handleSubmit}>
      <input type="text" name="title" onChange={e => setTitle(e.target.value)} value={title}/>
      <textarea name="body" onChange={e => setBody(e.target.value)} value={body}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={handleClick}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
