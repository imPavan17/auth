const express = require("express");

const router = express.Router();
const { registerController, loginController } = require("../controllers/user");

router.get("/", (req, res) => {
  res.send("Hello");
});

router.post("/register", registerController);

router.get("/login", loginController);

module.exports = router;
