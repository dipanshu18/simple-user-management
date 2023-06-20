require("dotenv").config();
const express = require("express");
const cors = require("cors");
const colors = require("colors");

const port = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port || 5000, () => {
  console.log(colors.brightCyan.underline(`Started server at port ${port}`));
});
