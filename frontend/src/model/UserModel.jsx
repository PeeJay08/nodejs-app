class UserModel {
    constructor() {}

async addUser(user) {
    try {
      const response = await fetch("https://service-budget.onrender.com/user/register", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error("Registration failed");
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  
  async login(username, password) {
    try {
      const user = {
        username: username,
        password: password,
      };
      const response = await fetch("https://service-budget.onrender.com/auth/login", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error("Failed to login. HTTP status: " + response.status);
      }
      const data = await response.text();
      return data;
    } catch (err) {
      throw new Error("Failed to login the user", err);
    }
  }
  async getUserIdByUsername(username) {
    try {
      const response = await fetch(`https://service-budget.onrender.com/auth/getUserIdByUsername/${username}`, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user ID by username");
      }
      const data = await response.json();
      return data.userId;
    } catch (err) {
      console.error(err);
      throw new Error("Failed to fetch user ID by username", err);
    }
  }
}

const model = new UserModel();
export default model;