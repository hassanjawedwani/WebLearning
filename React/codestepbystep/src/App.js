import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [print, setPrint] = useState(false);
  const [marks, setMarks] = useState(0);
  return (
    <div>
      <h1>{text}</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <hr />
      {print && <h1>{text}</h1>}
      <input type="text" onChange={(e) => { setText(e.target.value); setPrint(false)}} />
    
    </div>
  )
}

export default App;