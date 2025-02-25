const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override");

const app = express();
const port = 8080;

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

main()
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/chats", async (req, res) => {
  const chats = await Chat.find({});
  res.render("index.ejs", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/chats/:id/edit", async (req, res) => {
  const { id } = req.params;
  const chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

app.post("/chats", (req, res) => {
  const { from, to, message } = req.body;
  const chat = new Chat({
    from,
    to,
    message,
    created_at: new Date(),
  });
  chat
    .save()
    .then((res) => {
      console.log("added", res);
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});

app.put("/chats/:id", (req, res) => {
  const { id } = req.params;
  const { from, to, message } = req.body;
  Chat.findByIdAndUpdate(id, {from, to, message, created_at: new Date()}, {runValidators: true})
    .then((res) => {
      console.log("edited", res);
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats")
});

app.delete("/chats/:id", (req, res) => {
  const { id } = req.params;
  Chat.findByIdAndDelete(id).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
  res.redirect("/chats");
})


app.listen(port, () => {
  console.log("App is listening at port ", port);
});
