import React, { useEffect, useState } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notes, setNotes] = useState([])
  const [noteId, setNoteId] = useState(0)
  const [viewNote,setViewNote] = useState()
  const [search, setSearch] = useState("")
  const [editView, setEditView] = useState(false)
  const [filterBy, setFilterBy] = useState("title")
  // const [updatedNotes, setUpdatedNotes] = useState()
  // const [filteredNotes, setFilteredNote] = useState


  useEffect(() => {
    fetch('http://localhost:3000/notes')
    .then(r => r.json())
    .then(data => setNotes(data))
  },[])

  const onSelectedNoteId = (id) => {
    setNoteId(id)
    setViewNote(notes.filter(note => note.id === id))
    setEditView(false)
  }

  const setEdit = () => {
    setEditView(true)
  }

  const onCancelEdit = () => {
    setEditView(false)
  }

  const onNewNote = (newNote) => {
    setNotes([...notes, newNote])
  }

  const onUpdateNote = (updatedNote) => {
    setNotes(notes.map(note => {
      return note.id === updatedNote.id 
      ? (note = updatedNote)
      : note
    }))
  }

  const onSearchTitle = (query) => {
    setSearch(query)
  }

  const onSearchFilter = (filter) => {
    setFilterBy(filter)
  }

  const filteredNotes = notes.filter(note => {
    const query = search.toLowerCase() 
    if (search === "") {
      return true
    } else if (filterBy === "title") {
      const title = note.title.toLowerCase()
      return title.includes(query)
    } else if (filterBy === "body") {
      const body = note.body.toLowerCase()
      return body.includes(query)
    } else {
      return null
    }
  })

  // console.log(search)
  // console.log(filteredNotes)

  return (
    <>
      <Search searchTitle={onSearchTitle} searchFilter={onSearchFilter} filterBy={filterBy}/>
      <div className="container">
        <Sidebar notes={filteredNotes} selectedNoteId={onSelectedNoteId} newNote={onNewNote}/>
        <Content editView={editView} note={viewNote} noteId={noteId} updateNote={onUpdateNote} setEdit={setEdit} cancelEdit={onCancelEdit}/>
      </div>
    </>
  )
}

export default NoteContainer;
