const express = require("express");
const router = express.Router();
const Expense = require("../objects/expense");


const expense = new Expense();

router.get("/tracker/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const userData = await expense.getUserData(userId);
      res.status(200).json(userData);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
    }
  });
router.get("/budget/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const { budget } = await expense.getUserBudget(userId);
    res.status(200).json({ budget });
  } catch (error) {
    console.error("Error fetching budget:", error);
    res.status(500).json({ error: "An error occurred while fetching the budget." });
  }
})
router.put("/budget/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      const { budget } = req.body;
      const updatedUser = await expense.editBudget(userId, budget);
      res.status(200).json(updatedUser);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
    }
  });
  router.post("/:userId", async (req, res) => {
    const { userId } = req.params;
    const expenseDetails = req.body;
    try {
      const updatedUser = await expense.addExpense(userId, expenseDetails);
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  router.delete("/:userId/:expenseId", async (req, res) => {
    try {
      const { userId, expenseId } = req.params;
      const updatedUser = await expense.deleteExpense(userId, expenseId);
      res.status(200).json(updatedUser);
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err.message });
    }
  });



module.exports = router;