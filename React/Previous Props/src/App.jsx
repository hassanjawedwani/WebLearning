import { useState } from "react";
import User from "./components/User";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <User count={count} />
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
    </div>
  )
}

export default App;