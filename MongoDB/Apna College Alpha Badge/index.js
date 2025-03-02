const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 8080;
const ExpressError = require("./ExpressError");

main()
  .then(console.log("Connection with database established"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("Welcome to root address");
});

app.get("/err", (req, res) => {
  abcd = abcd
});

app.post("/err1", async (req, res, next) => {
  try {
    const user = new User({
      name: "",
      email: "xxx@gmail.com",
      age: 33
    });
    await user.save();
  } catch (err) {
    next(err);
  }
});

// Error Handling Middlware

// BELOW 4 LINE ARE WORKING FINE BUT
// app.use( err, req, res, next) => {
//   console.log("------Custom Error-----");
//   throw new ExpressError(404, "page not found");
// })

// ! BELOW IS GENERATING ERROR BECAUSE ASYNC FUNCTION DONT CALL NEXT AUTOMATICALLLY THAY CRASH SERVER
// app.use(async (err, req, res, next) => {
//   console.log("------Custom Error-----");
//   throw new ExpressError(404, "page not found");
// })

// * BELOW LINE WORKING FINE AGAIN 
app.use(async (err, req, res, next) => {
  try {
    console.log("------Custom Error-----");
    throw new ExpressError(404, "page not found");
  } catch (err) {
    next(err);
  }
})

app.use((err, req, res, next) => {
  const { status, message } = err;
  res.status(status).send(message);
})


app.listen(port, () => {
  console.log("Server is listening on port: ", port);
});