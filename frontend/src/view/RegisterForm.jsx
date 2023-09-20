import { Link } from "react-router-dom";
function RegisterForm(props) {
  const { onSubmit, onChange, username, password, registrationSuccess  } = props;
  return (
    <div className="popup-overlay">
      <div className="popup-container">
      <h2>Register Here!</h2>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              onChange={onChange}
              id="username"
              name="username"
              type="text"
              value={username}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              onChange={onChange}
              id="password"
              name="password"
              type="password"
              value={password}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
        {registrationSuccess && (
          <div className="success-message">Registration successful!</div>
        )}
        <Link to="/">Already have a username? Login Here!</Link>
      </div>
    </div>
  );
}

export default RegisterForm;
