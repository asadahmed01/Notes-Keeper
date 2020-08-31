import React, { useState } from 'react';

function Input(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (event) => {
    const{name, value} = event.target;
    
    setNote(prev => {
      
      return {
        ...prev,
        [name]: value
      }
    
    })
  };

  function submitNote (event) {
    if(note.title && note.content !== ""){
      props.onAdd(note)
    }
    
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  return <form>
    <input type="text"  name="title" onChange={handleChange} value={note.title} placeholder="Title"/>

    <input type="text" placeholder="Content" name="content" onChange={handleChange} value={note.content}/>
    <button onClick={submitNote}>Add</button>
  </form>
}

export default Input