const { faker } = require("@faker-js/faker");
const mysql = require('mysql2');
const express = require("express");
const path = require("path");
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


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

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


app.get("/:id/edit", (req, res) => {
  const { id } = req.params;
  const user = users.find(user => user.id === id);
  console.log(id, user);
  res.render("edit.ejs", );
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
