/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
function ExpenseList(props) {
  const { expenses, handleDeleteExpense } = props;

  if (!expenses || expenses.length === 0) {
    return <div>No expenses to display</div>;
  }
  return (
    <div>
      <ul>
        {expenses.map((expense) => (
          <li className="list-item" key={expense._id}>

            <div className="data-container">
              <span className="data-label">Name:</span> {expense.name}
            </div>
            <div className="data-container">
              <span className="data-label">Date:</span> {expense.date}
            </div>
            <div className="data-container">
              <span className="data-label">Category:</span> {expense.category}
            </div>
            <div className="data-container">
              <span className="data-label">Cost:</span> ₱{expense.cost}
            </div>
            <Icon
              className="delete"
              icon="icon-park:delete"
              onClick={() => handleDeleteExpense(expense._id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
