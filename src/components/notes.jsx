import React from 'react';

const Notes = (props) => {

  function handleClick() {
    props.onDelete(props.id);
  }
  return(
    <div className="note">
      <h1 className="title ">{props.title}</h1>
      <p className="content">{props.content}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  )
};

export default Notes;