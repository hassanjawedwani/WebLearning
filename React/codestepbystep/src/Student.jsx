import { useState } from "react";

function Student() {
  return (
    <div>
      <h2>Red Counter</h2>
      <RedCounter cmp={<Counter />} />
      <h2>Green Counter</h2>
      <GreenCounter cmp={<Counter />}/>
      <h2>Blue Counter</h2>
      <BlueCounter  cmp={<Counter />}/>
    </div>
  )
}


function RedCounter(props) {
  return <div style={{ backgroundColor: "red" }}>{props.cmp}</div>
}

function GreenCounter(props) {
  return <div style={{backgroundColor: "green"}}>{props.cmp}</div>
}

function BlueCounter(props) {
  return <div style={{backgroundColor: "blue"}}>{props.cmp}</div>
}

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button type="button" onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}












export default Student;
