const mongoose = require("mongoose")
const Order = require("./Order");

const customerSchema = new mongoose.Schema({
  name: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Customer = mongoose.model("Customer", customerSchema);

// const addCustomers = async () => {
//   const customer1 = new Customer({
//     name: "Numan",
//   });
//   const order1 = await Order.findOne({ item: "icecream" });
//   const order2 = await Order.findOne({ item: "chocolate" });
//   customer1.orders.push(order1);
//   customer1.orders.push(order2);
//   let result = await customer1.save();
//   console.log(result);
// };

// addCustomers();

module.exports = Customer;