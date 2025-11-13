import { useRef, useState } from "react";
import "./LoginForm.css";

function LoginForm({ onSubmit }) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleUsernameChange = (e) => {
    setUsernameValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    onSubmit(formData);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        ref={usernameRef}
        id="username"
        type="text"
        value={usernameValue}
        onChange={handleUsernameChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        ref={passwordRef}
        id="password"
        type="password"
        value={passwordValue}
        onChange={handlePasswordChange}
      />

      <button id="login-button" type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
