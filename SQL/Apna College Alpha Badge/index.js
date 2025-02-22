const { faker } = require("@faker-js/faker");
const mysql = require('mysql2');
const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");
const app = express();



const port = 3000;


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'hassanjawedwani'
});



app.set("views", path.join(__dirname, "./views"))
app.set("view engine", "ejs");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));


let users = [];

app.get("/", (req, res) => {
  // const query = "SELECT count(*) FROM user;";  
  const query = "SELECT * FROM user;";
  connection.query(query, (err, result) => {
    // console.log(result[0]["count(*)"]);
    console.log(result)
    users = result;
    // res.send(`GET REQUEST at root address`);
    res.render("index.ejs", { result });
  });
});

app.post("/", (req, res) => {
  const { username, email, password } = req.body;
  const user = [
    uuidv4(),
    username,
    email,
    password
  ];
  const newUserSqlQuery = `INSERT INTO user (id, username, email, password) VALUES (?)`;
  connection.query(newUserSqlQuery, [user], (err, result) => {
    if (err) throw err;
    res.redirect("/");
  });
})

app.get("/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/:id/security", (req, res) => {
  const { id } = req.params;
  const user = users.find(user => user.id === id);
  res.render("security.ejs", {user})
});



app.get("/:id/edit", (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM user WHERE id = ${id}`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    const user = result[0];
    console.log(user)
    res.render("edit.ejs", { user });
  });
});

app.post("/:id/edit", (req, res) => {
  const { id } = req.params;
  const { username } = req.body;
  const query = "UPDATE user SET username = ? WHERE id = ?";
  connection.query(query, [username, id], (err, result) => {
    if (err) throw err;
    console.log(result);
    res.redirect("/");
  });
})

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deleteUserSqlQuery = `DELETE FROM user WHERE id = '${id}'`;
  connection.query(deleteUserSqlQuery, (err, result) => {
    if (err) throw err;
    res.redirect("/");
  })
})

app.listen(port, () => {
  console.log(`App is listening at port ${port}`);
});







// const query = "INSERT INTO user (id, username, email, password) VALUES ? ";
// let users = []

// let getRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.username(),
//     faker.internet.email(),
//     faker.internet.password(),
//   ];
// };

 
// for (let i = 0; i < 100; i++) {
//   users.push(getRandomUser());
// }


// try {
//   connection.query(
//     query, [users],
//     function (err, result, fields) {
//       console.log(result); 
//     }
//   );
// } catch (err) {
//   console.log(err);
// }


// connection.end();
