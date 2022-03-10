const express = require("express");

const router = express.Router();
const UserControllers = require("../controllers/user");

router.get("/", (req, res) => {
  res.send("Hello");
});

router.post("/register", UserControllers.register);

module.exports = router;
