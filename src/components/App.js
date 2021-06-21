import React from "react";
import Header from "./Header";
import NoteContainer from "./NoteContainer";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <NoteContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
