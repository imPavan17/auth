const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const sequelize = require("./db");
const UserRoutes = require("./routes/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/api/users", UserRoutes);

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
