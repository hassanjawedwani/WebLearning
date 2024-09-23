import { useState } from 'react';

function App() {
  const [data, setData] = useState({
    name: "Wani",
    age: 24
  });
  return (
    <div>
      <h1>State with Object problem</h1>
      <h2>Name: {data.name}</h2>
      <h2>Age: {data.age}</h2>
      {/*
      // ! Problem with this method is other values are removed
      <input type="text" value={data.name} onChange={(e) => setData({ name: e.target.value })} />
      <input type="number" value={data.age} onChange={(e) => setData({ age: e.target.value })} />
      */}

      <input type="text" value={data.name} onChange={(e) => setData({...data, name: e.target.value })} />
      <input type="number" value={data.age} onChange={(e) => setData({...data, age: e.target.value })} />
    </div> 
  )
}

export default App;