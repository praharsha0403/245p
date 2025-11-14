import { useRef, useState } from "react";
import "./LoginForm.css";

function LoginForm({ onSubmit }) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (e) => {
    setUsernameValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const validate = () => {
    const newErrors = {};
    if (!usernameValue.trim()) newErrors.username = "Username is required.";
    if (!passwordValue.trim()) newErrors.password = "Password is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    const formData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    onSubmit(formData);
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="icon">🔒</div>
        <h2>Welcome Onboard!</h2>
        <p>Your journey starts here — let’s build something CRAZY!</p>

        <label htmlFor="username">USERNAME</label>
        <input
          ref={usernameRef}
          id="username"
          type="text"
          value={usernameValue}
          onChange={handleUsernameChange}
          required
        />
        {errors.username && <div className="error">{errors.username}</div>}

        <label htmlFor="password">PASSWORD</label>
        <input
          ref={passwordRef}
          id="password"
          type="password"
          value={passwordValue}
          onChange={handlePasswordChange}
          required
        />
        {errors.password && <div className="error">{errors.password}</div>}

        <button id="login-button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
