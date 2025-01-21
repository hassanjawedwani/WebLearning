// import { useState } from "react";
// import Todos from "./components/Todos";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { useState } from "react";
import { compile } from "sass";

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

// // export default Home

// import '../my-sass.scss';

// const Home = () => {
//   return (
//     <div className='div'>Home</div>
//   )
// }

// export default Home

// const Home = () => {
//   const [myCar, setMyCar] = useState({
//     name: "lamborgini",
//     model: "2024",
//     power: "1100 horse",
//     price: "200000"
//   });
//   return (
//     <div>
//       <h1>{myCar.name} {myCar.model} {myCar.power} {myCar.price}</h1>
//       <button onClick={() => { setMyCar(prev => { return { ...prev, name: "parado" } })}}>
//         Click em

//       </button>
//     </div>
//   )
// }

// export default Home

// const Home = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   }, []); // <- add empty brackets here

//   return <h1>Ive rendered {count} times!</h1>;
// }

// export default Home

// const Home = () => {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     let timer = setTimeout(() => {
//       setCalculation(count * count);
//     }, 1);
//     return () => clearTimeout(timer);
//   }, [count]);

//   return (
//     <div>
//       <h1>count: {count}</h1>
//       <button onClick={() => { setCount(prevCount => prevCount + 1);  }}>Increment in Count</button>
//       <h1>Calculations: {calculation}</h1>
//     </div>
//   )
// }

// export default Home

// const MyContext = createContext();

// const Home = () => {
//   return (
//     <MyContext.Provider value="hassan">
//       <Child1 />
//     </MyContext.Provider>
//   )
// }

// function Child1() {
//   return (
//     <div>
//       <Child2 />
//     </div>
//   )
// }

// function Child2() {
//   const val = useContext(MyContext);
//   return (
//     <h1>
//       {val}
//     </h1>
//   )
// }

// export default Home

// const Home = () => {
//   const [count, setCount] = useState(0);
//   const renderCount = useRef(0);

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1;
//   })

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => { setCount(count => count + 1) }}>Increment Count</button>
//       <h2>RenderCount: {renderCount.current} </h2>
//     </div>
//   )
// }

// export default Home

// const Home = () => {
//   const myRef = useRef();
//   return (
//     <div>
//       <input type="text" ref={myRef}/>
//       <button onClick={() => {myRef.current.focus()}}>SEt focus</button>
//     </div>
//   )
// }

// export default Home

// const Home = () => {
//   const [currentValue, setCurrentValue] = useState("");
//   const previousValue = useRef("");
//   useEffect(() => {
//     previousValue.current = currentValue;
//   }, [currentValue])
//   return (
//     <div>
//       <input type="text" value={currentValue} onChange={(e) => {setCurrentValue(e.target.value)}} />
//       <h1>CurrValue: {currentValue}</h1>
//       <h1>PreviousValue: {previousValue.current}</h1>
//     </div>
//   )
// }

// export default Home

// const Home = () => {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });
//   return (
//     <div>
//       <h1>count {state.count}</h1>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//     </div>
//   );
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       throw new Error("Unkown action type");
//   }
// }

// export default Home;

// const Home = () => {
//   const [todos, dispatch] = useReducer(reducer, [
//     {id: 1, task: "gota hell"},
//     {id: 2, task: "again gota hell"}
//   ]);

//   return (
//     <div>

//       <input type="text" placeholder="Enter new Task" onChange={(e) => {dispatch({type: "add", value: e.target.value})}}/>

//       <hr />
//       <p>here is your list of tasks:</p>
//       <ul>
//         {
//           todos.map((todo, index) => (
//           <li key={index}>{todo.task}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "add":
//       return [...state, {id: Date(), task: action.value}]
//   }
// }

// export default Home;

// const Home = () => {
//   const [todos, dispatch] = useReducer(reducer, []);
//   function handleSubmit(e) {
//     e.preventDefault();

//     const value = e.target.inputTask.value;
//     if (value.trim() === "") return;
//     dispatch({ type: "add", text: value });
//     e.target.inputTask.value = "";
//   }

//   function handleDelete(id) {
//     dispatch({ type: "del", id});
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="inputTask" placeholder="Enter new task" />
//         <button type="submit">Add</button>
//       </form>

//       <p>Here is Your Pending Tasks:</p>
//       <ul>
//         {
//           todos.map((todo) => <li key={todo.id}>{todo.text}
//             <button onClick={() => {handleDelete(todo.id)}} aria-label={`Delete ${todo.text}`}>Delete</button>
//           </li>)
//         }
//       </ul>
//     </>
//   )
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case "add":
//       return [...state, { id: Date.now(), text: action.text }];
//     case "del":
//       return state.filter(todo => todo.id !== action.id)
//     default:
//       throw new Error(`unexpected action type: ${action.type}`);
//   }
// }

// export default Home

const initialState = [
  {
    id: 1,
    title: "todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "todo 2",
    complete: true,
  },
  {
    id: 3,
    title: "todo 3",
    complete: false,
  },
];

function Home() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  function handleChange(todo) {
    dispatch({ type: "Complete", id: todo.id });
  }

  return (
    <>
      <h3>Here is your task list:</h3>
      {todos.map((todo) => (
        <label key={todo.id}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => {
              handleChange(todo);
            }}
          />
          {todo.title}
        </label>
      ))}
      {console.log(todos)}
    </>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "Complete":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
  }
}

export default Home;
