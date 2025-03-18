import React, { useState } from 'react'

export default function Event() {

    function find(){
        console.log("button is clicked");
        alert("danger");
    }
    const [count,setCount] = useState(0);

    
    
  return (

    <div>
      <h1>React event</h1>
      <h1>COUNT:{count}</h1>
      <button onClick={()=>setCount(count+2)}>number</button>
      
      <button onClick={find}>click here</button>
    
   <h1>Add new student</h1>
   <button className='user-btn'>ADD</button>
  </div>
  )
}
