const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  item: String,
  price: Number,
});

const Order = mongoose.model("Order", orderSchema);

// async function addOrders() {
//   let result = await Order.insertMany([
//     { item: "samosa", price: 35 },
//     { item: "chocolate", price: 100 },
//     { item: "icecream", price: 50 },
//   ]);
//   console.log(result);
// }

// addOrders();

module.exports = Order;