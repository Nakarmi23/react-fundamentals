import React, { useState } from 'react';

// function useState(initialState) {
//   var currentState = initialState;

//   function setState(newState) {
//     currentState = newState;
//   }

//   return [currentState, setState];
// }

// useState
function FStateComponent() {
  let [count, setCount] = useState(0);

  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => increment()}>+</button>
    </div>
  );
}

export default FStateComponent;
