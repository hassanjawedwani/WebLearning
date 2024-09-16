import { useMemo } from "react";

const { useState } = require("react");

function Student() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const multiplierMemo = useMemo(function multiplier() {
    console.log("multiplier called");
    return counter1 * 10;
  }, [counter1]);
  return (
    <div>
      <h1>Counter1: {counter1}</h1>
      <button type="button" onClick={() => setCounter1(counter1 + 1)}>
        Increment Counter 1
      </button>
      <h1>Counter2: {counter2}</h1>
      <button type="button" onClick={() => setCounter2(counter2 + 1)}>
        Increment Counter 2
      </button>
      <h1>Multiplier: {multiplierMemo}</h1>
    </div>
  );
}

export default Student;