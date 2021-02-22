// Import: Dependencies
import React from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { lorenzoToken } from "../../utils/axios";

// Import: Elements
import { Container } from "./Login.elements";

// Page: Login
export default function Login(props) {
  // State: apiData
  // const [apiData, setApiData] = useState([]);

  // useEffect(() => {
  //   async function getApiData() {
  //     axios
  //       .all([lorenzoToken.get(``, {})])
  //       .then(
  //         axios.spread((lorenzoTokenRes) => [setApiData(lorenzoTokenRes.data)])
  //       )
  //       .catch((error) => {
  //         console.log(error);
  //         throw new Error(error);
  //       });
  //   }

  //   getApiData();
  // console.log(apiData);
  // }, []);

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
