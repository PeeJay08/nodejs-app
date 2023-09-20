import { useState } from "react";
import { Icon } from '@iconify/react';

function UpdateBudget(props){
    const [value, setValue] = useState(props.budget);


    const handleSaveClick = () => {
        props.handleSaveClick(value);
    };

    return (
      <div className="input-budget-container">
        <label>Budget: ₱</label>
        <input
          required="required"
          type="number"
          className="input-budget"
          id="name"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Icon className="delete" icon="icon-park:save" onClick={handleSaveClick} />
      </div>
    );
}

export default UpdateBudget;