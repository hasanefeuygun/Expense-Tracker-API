const express = require("express");
const createUserRoutes = require("../routes/userRoutes");

const createApp = () => {
  const app = express();
  app.use(express.json());

  app.use("/signup", createUserRoutes());

  return app;
};

module.exports = createApp;
