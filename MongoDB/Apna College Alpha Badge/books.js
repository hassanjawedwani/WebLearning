const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 20,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min: [1, "price fucking low"]
  },
  category: {
    type: String,
    enum: ["fiction", "non-fiction"],
  },
  alias: [String],
});

const Book = mongoose.model("Book", schema);

Book.findOneAndUpdate({ title: "Harry Potter" }, { price: -300 }, {runValidators: true})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });
