import React, { useState } from 'react'

export default function Event(props) {

    function find(){
        console.log("button is clicked");
        alert("danger");
    }
    const [count,setCount] = useState(0);


    function addnum(){
      console.log("button clicked");
    }
    function addnum2(){
      setCount(count+4);
    }

    
  return (

    <div>
      <h1>React event</h1>
      <h1>COUNT:{count}</h1>
      <button onClick={addnum2}>number{props.age}</button>
      
      <button onClick={find}>click here</button>
    
   <h1>Add new student</h1>
   <button onClick={addnum} className='user-btn'>ADD</button>
  </div>
  )
}
