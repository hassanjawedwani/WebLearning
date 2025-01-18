import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";

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

// class SubJsx extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       color: "blue"
//     }
//   }
//   render() {
//     return <h1>Hello {this.state.color} World</h1>
//   }
// }

// class SubJsx extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <span>Hello {this.props.color} World</span>
//   }
// }

class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "blue",
    };
  }
  changeColor = () => {
    this.setState({ color: "red" });
  }

  render() {
    return <div style={{ backgroundColor: this.state.color }}>hello world<button onClick={this.changeColor}>Change color</button></div>;
  }
}

function Jsx() {
  return (
    <>
      <Car />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Jsx />);
