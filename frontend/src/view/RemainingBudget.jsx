/* eslint-disable react/prop-types */


function RemainingBudget({ currentExpenses, budget }) {

    const totalCost = currentExpenses.reduce(
      (total, expense) => total + parseFloat(expense.cost),
      0
    );
  

    const remainingBudget = budget !== 0 ? budget - totalCost : 0;
  
    return (
      <div className="remaining">
        <span className="budget">Remaining: ₱ </span>{remainingBudget}
      </div>
    );
  }
  
  export default RemainingBudget;