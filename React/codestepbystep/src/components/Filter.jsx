import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [age, setAge] = useState('');
  const [marks, setMarks] = useState('');
  useEffect(() => {
    setSearchParams({ age, marks });
  }, [age, marks]);
  return (
    <div>
      <h1>Data Fetched from Search Params or ?query params</h1>
      <p><strong>Age: </strong>{searchParams.get("age")}</p>
      <p><strong>Marks: </strong>{searchParams.get("marks")}</p>
      <input type="number" onChange={(e) => setAge(e.target.value)} placeholder="age"/>
      <input type="number" onChange={(e) => setMarks( e.target.value)} placeholder="marks"/>
    </div>
  )
}

export default Filter;