const mongoose = require("mongoose");
const express = require("express");
const Customer = require("./models/customer");
const app = express();

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/masterhut");
};

main()
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Database Connection Error");
  });

app.get("/", async(req, res) => {
  const customers = await Customer.find({}).populate("orders");
  console.log(customers[0]);
  console.log(customers[1]);
  console.log(customers[2]);
});

app.listen(8080, () => {
  console.log("Server is listening at port : 8080");
})