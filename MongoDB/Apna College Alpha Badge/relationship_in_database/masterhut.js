const mongoose = require("mongoose");
const express = require("express");
const {Customer, customerSchema} = require("./models/customer");
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


async function deletePost() {
  const deletedCustomer = await Customer.findByIdAndDelete('67cbff72e92c1afb2c7e0ebb');
  console.log(deletedCustomer);
}

deletePost();

// app.get("/", async(req, res) => {
//   const customers = await Customer.find({});
//   console.log(customers);
// });

app.listen(8080, () => {
  console.log("Server is listening at port : 8080");
})