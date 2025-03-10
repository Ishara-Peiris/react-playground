import React, { useState } from 'react'

function Part2(props) {
  const [count, setCount] = useState(0); // State for count
  const maxLimit = 10;
  const minLimit = 0;

  const increase = () => {
    if (count < maxLimit) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > minLimit) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase} disabled={count === maxLimit}>Increase</button>
      <button onClick={decrease} disabled={count === minLimit}>Decrease</button>
      <button onClick={reset}>Reset</button>

      {count === maxLimit && <p style={{ color: 'red' }}>Reached Max Limit!</p>}
      {count === minLimit && <p style={{ color: 'blue' }}>Reached Min Limit!</p>}
    </div>
  );
  
}

export default Part2

