const User = require("../models/user");

exports.register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  // Checking if user is already registered
  if (user) {
    return res.json("User already registered!");
  }

  await User.create({ email, password });
  res.send("User created successfully!");
};
