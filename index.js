const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/tacos", (req, res) => {
  res.send("Get /tacos response");
});

app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send("Post /tacos response");
});

app.listen(3000, () => {
  console.log("On port 3000");
});
