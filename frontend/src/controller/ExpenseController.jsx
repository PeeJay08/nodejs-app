/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ExpenseList from "../view/ExpenseList";
import AddExpenseForm from "../view/AddExpenseForm";
import expenseModel from "../model/ExpenseModel";


function ExpenseController() {
  const { userId } = useParams();
  const [currentExpenses, setCurrentExpenses] = useState([]);
  const [expense, setExpense] = useState({
    name: "",
    date: "",
    category: "",
    cost: "",
  });
  const [rerenderKey, setRerenderKey] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const userExpenses = await expenseModel.getUserData(userId);
        const expenses = userExpenses.expenses || [];
        setCurrentExpenses(expenses);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    }
    fetchData();
  }, [userId, rerenderKey]);
  const handleInput = (event) => {
    switch (event.target.name) {
      case "name":
        setExpense({
          ...expense,
          name: event.target.value,
        });
        break;
      case "date":
        setExpense({
          ...expense,
          date: event.target.value,
        });
        break;
      case "category":
        setExpense({
          ...expense,
          category: event.target.value,
        });
        break;
      case "cost":
        setExpense({
          ...expense,
          cost: event.target.value,
        });
        break;
      default:
        break;
    }
  };
  const handleDeleteExpense = async (expenseId) => {
    try {
      await expenseModel.deleteExpense(userId, expenseId);
      setCurrentExpenses((prevExpenses) =>
        prevExpenses.filter((expense) => expense._id !== expenseId)
      );
      setRerenderKey((prevKey) => prevKey + 1);
    } catch (err) {
      console.error("Error deleting expense:", err);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newExpense = await expenseModel.addExpense(userId, { ...expense });
    setCurrentExpenses([...currentExpenses, newExpense]);
    setRerenderKey((prevKey) => prevKey + 1);
  };
  return (
    <div>
      <div className="expenseList-container">
        <ExpenseList
          expenses={currentExpenses}
          handleDeleteExpense={handleDeleteExpense}
        />
      </div>
      <h3>Add New Expense</h3>
      <div className="form-container">
        <AddExpenseForm
          onChange={handleInput}
          onSubmit={handleSubmit}
          name={expense.name}
          date={expense.date}
          category={expense.category}
          cost={expense.cost}
        />
      </div>
    </div>
  );
}
export default ExpenseController;
