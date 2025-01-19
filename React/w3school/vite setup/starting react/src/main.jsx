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

// class Car extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       color: "blue",
//     };
//   }
//   changeColor = () => {
//     this.setState({ color: "red" });
//   }

//   render() {
//     return <div style={{ backgroundColor: this.state.color }}>hello world<button onClick={this.changeColor}>Change color</button></div>;
//   }
// }

// // eslint-disable-next-line react-refresh/only-export-components
// function Jsx() {
//   return (
//     <>
//       <Car />
//     </>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Jsx />);

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favouriteColor: "red"
//     }
//   }
//   // static getDerivedStateFromProps(props, state) {
//   //   return { favouriteColor: props.favColor };
//   // }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ favouriteColor: "blue" });
//     }, 3000);
//   }
//   render() {
//     return (
//       <h1>My favourite Color is {this.state.favouriteColor}</h1>
//     )
//   }
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Header favColor="yellow" />);

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favouriteColor: "red"
//     }
//   }
//   static getDerivedStateFromProps(props, state) {
//     console.log("getDerivedFromProps functions called");
//     return { favouriteColor: props.favColor };
//   }
//   render() {
//     console.log("Render function called")
//     return (
//       <div>
//        <h1>My favourite Color is {this.state.favouriteColor}</h1>
//         <button onClick={() => { this.setState({ favouriteColor: "purple" }) }}>Click</button>
//       </div>
//     )
//   }
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Header favColor="yellow" />);

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       favouriteColor: "red"
//     }
//   }
//   shouldComponentUpdate() {
//     return true;
//   }
//   render() {
//     console.log("Render function called")
//     return (
//       <div>
//        <h1>My favourite Color is {this.state.favouriteColor}</h1>
//         <button onClick={() => { this.setState({ favouriteColor: "purple" }) }}>Click</button>
//       </div>
//     )
//   }
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Header favColor="yellow" />);

// class Header extends React.Component {
//   constructor(props) {
//     console.log("constructor called")
//     super(props);
//     this.state = {
//       favouriteColor: "red"
//     }
//   }

//   componentDidMount() {
//     console.log("componentdidmount called")
//     setTimeout(() => {
//       this.setState({favouriteColor: "green"})
//     }, 3000)
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("getSnapshotBeforeUpdate called");
//     console.log("prev state value is ", prevState.favouriteColor);
//   }

//   componentDidUpdate() {
//     console.log("componentDidUpdate called");
//     console.log("state value", this.state.favouriteColor)
//   }

//   render() {
//     console.log("Render function called")
//     return (
//       <div>
//        <h1>My favourite Color is {this.state.favouriteColor}</h1>
//         <button onClick={() => { this.setState({ favouriteColor: "purple" }) }}>Click</button>
//       </div>
//     )
//   }
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Header favColor="yellow" />);

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <div>
        {this.state.show && <Child />}
        <button
          onClick={() => {
            this.setState({ show: false });
          }}
        >
          Delete Child
        </button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("i am child component is going to unmount");
  }
  render() {
    return <h1>child component</h1>;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<Parent />);
