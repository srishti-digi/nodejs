const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  console.log("Hello");
  res.render("index", { text: "all" });
});

app.get("/users", (req, res) => {
  res.send("users list");
});

app.get("/users/new", (req, res) => {
  res.send("users new list");
});
app.listen(3000);
