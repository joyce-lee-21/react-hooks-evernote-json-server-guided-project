import React from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";
import { Route, Switch } from 'react-router-dom';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content({editView, note, noteId, updateNote, setEdit, cancelEdit}) {
  //if edit view is true, go to Note Editor; else go to noteViewer
  
  // const [viewedNote, setViewedNote] = useState(noteId)

  //conditional for if noteId !== NoteEditor noteId, set view to false

  // const getContent = () => {
  //   if (editView) {
  //     return <NoteEditor note={note} noteId={noteId} updateNote={updateNote} cancelEdit={cancelEdit}/>;
  //   } else if (noteId !== 0) {
  //     return <NoteViewer note={note} setEdit={setEdit}/>;
  //   } else {
  //     return <Instructions />;
  //   }
  // };

  return (
    <div className="master-detail-element detail">
      <Switch>
        <Route path = {`/${noteId}/edit`}>
          <NoteEditor note={note} noteId={noteId} updateNote={updateNote} cancelEdit={cancelEdit}/>
        </Route>
        <Route exact path = {`/${noteId}`}>
          <NoteViewer note={note} setEdit={setEdit}/>
        </Route>
        <Route exact path = "/">
          <Instructions />
        </Route>
      </Switch>
    </div>
  )
}

export default Content;
