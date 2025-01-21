import { memo } from "react";

function Todos(props) {
  console.log("todos render");
  return (
    <ul>
      {
        props.list.map((todo, index) => <li key={index}>{todo}</li>)
      }
    </ul>
  )
}

export default memo(Todos);