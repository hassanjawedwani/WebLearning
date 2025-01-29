import React from "react";

class Car extends React.Component {
  constructor() {
    super();
    console.log("Constructor called First place ");
    this.state = {};
  }
  static getDerivedStateFromProps(props, state) {
    console.log("GetDerivedstatesfrom props called after constructor and before render and componentdidmount")
    return {};
  }
  render() {
    console.log("render called after constructor");
    return (
      <h1>Car Component</h1>
    )
  }
  componentDidMount() {
    console.log("componentdidmount called after constructor and render")
  }
}

export default Car;