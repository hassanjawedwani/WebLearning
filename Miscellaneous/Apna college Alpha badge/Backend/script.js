const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from root url");
});

app.get("/register", (req, res) => {
  const { username, password } = req.query;
  res.send(
    `fucking form submitted using Get request , here is your form data , username: ${username} password: ${password}`
  );
});

app.post("/register", (req, res) => {
  res.send(req.body); 
  // res.send("fucking form submitted using Post request");
  // const { username, password } = req.body;
  // console.log(`${username} --- ${password}`);
});

app.listen(port, () => {
  console.log(`App is listening at port ${port}`);
});
