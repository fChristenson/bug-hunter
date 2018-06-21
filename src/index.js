const express = require("express");
const app = express();
const path = require("path");
const todos = require("./data");

app.use(express.static(path.join(__dirname, "..", "dist")));
app.use(express.json());

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  todos.push(req.body);
  res.json(todos);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
