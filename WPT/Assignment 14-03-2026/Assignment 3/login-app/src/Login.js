// 12. Rebuild any previous plain HTML lab assignment using React
import React, { useState } from "react";
export default function Login(){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful\nUsername: " + username);
  };

  return (
    <div style={{
      width: "300px",
      margin: "auto",
      marginTop: "100px",
      textAlign: "center"
    }}>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />

        <button type="submit">Login</button>

      </form>
    </div>
  );
}


