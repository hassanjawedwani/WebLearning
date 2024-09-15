import React from "react";

class Student extends React.Component {
  constructor(props) {
    console.log("Student constructor called");
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log("Student componentDidMount called");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Student componentDidUpdate called");
    console.log("prevState", prevState.count);
    console.log("currentState", this.state.count);
  }

  render() {
    console.log("Student render called");
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
      </div>
    )
  }
}

export default Student;