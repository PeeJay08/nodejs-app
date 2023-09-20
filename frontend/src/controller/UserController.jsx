import { useState } from "react";
import RegisterForm from "../view/RegisterForm";
import userModel from "../model/UserModel";
import { useNavigate } from "react-router-dom";

function UserController() {
  const navigate = useNavigate();
  const [currentUsers, setCurrentUsers] = useState([]);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState("");
  const handleInput = (event) => {
    switch (event.target.name) {
      case "username":
        setUser({
          ...user,
          username: event.target.value,
        });
        break;
      case "password":
        setUser({
          ...user,
          password: event.target.value,
        });
        break;
      default:
        break;
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newUser = await userModel.addUser({ ...user });
      setCurrentUsers([...currentUsers, newUser]);
      setRegistrationSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setRegistrationSuccess(false);
      setRegistrationError("Username is taken already. Please try again");
    }
  };
  return (
    <div>
      <div className="popup-container">
        <RegisterForm
          onChange={handleInput}
          onSubmit={handleSubmit}
          username={user.username}
          password={user.password}
          registrationSuccess={registrationSuccess}
        />
        {registrationError && <div className="error">{registrationError}</div>}
      </div>
    </div>
  );
}
export default UserController;
