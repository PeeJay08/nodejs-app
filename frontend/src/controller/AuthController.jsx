/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */

import { useContext, useState } from "react";
import LoginForm from "../view/LoginForm";
import { AuthContext } from "../model/providers/authprovider";
import { useNavigate } from "react-router-dom";
import userModel from "../model/UserModel";
import { Link } from "react-router-dom";
function AuthController() {
  //useContext
  const [state, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");


  const onChange = (e) => {
    switch (e.target.id) {
      case "username":
        const username = e.target.value;
        setUserData({ ...userData, username: username });
        break;
      case "password":
        const password = e.target.value;
        setUserData({ ...userData, password: password });
        break;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await userModel.login(userData.username, userData.password);
      dispatch({ type: "SAVE_TOKEN", payload: token });
      const userId = await userModel.getUserIdByUsername(userData.username);
      navigate(`/budgetplanner/${userId}`);
    } catch (err) {
      console.log(`Login Error: ${err}`);
      setLoginError("Invalid username or password. Please try again.");

    }
  };

  return (
    <div  className="login-form">
      <LoginForm
        onChange={onChange}
        onSubmit={onSubmit}
        email={userData.username}
        password={userData.password}
      />
      {loginError && <div className="error">{loginError}</div>}
      <Link to="/register">Don't have a username yet? Register Here!</Link>
    </div>
  );
}

export default AuthController;
