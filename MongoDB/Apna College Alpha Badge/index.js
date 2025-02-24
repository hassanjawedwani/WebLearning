const mongoose = require("mongoose");

main()
  .then(console.log("Connection with database established"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.findByIdAndDelete('67bc3faa99135c7b30c15d21').then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});