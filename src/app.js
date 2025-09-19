const express = require("express");
const createUserRoutes = require("../routes/userRoutes");

const createApp = () => {
  const app = express();
  app.use(express.json());

  app.use("/user", createUserRoutes());
  app.set("json spaces", 2); //For development temporary line (pretty-print);

  return app;
};

module.exports = createApp;
