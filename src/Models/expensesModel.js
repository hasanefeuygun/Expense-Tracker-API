const mongoose = require("mongoose");

const expensesSchema = new mongoose.Schema(
  {
    expense_type: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      enum: [
        "groceries",
        "leisure",
        "electronics",
        "utilities",
        "clothing",
        "health",
        "others",
      ],
    },
    product: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    total_cost: {
      type: Number,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ExpensesModel = mongoose.model("Expenses", expensesSchema);

module.exports = ExpensesModel;
