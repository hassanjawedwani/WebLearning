import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )




// const jsx = (
//   <>
//     <h1>React is {4 * 2 + 2} times better with jsx</h1>
//     <h1 className="heading">hello world</h1>
//   </>
// );

// let x = 10;
// let str = "hello";
// if (x < 11) {
//   str = "goodbye";
// }

// const jsx = (
//   <>
//     <h1>{str}</h1>
//   </>
// );


// let x = 10;
// let str = "hello";

// const jsx = (
//   <>
//     <h1>{x < 11 ? str = "good" : str = "bad"}</h1>
//   </>
// );

// class Jsx extends React.Component {
//   render() {
//     return <h1>Hello world</h1>
//   }
// }



function Jsx(props) {
  return <h1><InnerJsx /> Hello World {props.color} Pakistan</h1>
}


import ReactDOM from 'react-dom/client'
import InnerJsx from './InnerJsx.jsx'
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Jsx color="Green"/>);