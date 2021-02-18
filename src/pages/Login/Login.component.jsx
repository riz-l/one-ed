// Import: Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Import: Elements
import { Container } from "./Login.elements";

// Page: Login
export default function Login(props) {
  return (
    <>
      <Container>
        <h1>Login</h1>
        <p>
          <Link to="/dashboard">View Dashboard</Link>
        </p>
        <p>Logged in status: {props.isLoggedIn}</p>
        <button onClick={props.handleLogin}>Log In</button>
      </Container>
    </>
  );
}
