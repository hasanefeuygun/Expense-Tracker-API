const expensesModel = require("../Models/expensesModel");

module.exports = {
  getAllExpenses: async (user) => {
    const allExpenses = await expensesModel.find({ user });
    return allExpenses;
  },

  addNewExpense: async (newExpense) => {
    const addedExpense = await expensesModel.create(newExpense);
    return addedExpense;
  },

  updateExpense: async (expenseType, expenseProduct, body) => {
    const expense = await expensesModel.findOne({
      expense_type: expenseType,
      product: expenseProduct,
    });
    if (!expense) throw new Error("Expense not found!");

    const { product, expense_type, amount, cost } = body;

    const updatedExpense = await expensesModel.findByIdAndUpdate(
      expense._id,
      { $set: { product, expense_type, amount, cost } },
      { new: true, runValidators: true }
    );

    return updatedExpense;
  },
};
