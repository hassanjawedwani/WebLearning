const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  const diceValue = Math.floor(Math.random() * 10);
  res.render("rollDice.ejs", { diceValue });
});

app.get("/ig/:username", (req, res) => {
  const followers = ["addam", "smith", "john", "snow"];
  const { username } = req.params;
  res.render("instagram.ejs", {username, followers});
})

app.listen(port, () => {
  console.log("App is listening at port ", port);
});