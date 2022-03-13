const express = require("express");
const protect = require("../middlewares/auth");
const { body } = require("express-validator/check");

const router = express.Router();
const {
  registerController,
  loginController,
  getMeController,
} = require("../controllers/user");

router.get("/", (req, res) => {
  res.send("Hello");
});

/* check() - It looks email field in the body,
   query parameters, in the headers and in the cookies.
*/
router.post(
  "/register",
  // We can wrap the validations inside an array, to makes it clearer to read
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    // passing a message in the 2nd argument, This message will be used as default message
    // to all the validators functions.
    body("password", "Length should be more than 5 and should be Alphanumeric")
      .isLength({ min: 5 })
      .isAlphanumeric(),
  ],
  registerController
);
router.post("/login", loginController);
router.get("/me", protect, getMeController);

module.exports = router;
