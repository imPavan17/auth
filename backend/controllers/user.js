const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const User = require("../models/user");

/* 
 @desc:  Register a new user
 @route: /api/users/register
 @access: Public
*/
const registerController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  // Find if user is already registered
  const user = await User.findOne({ where: { email } });
  if (user) {
    res.status(400);
    throw new Error("User already registered!");
  }

  // Hash Password
  // Salting is simply the addition of a unique, random string of characters.
  // genSalt(<number_of_rounds); // default 10
  const salt = await bcrypt.genSalt(10);
  // Asynchronously generates a hash for the given string.
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const newUser = await User.create({ email, password: hashedPassword });

  // 201 indicates success and something was created or has led to the creation of a resource.
  res.status(201).json({
    id: newUser.id,
    email: newUser.email,
  });
});

/* 
 @desc:  Login a user
 @route: /api/users/login
 @access: Public
*/
const loginController = asyncHandler(async (req, res) => {
  res.send("Login");
});

module.exports = {
  registerController,
  loginController,
};
