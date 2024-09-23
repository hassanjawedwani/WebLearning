import CommonContext from "./CommonContext";

function Cart() {
  return (
    <CommonContext.Consumer>
      {
        (counter) => (
          <h1>Cart Component : {counter}</h1>
        )
      }
    </CommonContext.Consumer>
  )
}

export default Cart;