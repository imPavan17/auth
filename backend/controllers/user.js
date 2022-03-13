const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator/check");

const User = require("../models/user");

/* 
 @desc:  Register a new user
 @route: /api/users/register
 @access: Public
*/
const registerController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  /* validationResult() - A function that allows
      us to gather all the errors, prior validation
      middleware { check("email").isEmail() } might have
      thrown or stored.
  */

  const errors = validationResult(req);
  /* Example errors.array()
    errors: [
      {
        value: 'rama',
        msg: 'Please enter a valid email', // Instead of "Invalid value" which is default
        param: 'email',
        location: 'body'
      }
    ] 
  */

  // isEmpty() will return true/false whether we got errors or not
  if (!errors.isEmpty()) {
    // 422 indicates validation failure
    res.status(422);
    throw new Error("Validation Error");
  }

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
  const newUser = await User.create({
    email: email,
    password: hashedPassword,
  });

  if (newUser) {
    // 201 indicates success and something was created or has led to the creation of a resource.
    res.status(201).json({
      id: newUser.id,
      email: newUser.email,
      token: generateToken(newUser.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

/* 
 @desc:  Login a user
 @route: /api/users/login
 @access: Public
*/
const loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  // Check user and passwords match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      id: user.id,
      email: user.email,
      token: generateToken(user.id),
    });
  } else {
    // 401 indicates unauthorized
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

/* 
 @desc:  Get current user
 @route: /api/users/me
 @access: Private
*/
const getMeController = asyncHandler(async (req, res) => {
  res.status(200);
  // We have access to req.user, because of the auth middleware,
  // In the auth middleware, we are setting req.user = User.find()
  res.json({
    id: req.user.id,
    email: req.user.email,
  });
});

// Generate Token
// id - userId
const generateToken = (id) => {
  return jwt.sign({ id }, "mysecret123", {
    expiresIn: "30d",
  });
};

module.exports = {
  registerController,
  loginController,
  getMeController,
};
