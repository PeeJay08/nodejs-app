const UserModel = require("../models/user.entity");
const { v4: uuidv4 } = require("uuid");

class Expense {
  constructor() {}
  async getUserData(userId) {
    try {
      const user = await UserModel.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }
      const { expenses } = user;
      return { expenses };
    } catch (err) {
      throw err;
    }
  }
  async getUserBudget(userId){
    try {
      const user = await UserModel.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }
      const { budget } = user;
      return { budget };
    } catch (err) {
      throw err;
    }
  }
  async editBudget(userId, budget) {
    const user = await UserModel.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    user.budget = budget;
    const updatedUser = await user.save();
    return updatedUser;
  }
  async addExpense(userId, expense) {
    const user = await UserModel.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    user.expenses.push({ _id: uuidv4(), ...expense });
    const updatedUser = await user.save();
    return updatedUser;
  }
  async deleteExpense(userId, expenseId) {
    try {
      const user = await UserModel.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }
      const expenseIndex = user.expenses.findIndex(
        (expense) => expense._id === expenseId
      );
      if (expenseIndex === -1) {
        throw new Error("Expense not found");
      }
      user.expenses.splice(expenseIndex, 1);
      const updatedUser = await user.save();
      return updatedUser;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Expense;
