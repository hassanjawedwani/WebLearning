import React from "react";
import CommonContext from "./CommonContext"

function Products() {
  const counter = React.useContext(CommonContext);
  return (
    <h1>Products Component : {counter}</h1>
  )
}

export default Products;