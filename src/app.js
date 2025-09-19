const express = require("express");
const createSignUpRoutes = require("../routes/signUpRoutes");

const createApp = () => {
  const app = express();
  app.use(express.json());

  app.use("/signup", createSignUpRoutes());

  return app;
};

module.exports = createApp;
