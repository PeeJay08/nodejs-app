function AddExpenseForm(props) {
  const { onSubmit, onChange, name, date, category, cost } = props;

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        onChange={onChange}
        id="name"
        name="name"
        type="text"
        value={name}
        required
      />

      <label htmlFor="date">Date:</label>
      <input
        onChange={onChange}
        id="date"
        name="date"
        type="date"
        value={date}
        required
      />

      <label htmlFor="category">Category:</label>
      <select
        name="category"
        id="category"
        required
        value={category}
        onChange={onChange}
      >
        <option value="" disabled>
          {" "}
          Select Category
        </option>
        <option value="Utility">Utility</option>
        <option value="Food">Food</option>
        <option value="Personal">Personal</option>
      </select>

      <label htmlFor="cost">Cost:</label>
      <input
        onChange={onChange}
        id="cost"
        name="cost"
        type="number"
        value={cost}
      />

      <input className="add" type="submit" value="Add" />
    </form>
  );
}

export default AddExpenseForm;
