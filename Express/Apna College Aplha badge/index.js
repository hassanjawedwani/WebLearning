const express = require("express");
const app = express();
const port = 8080;

// Middlewares Start

const checkToken = (req, res, next) => {
  const { token } = req.query;
  if (token == 233) {
    next();
  } else {
    res.send("please provide right token first");
  }
}




// app.use((req, res, next) => {  // logger middleware 
//   console.log("url:", req.url);
//   console.log("method:", req.method);
//   console.log("params:", req.params);
//   console.log("query:", req.query);
//   next();
// })




// Middlewares End

// API Routes Start

app.get("/", (req, res) => {
  console.log("hello i'm root");
  res.send("hello i'm root");
});

app.get("/search", (req, res) => {
  const query = req.query;
  res.send(query.query);
});

app.get("/api", checkToken,  (req, res) => {
  res.send("Welcome to api page")
});

app.get("*", (req, res) => {
  res.send("page 404");
});

// API Routes End


// Server Start
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});