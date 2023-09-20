import { useState, useEffect } from "react";
import ViewBudget from "../view/ViewBudget";
import UpdateBudget from "../view/UpdateBudget";
import RemainingBudget from "../view/RemainingBudget"; 
import TotalExpense from "../view/TotalExpense";
import { useParams } from "react-router-dom";
import ExpenseModel from "../model/ExpenseModel";

function BudgetController() {
  const { userId } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [budget, setBudget] = useState(0); 
  const [currentExpenses, setCurrentExpenses] = useState([]);


  useEffect(() => {
    async function fetchBudget() {
      try {
        const userBudget = await ExpenseModel.getBudget(userId);
        if (userBudget && userBudget.budget) {
          setBudget(userBudget.budget); // Update the budget state
        } else {
          console.error("Budget not found in response:", userBudget);
        }
      } catch (error) {
        console.error("Error fetching user budget:", error);
      }
    }
  
    fetchBudget();
  }, [userId]);

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await ExpenseModel.getUserData(userId);

        if (userData && userData.expenses) {
          setCurrentExpenses(userData.expenses);
        } else {
          console.error("Expenses not found in response:", userData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    fetchData();
  }, [userId]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (newBudget) => {

    ExpenseModel.editBudget(userId, newBudget)
      .then((data) => {
        console.log("Budget updated:", data);
        setBudget(newBudget);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating budget:", error);
      });
  };
  return (
    <div className="head-container">
      {isEditing ? (
        <UpdateBudget
          budget={budget}
          handleSaveClick={handleSaveClick}
        />
      ) : (
        <>
          <ViewBudget handleEdit={handleEdit} budget={budget} />
          <RemainingBudget currentExpenses={currentExpenses} budget={budget} />
          <TotalExpense currentExpenses={currentExpenses} />
        </>
      )}
    </div>
  );
}
export default BudgetController;
