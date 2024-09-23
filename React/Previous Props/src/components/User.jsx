import { useEffect, useRef, useState } from "react";

function User({ count }) {
  const lastVal = useRef();
  useEffect(() => {
    lastVal.current = count;
  });
  const prevValue = lastVal.current;

  return (
    <div>
      <h1>User Component Count as Props : {count}</h1>
      <h1>User Component Count as PrevProps : {prevValue}</h1>
    </div>
  )
  
  
  // ? why used ref ? let's do with state
  // const [prevProps, setPreviousProps] = useState();
  // useEffect(() => {
  //   setPreviousProps(count); 
  // });
  // ! here problem is when we render and then use effect to store value in prevProps it rerender the render function
  // ! which cause to use show prev Props to 0 instead of nothing ()
  
  

  return (
    <div>
      <h1>User Component Count as Props : {count}</h1>
      <h1>User Component Count as PrevProps : {prevProps}</h1>
    </div>
  )


  
}

export default User;