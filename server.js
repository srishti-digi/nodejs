const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Hello");
  res.send("Hi");
});
app.listen(3000);
