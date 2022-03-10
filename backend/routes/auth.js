const express = require("express");

const router = express.Router();
const authControllers = require("../controllers/auth");

router.get("/", (req, res) => {
  res.send("Hello");
});

router.post("/register", authControllers.register);

module.exports = router;
