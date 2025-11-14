import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  const [log, setLog] = useState([]);

  const handleSubmit = (data) => {
    setLog((prev) => {
      const updatedLog = [...prev, data];
      console.clear(); // Clear console for a clean fresh list
      updatedLog.forEach((entry, index) => {
        console.log(`Entry #${index + 1}:`);
        console.log(JSON.stringify(entry, null, 2));
      });
      return updatedLog;
    });
  };

  return (
    <div className="App">
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
