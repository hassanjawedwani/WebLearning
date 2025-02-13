const express = require("express");
const app = express();
const path = require("path");
let users = require("./data/users");
const port = 8080;
const methodOverride = require("method-override");



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));


app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});


app.get("/", (req, res) => {
  res.send("Hello from Root");
});


app.get("/users", (req, res) => {
  res.render("index.ejs", { users });
});


app.post("/users", (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  // Bad Method
  // res.render("index.ejs", { users }); 
  // Good Method
  res.redirect("/users");
})


app.get("/users/new", (req, res) => {
  res.render("new.ejs")
})


app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find(user => user.username === id);
  res.render("show.ejs", { user });
});


app.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const {username, password} = req.body;
  const user = users.find(user => user.username === id);
  user.username = username;
  user.password = password;
  res.redirect("/users");
});

app.get("/users/:id/edit", (req, res) => {
  const { id } = req.params;
  const user = users.find(user => user.username === id);
  res.render("edit.ejs", { user });
})

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.username !== id);
  res.redirect("/users");
})