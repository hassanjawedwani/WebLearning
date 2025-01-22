import { memo } from "react";

const Todo = ({ todos, addTodo }) => {
  console.log("Todo render");
  return (
    <>
      {
        todos.map((todo, index) => <p key={index}>{todo}</p>)
      }
      <button onClick={addTodo}>Add todo</button>
    </>
  )
}

export default memo(Todo);