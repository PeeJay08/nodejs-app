class ExpenseModel {
  constructor() {}

  async getUserData(userId) {
    let response
    try {
      response = await fetch(`https://service-budget.onrender.com/expense/tracker/${userId}`,{
        headers: {
          "Authorization": localStorage.getItem("token"),
        },
      })
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  async getBudget(userId){
    let response
    try {
      response = await fetch(`https://service-budget.onrender.com/expense/budget/${userId}`,{
        headers: {
          "Authorization": localStorage.getItem("token"),
        },
      })
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  async editBudget(userId, budget) {
    let response;
    try {
      response = await fetch(`https://service-budget.onrender.com/expense/budget/${userId}`, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token"),
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ budget }),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  async addExpense(userId, expense) {
    let response;
    try {
      response = await fetch(`https://service-budget.onrender.com/expense/${userId}`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token"),
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(expense),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  async deleteExpense(userId, expenseId) {
    let response;
    try {
      response = await fetch(`https://service-budget.onrender.com/expense/${userId}/${expenseId}`, {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token"),
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}

const model = new ExpenseModel();
export default model;
