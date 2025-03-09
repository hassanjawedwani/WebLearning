const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8080;

main()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database connection error occured ", err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/demoRelationship");
}

const customerSchema = new mongoose.Schema({
  name: String,
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
});

const Customer = mongoose.model("Customer", customerSchema);

const cartSchema = new mongoose.Schema({
  items: [],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
});

const Cart = new mongoose.model("Cart", cartSchema);


const addData = async () => {
  const customer1 = new Customer({
    name: "Hassan Jawed"
  });
  const cart1 = new Cart({
    items: [
      "apple", "banana", "pineapple"
    ]
  });
  customer1.cart = cart1;
  cart1.user = customer1;

  const customer = await customer1.save();
  const cart = await cart1.save();
  console.log(customer);
  console.log(cart);
  console.log("Check db");
}

addData();
 
app.listen(port, (req, res) => {
  console.log(`App is listening at port ${port}`);
});
