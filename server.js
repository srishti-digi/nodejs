const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Hello");
  res.status(500).send({ message: "error" });
});
app.listen(3000);
