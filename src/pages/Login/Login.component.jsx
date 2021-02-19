// Import: Dependencies
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { lorenzoToken } from "../../utils/axios";

// Import: Elements
import { Container } from "./Login.elements";

// Page: Login
export default function Login(props) {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function getApiData() {
      axios
        .all([lorenzoToken.get(``, {})])
        .then(
          axios.spread((lorenzoTokenRes) => [setApiData(lorenzoTokenRes.data)])
        )
        .catch((error) => {
          console.log(error);
          throw new Error(error);
        });
    }

    getApiData();
  }, []);

  return (
    <>
      <Container>
        <h1>Login</h1>
        <p>
          <Link to="/dashboard">View Dashboard</Link>
        </p>
        <p>Logged in status: {props.isLoggedIn}</p>
        <button onClick={props.handleLogin}>Log In</button>

        <br />
        <br />
        <br />

        <div>{apiData.toString()}</div>
      </Container>
    </>
  );
}
