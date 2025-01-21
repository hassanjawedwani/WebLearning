// import { useState } from "react";
// import Todos from "./components/Todos";

// const Home = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState(["todo1", "todo2"]);
//   console.log("home render");
//   return (
//     <div>
//       <Todos list={todos} />
//       <h1>Count: {count}</h1>
//       <button onClick={() => { setCount(prev => prev + 1) }}>Increment</button>
//       <button onClick={() => { setTodos(prev => ([...prev, "abid"])) }}>add todo</button>
//     </div>
//   )
// }

// export default Home



// const Home = () => {
//   return (
//     <div style={{backgroundColor: "blue"}}>Home</div>
//   )
// }

// export default Home

// import './Home.css';
//
// const Home = () => {
//   const myStyling = {
//     backgroundColor: "blue",
//     fontSize: "24px",
//     color: "white"
//   };
//   return (
//     <div style={myStyling}>Home</div>
//   )
// // }

// import '../App.css';

// // export default Home
// import styles from "./Home.module.css";

// const Home = () => {
//   return (
//     <div className={styles.div}>Home</div>
//   )
// }

// export default Home

import '../my-sass.scss';

const Home = () => {
  return (
    <div className='div'>Home</div>
  )
}

export default Home