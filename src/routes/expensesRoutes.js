const express = require("express");
const expensesController = require("../controllers/expensesController");
module.exports = () => {
  const router = express.Router();

  router.get("/", expensesController.getAllExpenses);
  router.post("/", expensesController.addNewExpense);
  router.patch("/", expensesController.updateExpense);

  return router;
};
