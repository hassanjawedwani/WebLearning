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

const userSchema = new mongoose.Schema({
  username: String,
  email: String
});

const User = mongoose.model("User", userSchema);


const postSchema = new mongoose.Schema({
  content: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  
  const user1 = new User({
    username: "Hassan Jawed",
    email: "hassanajawedwani@gmail.com"
  });

  const post1 = new Post({
    content: "Hello Wordl",
    likes: 7,
  });

  post1.user = user1;
  let user = await user1.save();
  let post = await post1.save();
  console.log(user, post);
}

// addData();

const removeData = async () => {
  await User.deleteMany({});
  await Post.deleteMany({});
}

// removeData();



const showData = async () => {
  const posts = await Post.findOne({ likes: 7 }).populate("user");
  console.log(posts);
}

showData();

app.listen(port, (req, res) => {
  console.log(`App is listening at port ${port}`);
});