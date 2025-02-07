const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  console.log("get request recieved at root path")
})

app.get("/search", (req, res) => {
  const query = req.query;
  console.log(query);
})