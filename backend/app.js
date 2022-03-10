const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const sequelize = require("./db");
const authRoutes = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/auth", authRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("listening on port 3000...");
    });
  })
  .catch((err) => {
    console.log(err);
  });
