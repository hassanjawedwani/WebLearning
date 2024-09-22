import { useEffect, useRef } from "react";

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
}

export default User;