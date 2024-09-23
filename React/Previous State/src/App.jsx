// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [prevCount, setPrevCount] = useState(null);
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <h2>Previous Count: {prevCount}</h2>
//       <button onClick={() => setCount((prev) => { setPrevCount(prev);  setCount(count + 5)})}>Increment</button>
//       {/* set State takes a callback function and return prev state value as prop */}
//     </div>
//   )
// }

// export default App;


// * Another Example of usage of previous State

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function updateCount() {
    {/*
    for (let i = 0; i < 5; i++) {
      setCount(count + 1);  // ! expected: should increment by 5 but it increments by 1 because count will update after update function not inside for loop, so it is using same old value
    }
    */}
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);  // * now working fine as it increments by 5
    }
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={updateCount}>Increment</button>
    </div>
  )
}

export default App;