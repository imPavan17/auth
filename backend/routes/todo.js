const express = require("express");
const protect = require("../middlewares/auth");
const Todo = require("../models/todo");

const router = express.Router();

router.get("/todos", protect, async (req, res) => {
  const ITEMS_PER_PAGE = 2;
  const { page } = req.query; // 1, 2, 3...
  try {
    const count = await Todo.count(); // returns occurrences of elements in the database
    const todos = await Todo.findAll({
      offset: (page - 1) * ITEMS_PER_PAGE,
      limit: ITEMS_PER_PAGE,
    });
    res.status(200);
    res.json({
      data: todos,
      count,
    });
  } catch (err) {
    res.status(500);
    throw new Error("Something went wrong!");
  }
});

module.exports = router;
