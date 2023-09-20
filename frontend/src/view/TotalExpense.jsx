/* eslint-disable react/prop-types */


function TotalExpense({ currentExpenses }) {

    const totalCost = currentExpenses.reduce(
      (total, expense) => total + parseFloat(expense.cost),
      0
    );
  
    return (
      <div className="total-expense">
        <span className="budget">Total Expense: ₱</span>{totalCost}
      </div>
      
    );
  }
  
  export default TotalExpense;