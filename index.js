"use strict";

const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/foo", (req, res) => {
  res.send({ foo: "bar" });
});
app.post("/foo", (req, res) => {
  res.status(200).send({ success: true });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
