// ----------------- Part 2 ----------------------------------
// ----------------- Post Request APP ------------------------
// ! Cautions: you need to start local json server to use this app

import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, [users]);
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    const newUser = { email: email, password: password };
    try {
      fetch('http://localhost:3000/users', {
        method: 'Post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      }).then(result => {
        console.log(result);
      })
    } catch (error) {
      throw Error(`Some error occurred in post operation ${error.name} ${error.message}`);
    }
    setEmail('');
    setPassword('');
  }

  function deleteUser(id) {
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE'
    }).then((response) => {
      if (response.ok) {
        setUsers(users.filter((user) => user.id !== id));
      }
      else {
        throw Error("unable to delete a user")
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div>
      <h1>App Post Request</h1> 
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} required />
        <br /><br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} required />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
      <h2>List of Users</h2>
      {
        users && users.map((user, index) => {
          return (
            <div key={user.id} style={{margin: "10px", backgroundColor: "#f2f2f2"}}>
              <h2>{user.email}</h2>
              <h2>{user.password}</h2>
              <button type="button" onClick={() => deleteUser(user.id)}>Delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default App;














// import { useEffect, useState } from "react";
// function App() {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     try {
//       fetch("https://cat-fact.herokuapp.com/facts")
//         .then((response) => {
//           if (response.ok) {
//             return response.json();
//           } else {
//             throw Error("Some error occurred in getting response");
//           }
//         })
//         .then((data) => {
//           setPosts(data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } catch (err) {
//       throw Error(err.name + " " + err.message);
//     } 
//   }, []);
//   return (
//     <div>
//       <h1>API</h1>
//       {
//         posts && posts.map((post) => {
//          return (<h3 key={post._id}>{post.text}</h3>)
//         })
//       }
//     </div>
//   );
// }

// export default App;



