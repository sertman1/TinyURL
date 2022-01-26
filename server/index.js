const { index } = require("./views/pages.js");

require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("TinyURL!");
});

// routing

module.exports = app;
