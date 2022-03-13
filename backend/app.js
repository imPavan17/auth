const express = require("express");

const sequelize = require("./config/db");
const UserRoutes = require("./routes/user");
const TodoRoutes = require("./routes/todo");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS SETUP
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

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
