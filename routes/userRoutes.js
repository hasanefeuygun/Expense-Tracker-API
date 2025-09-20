const express = require("express");
const userController = require("../controllers/userController");
const authmiddleware = require("../middleware/authmiddleware");

module.exports = () => {
  const router = express.Router();

  router.post("/signup", userController.signUp);
  router.post("/login", userController.login);
  router.get("/", authmiddleware, userController.getAllUsers);
  router.delete("/", authmiddleware, userController.deleteAccount);

  return router;
};
