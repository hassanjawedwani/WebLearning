import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    try {
      fetch("https://cat-fact.herokuapp.com/facts")
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw Error("Some error occurred in getting response");
          }
        })
        .then((data) => {
          setPosts(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      throw Error(err.name + " " + err.message);
    } 
  }, []);
  return (
    <div>
      <h1>API</h1>
      {
        posts && posts.map((post) => {
         return (<h3 key={post._id}>{post.text}</h3>)
        })
      }
    </div>
  );
}

export default App;




