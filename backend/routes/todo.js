const express = require("express");
const protect = require("../middlewares/auth");
const Todo = require("../models/todo");

const router = express.Router();

router.get("/todos", protect, async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.status(200);
    res.json(todos);
  } catch (err) {
    res.status(500);
    throw new Error("Something went wrong!");
  }
});

module.exports = router;
