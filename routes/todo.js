const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (e) {
    console.log(e);
  }
});

router.post("/", async (req, res) => {
  const newTodo = await Todo.create(req.body);
  res.json(newTodo);
});

router.put("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(todo);
});

router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json("/api/todos");
});

module.exports = router;
