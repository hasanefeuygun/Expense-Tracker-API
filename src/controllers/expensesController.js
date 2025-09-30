const service = require("../services/expenses.service");
module.exports = {
  getAllExpenses: async (req, res) => {
    try {
      const user = req.user.email;
      const allExpenses = await service.getAllExpenses(user);
      if (!allExpenses.length) throw new Error("There is no expenses to show!");
      res.json(allExpenses);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  addNewExpense: async (req, res) => {
    try {
      if (
        !req.body.expense_type ||
        req.body.product ||
        !req.body.cost ||
        !req.body.amount
      )
        throw new Error("Please enter valid information");

      const addedExpense = await service.addNewExpense({
        expense_type: req.body.expense_type,
        product: req.body.product,
        cost: req.body.cost,
        amount: req.body.amount,
        total_cost: req.body.cost * req.body.amount,
        user: req.user.email,
      });
      res.json({ "Expense added": addedExpense });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateExpense: async (req, res) => {
    try {
      if (!req.body.expense_type || req.body.product)
        throw new Error("Please enter valid information");

      const updatedExpense = await service.updateExpense(
        req.body.expense_type,
        req.body.product,
        req.body
      );
      res.json({ "Expense updated": updatedExpense });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
