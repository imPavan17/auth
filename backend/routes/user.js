const express = require("express");
const protect = require("../middlewares/auth");

const router = express.Router();
const {
  registerController,
  loginController,
  getMeController,
} = require("../controllers/user");

router.get("/", (req, res) => {
  res.send("Hello");
});

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/me", protect, getMeController);

module.exports = router;
