//  import required modules from nodejs and build the server

const express = require("express");
const fs = require("fs");
const app = express();

let db = { todos: [] };

if (fs.existsSync("./db.json")) {
  db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
}

app.use(express.json());

// GET method
app.get("/", (req, res) => {
  res.status(200).json(db.todos);
});

// POST method
app.post("/", (req, res) => {
  const newTodo = req.body;

  if (
    typeof newTodo.id !== "number" ||
    typeof newTodo.task !== "string" ||
    typeof newTodo.status !== "boolean"
  ) {
    return res.status(400).send("Invalid argument");
  }

  db.todos.push(newTodo);

  fs.writeFileSync("./db.json", JSON.stringify(db));

  res.status(200).json(db.todos);
});

// PUT method
app.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTodo = req.body;

  if (
    typeof updatedTodo.task !== "string" ||
    typeof updatedTodo.status !== "boolean"
  ) {
    return res.status(400).send("Invalid argument");
  }

  const index = db.todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return res.status(400).send("Invalid argument");
  }
  db.todos[index] = { id, ...updatedTodo };

  fs.writeFileSync("./db.json", JSON.stringify(db));

  res.status(200).json(db.todos);
});

// DELETE method
app.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = db.todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return res.status(400).send("Invalid argument");
  }

  db.todos.splice(index, 1);

  fs.writeFileSync("./db.json", JSON.stringify(db));

  res.status(200).json(db.todos);
});

module.exports = app;

// export the server
// eg.module.exports = app;
