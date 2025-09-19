const express = require("express");
const signUpController = require("../controllers/signUpController");

module.exports = () => {
  const router = express.Router();

  router.post("/", signUpController.addNewUser);

  return router;
};
