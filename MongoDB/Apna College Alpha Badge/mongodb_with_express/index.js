const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

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

function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

app.get("/", (req, res) => {
  res.send("Hi i'm root");
});

app.get(
  "/chats",
  asyncWrap(async (req, res, next) => {
    const chats = await Chat.find({});
    res.render("index.ejs", { chats });
  })
);

app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

app.get(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    const { id } = req.params;
    const chat = await Chat.findById(id);
    if (!chat) {
      next(new ExpressError("500", "chat not found"));
    }
    res.render("show.ejs", { chat });
  })
);

app.get(
  "/chats/:id/edit",
  asyncWrap(async (req, res) => {
    const { id } = req.params;
    const chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  })
);

app.post(
  "/chats",
  asyncWrap(async (req, res, next) => {
    const { from, to, message } = req.body;
    const chat = new Chat({
      from,
      to,
      message,
      created_at: new Date(),
    });
    await chat.save();
    res.redirect("/chats");
  })
);

app.put(
  "/chats/:id",
  asyncWrap(async (req, res) => {
    const { id } = req.params;
    const { from, to, message } = req.body;
    await Chat.findByIdAndUpdate(
      id,
      { from, to, message, created_at: new Date() },
      { runValidators: true }
    );
    res.redirect("/chats");
  })
);

app.delete(
  "/chats/:id",
  asyncWrap(async (req, res) => {
    const { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
  })
);

// Error Handling Middlewares

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") {
    console.log("fuck")
  }
  next(err);
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Some error occured" } = err;
  res.status(status).send(message);
});

app.listen(port, () => {
  console.log("App is listening at port ", port);
});
