const mongoose = require("mongoose");
const Chat = require("./models/chat");


main().then(() => {
  console.log("MongoDB connected");
}).catch(err => {
  console.log(err); 
})

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


const allMessages = [
  { from: "hassan", to: "gulfam", message: "bro kia bna", created_at: new Date() },
  { from: "ali", to: "bilal", message: "hey what's up", created_at: new Date() },
  { from: "umer", to: "sajid", message: "kal milte hain", created_at: new Date() },
  { from: "zain", to: "hamza", message: "task ho gya?", created_at: new Date() },
  { from: "hassan", to: "bilal", message: "where you at", created_at: new Date() },
  { from: "ali", to: "gulfam", message: "bro call me", created_at: new Date() },
  { from: "umer", to: "hamza", message: "game tonight?", created_at: new Date() },
  { from: "zain", to: "sajid", message: "send the file", created_at: new Date() },
  { from: "hassan", to: "sajid", message: "what's cooking", created_at: new Date() },
  { from: "ali", to: "hamza", message: "check this out", created_at: new Date() },
  { from: "umer", to: "gulfam", message: "you free now?", created_at: new Date() },
  { from: "zain", to: "bilal", message: "meeting at 5", created_at: new Date() },
  { from: "hassan", to: "umer", message: "yo reply fast", created_at: new Date() },
  { from: "ali", to: "zain", message: "where's the link", created_at: new Date() },
  { from: "umer", to: "bilal", message: "let's chill", created_at: new Date() },
  { from: "zain", to: "gulfam", message: "bro need help", created_at: new Date() },
  { from: "bilal", to: "hassan", message: "plan for tomorrow", created_at: new Date() },
  { from: "sajid", to: "ali", message: "got the update?", created_at: new Date() },
  { from: "hamza", to: "umer", message: "call me later", created_at: new Date() },
  { from: "gulfam", to: "zain", message: "how's it going", created_at: new Date() }
];

Chat.insertMany(allMessages).then(res => {
  console.log("All message added", res);
}).catch(err => {
  console.log(err);
});