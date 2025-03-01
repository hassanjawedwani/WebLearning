const express = require("express");
const app = express();
const port = 8080;
const ExpressError = require("./ExpressError");

// Middlewares Start

const checkToken = (req, res, next) => {
  const { token } = req.query;
  if (token == 233) {
    next();
  } else {
    throw new ExpressError(401, "please provide right token first");
  }
};

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

app.get("/api", checkToken, (req, res) => {
  res.send("Welcome to api page");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "User don't have access to admin");
});

app.get("*", (req, res) => {
  res.send("page 404");
});

// API Routes End

// Error Handling middlewares start

app.use((err, req, res, next) => {
  const { status = 500, message = "some error occured" } = err;
  res.status(status).send(message);
});

// Error Handling middlewares end

// Server Start
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
