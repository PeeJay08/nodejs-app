function LoginForm(props) {
  const { onSubmit, onChange, username, password } = props;
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            onChange={onChange}
            id="username"
            name="username"
            type="username"
            value={username}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            onChange={onChange}
            id="password"
            name="password"
            type="password"
            value={password}
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
export default LoginForm;
