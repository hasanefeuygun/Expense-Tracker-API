const express = require("express");
const createUserRoutes = require("./src/routes/userRoutes");
const createExpensesRoutes = require("./src/routes/expensesRoutes");
const authmiddleware = require("./src/middleware/authmiddleware");

const createApp = () => {
  const app = express();
  app.use(express.json());

  app.use("/user", createUserRoutes());
  app.use("/expenses", authmiddleware, createExpensesRoutes());
  app.set("json spaces", 2); //For development temporary line (pretty-print);

  return app;
};

module.exports = createApp;
