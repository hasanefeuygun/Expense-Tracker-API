const express = require("express");
const userController = require("../controllers/userController");

module.exports = () => {
  const router = express.Router();

  router.post("/", userController.signUpUser);
  router.get("/", userController.getAllUsers);
  router.delete("/", userController.deleteAccount);

  return router;
};
