import React, { useEffect } from "react";
import { useRef } from "react";
import Child from "./Child";

const Student = () => {
  const myInputRef = useRef(null);

  useEffect(() => {
    console.log("use effect called")
    myInputRef.current.style = "background-color: red";
  }, []);

  return (
    <div>
      {console.log("student render")}
      {/* <h1>hello</h1> */}
      {/* <input type="text" placeholder="Enter Text" ref={myInputRef} /> */}
      {/* <button type="button" onClick={updateInput}>Update Input</button> */}
      <Child ref={myInputRef}/>

    </div>
  );
};

export default Student;
