import Logo from "../asset/BP icon.png";

import ExpenseController from "../controller/ExpenseController";
import BudgetController from "../controller/BudgetController";
import { useParams } from "react-router-dom";
const BudgetPlanner = () => {
  const { username } = useParams();
  return (
    <div>
      <div className="top">
        <img className="logo" src={Logo} alt="BP Logo" />
      </div>
      <h1>Welcome {username}</h1>
      <div className="budget-container">
        <h2>Budget Planner</h2>
        <div>
          <BudgetController />
        </div>
        <h3>Expenses</h3>
        <div className="expenseList-container">
          <ExpenseController />
        </div>
      </div>
      <footer>© Patrick Joshua San Jose</footer>
    </div>
  );
};
export default BudgetPlanner;
