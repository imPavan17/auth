const User = require("../models/user");

exports.register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (user) {
    return res.send("User already registered!");
  }

  await User.create({ email, password });
  res.send("User created successfully!");
};
