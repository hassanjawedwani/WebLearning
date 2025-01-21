import  { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

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

// class Parent extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       show: true,
//     };
//   }

//   render() {
//     return (
//       <div>
//         {this.state.show && <Child />}
//         <button
//           onClick={() => {
//             this.setState({ show: false });
//           }}
//         >
//           Delete Child
//         </button>
//       </div>
//     );
//   }
// }

// class Child extends React.Component {
//   componentWillUnmount() {
//     alert("i am child component is going to unmount");
//   }
//   render() {
//     return <h1>child component</h1>;
//   }
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Parent />);

// function Gates(props) {
//   props.gates = { modle : 'fov'}
//   return (
//     <span>This has {props.gates.front} front gates & {props.gates.back} back gates.</span>
//   )
// }


// function Car() {
//   const gates = { front: 2, back: 2 };
//   return (
//     <h1>This is amazing car. <Gates gates={gates} /></h1>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Car />);



// function Football() {
//   function shoot() {
//     alert("Wow great Shoot!")
//   }
//   return (
//     <button onClick={shoot}>Shoot a Kick</button>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Football />);


// ! working without clicking button
// function Football() {
//   function shoot(power) {
//     alert(`Wow power ${power} great Shoot!`)
//   }
//   return (
//     <button onClick={shoot(8)}>Shoot a Kick</button>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Football />);

// * solution
// function Football() {
//   function shoot(power) {
//     alert(`Wow power ${power} great Shoot!`)
//   }
//   return (
//     <button onClick={() => { shoot(8) }}>Shoot a Kick</button>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Football />);



// function Football(props) {
//   if (props.isGoal) {
//     return (
//       <h1>Hurray Goal!</h1>
//     )
//   } else {
//     return (
//       <h1>oHh! missed</h1>
//     )
//   }
// }

// function Football(props) {
//   return (
//     <h1>{props.isGoal ? "Hurray Goal" : "ohh missed"}</h1>
//   )
// }

// function Football() {
//   const team = ["ronaldo", "messi"]
//   return (
//     <h1>
//       {
//         team.map((player, index) => <span key={index}>{player}<br /></span>)
//       }
//     </h1>
//   )
// }

// function Car({brand}) {
//   return (
//     <li>I have {brand}.</li>
//   )
// }


// function Garage() {
//   const cars = ["Ford", "Lamborgini", "Ferari", "Tesla"];
//   return (
//     <div>
//       <p>I have many cars some are given below:</p>
//       <ul>
//         {
//           cars.map((car, index) => <Car key={index} brand={car} />)
//         }
//       </ul>
//     </div>
//   )
// }


// ReactDOM.createRoot(document.getElementById("root")).render(<Garage />);


// function MyForm() {
//   const [username, setUsername] = useState("");
//   return (
//     <form onSubmit={(e) => { e.preventDefault(); alert(`username: ${username}`) }}>
//       <label>Enter Username:</label>
//       <input type="text" name="username" onChange={(e) => { setUsername(e.target.value) }} value={username} />
//       <h1>Username: {username}</h1>
//     </form>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<MyForm />);


// function MyForm() {
//   const [data, setData] = useState({});

//   function handleChange(e) {
//     const name = e.target.name;
//     const value = e.target.value;
//     setData(data => ({ ...data, [name]: value }));
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(data);
//   }

//   return (
//     <form>
//       <label htmlFor="username" >UserName</label>
//       <input type="text" id="username" name="username" onChange={(e) => { handleChange(e) }} value={data.username || ""} />
//       <label htmlFor="password" >Password</label>
//       <input type="password" id="password" name="password" onChange={(e) => { handleChange (e)}} value={data.password || ""} />
//       <button type="submit" onClick={handleSubmit}>Submit</button>
//     </form>
//   )
// }



// function MyForm() {
//   const [textarea, setTextarea] = useState("write Comment...");
//   return (
//     <textarea name="comments" id="comment" value={textarea} onChange={(e) => {setTextarea(e.target.value)}} />
//   )
// }

// function MyForm() {
//   const [favcar, setFavcar] = useState("ford");
//   function handleSubmit(e) {
//     setFavcar(e.target.value);
//   }
//   return (
//     <fieldset>
//       <legend>Which is your fav car?</legend>
//       <select value={favcar} onChange={handleSubmit}>
//         <option value="ford">Ford</option>
//         <option value="lamborgini">Lamborgini</option>
//         <option value="ferari">Ferari</option>
//       </select>
//       <h1>FavoriteCar: {favcar}</h1>
//     </fieldset>
//   )
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<MyForm />);;


// ReactDOM.createRoot(document.getElementById("root")).render(<App />);