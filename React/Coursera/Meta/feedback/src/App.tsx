import { useState, type FormEvent } from "react"

const App = () => {
  const [rating, setRating] = useState("5");
  const [comment, setComment] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    alert(`You gave ${rating} rating, Thanks! and you commented ${comment}`);
    setRating("5");
    setComment("");
  }
  return (
    <form className="border  border-gray-400 m-25 p-5 flex flex-col gap-3">
      <h1 className="text-2xl">Feedback</h1>
      <span className="self-end">{rating} stars ⭐</span>
      <input type="range" min={1} max={5} value={rating} onChange={(e) => setRating(e.target.value)} />
      <textarea className="border border-gray-400 p-5" placeholder="Type comment here..." rows={4} value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
      <button type="submit" className="bg-blue-700 text-white w-16 mx-auto" onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default App