import { useState } from "react";
import CommonContext from "./components/CommonContext";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [count, setCount] = useState(0);
  return (
    <CommonContext.Provider value={count}>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Products /> {/* use latest method or functional hook to fetch data (preferred) */}
      <Cart /> {/* use older method to fetch data */}
    </CommonContext.Provider>
  )
}

export default App;