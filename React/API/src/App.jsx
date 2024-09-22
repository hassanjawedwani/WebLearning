// ! You need to install and run json server for this to work

import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [updatedEmail, setUpdatedEmail] = useState('');
  const [updatedPassword, setUpdatedPassword] = useState('');
  const [updatedUserId, setUpdatedUserId] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    const newUser = { email: email, password: password };
    
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    }).then(result => {
      if (!result.ok) {
          throw Error(`Some error occurred in post operation ${error.name} ${error.message}`);
      }
      return result.json();
    }).then(newUser => {
      setUsers([...users, newUser]);
    })   
      .catch((err) => {
      throw Error(`Some error occurred in post operation ${err.name} ${err.message}`);
    });
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
      console.error(err);
    });
  }


  function updateUser(id) {
    const targetUser = users.find((user) => user.id === id);
    setUpdatedEmail(targetUser.email);
    setUpdatedPassword(targetUser.password);
    setUpdatedUserId(targetUser.id);
  }

  function handleUpdateSubmit(e)  {
    e.preventDefault();
    console.log(updatedEmail, updatedPassword);
    fetch(`http://localhost:3000/users/${updatedUserId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: updatedEmail, password: updatedPassword })
    }).then(response => {
      if (!response.ok) {
        throw Error("Error in updating data");
      }
      return response.json();
    }).then(result => {
      setUsers(users.map((user) => user.id === result.id ? result : user));
    }).catch(err => {
      console.err(err);
    });
  }

  return (
    <div>
      <h1>App Post Request</h1> 

      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        <br /><br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
      <br /><br />

    
     <h2>Update User</h2>
      <form onSubmit={handleUpdateSubmit}>
        <label htmlFor="updatedEmail">Email</label>
        <input type="email" name="updatedEmail" id="updatedEmail" value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)}/>
        <br /><br />
        <label htmlFor="updatedPassword">Password</label>
        <input type="password" name="updatedPassword" id="updatedPassword" value={updatedPassword} onChange={(e) => setUpdatedPassword(e.target.value)}/>
        <br /><br />
        <button type="submit" >Update</button>
      </form> 
    
      
      <h2>List of Users</h2>
      {
        users && users.map((user, index) => {
          return (
            <div key={user.id} id={user.id}  style={{margin: "10px", backgroundColor: "#f2f2f2"}}>
              <h2>{user.email}</h2>
              <h2>{user.password}</h2>
              <button type="button" onClick={() => deleteUser(user.id)}>Delete</button>
              <button type="button" onClick={() => updateUser(user.id)}>Update</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default App;