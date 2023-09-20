import { Icon } from "@iconify/react";
function ViewBudget(props) {
  const { budget, handleEdit } = props;
  return (
    <div className="input-budget-container">
      <span className="budget">Budget: ₱</span> <span>{budget}</span>

      <Icon className="delete" icon="icon-park:edit" onClick={handleEdit} />
    </div>
  );
}

export default ViewBudget;
