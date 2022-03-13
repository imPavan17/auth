const express = require("express");

const sequelize = require("./config/db");
const UserRoutes = require("./routes/user");
const TodoRoutes = require("./routes/todo");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", UserRoutes);
app.use("/api", TodoRoutes);

app.use(errorHandler);

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
