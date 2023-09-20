// import Login from "../components/Login.jsx";
// import Register from "../components/Register.jsx";
// import { useState } from "react";
import Logo from "../asset/BP icon.png";

import AuthController from "../controller/AuthController";

import Money from "../asset/Money.png";
const HomePage = () => {

  return (
    <div>
      <div className="top">
        <img className="logo" src={Logo} alt="BP Logo" />
      </div>
      <div className="header">
        <img className="money" src={Money} alt="Money" />
        <div className="text">
          <h1>
            Get a Grip on Your Finances with Our User-friendly <br />
            <span>Budget Planner</span>
          </h1>
          <p>
            Effortlessly track expenses, manage your money, and plan your budget
            with ease. Gain insights into your spending habits, set saving
            goals, and create custom budgets tailored to your needs. Start
            managing your money smarter today!
          </p>

          <AuthController/>
        </div>
      </div>

      <footer>© Patrick Joshua San Jose</footer>
    </div>
  );
};
export default HomePage;
