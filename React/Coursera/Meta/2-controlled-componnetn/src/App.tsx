import { useState, type FormEvent } from "react";

const App = () => {
  const [name, setName] = useState("");
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(name)
    setName("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={name}  onChange={(e) => setName(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default App