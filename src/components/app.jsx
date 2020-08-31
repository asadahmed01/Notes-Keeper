import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Notes from './notes';
import Input from './Input'
import sample from './sampleNotes';


const App = () => {
  const [notesArray, setNotesArray] = useState([]);
  function addNote(note){
    setNotesArray(prev => {
      return [...prev, note];
    })
  };

  function deleteNote(id){
    setNotesArray(prev =>{
      return prev.filter((note, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div>
      <Header />
      <Input onAdd={addNote}/>
          {notesArray.map((note, index) => {
          return <Notes
          key={index}
          id={index}
          title={note.title}
          content={note.content} onDelete={deleteNote}/>
          })}
      <Footer />
    </div>
  );
};
export default App;



// {sample.map((note) => {
//   return <Notes
//     key={note.key}
//     title={note.title}
//     content={note.content} />
// })}