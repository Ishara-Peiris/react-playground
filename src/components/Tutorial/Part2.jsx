import React, { useState } from 'react'

function Part2(props) {
  const [count, setCount] = useState(0); // Correct useState syntax

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default Part2

