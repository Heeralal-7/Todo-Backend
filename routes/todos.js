const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// Get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Add new todo
router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo({ text: req.body.text });
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (err) {
    res.status(400).json({ error: "Invalid input" });
  }
});

// Update todo
router.put("/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { text: req.body.text },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ error: "Could not update todo" });
  }
});

// Delete todo
router.delete("/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(400).json({ error: "Could not delete todo" });
  }
});

module.exports = router;
