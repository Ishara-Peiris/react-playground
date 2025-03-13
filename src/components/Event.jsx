import React from 'react'

export default function event() {

    function find(){
        console.log("button is clicked");
        alert("danger");
    }
    const number=0;

  return (
    <div>
      <h1>React event</h1>
      
      <button onClick={number}>number</button>
      
      <button onClick={find}>click here</button>
    </div>
  )
}
