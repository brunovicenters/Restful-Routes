const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
  {
    username: "Todd",
    comment: "lol thats so funny",
    id: 1,
  },
  {
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
    id: 2,
  },
  {
    username: "Sk8erBoi",
    comment: "Plz delete you account, Todd",
    id: 3,
  },
  {
    username: "onlysayswoof",
    comment: "woof woof woof",
    id: 4,
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === parseInt(id));
  res.render("comments/show", { comment });
});

app.get("/tacos", (req, res) => {
  res.send("Get /tacos response");
});

app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`You've ordered ${qty} ${meat} tacos`);
});

app.listen(3000, () => {
  console.log("On port 3000");
});

// GET /comments - list all comments
// POST /comments - create a new comment
// GET /comments/:id - Get one comment (using ID)
// PATCH /comments/:id - Update one comment
// DELETE /comments/:id - Destroy one comment
