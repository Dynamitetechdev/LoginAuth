import { useState, React } from "react";
import PropTypes from "prop-types";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  // local state for our login inputs
  const [email, setUsername] = useState();
  const [password, setPassword] = useState();

  // form submit handler
  const handleSumbit = async (e) => {
    e.preventDefault();

    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
  };
  return (
    <form action="" onSubmit={handleSumbit}>
      <h1 className="text-center">Please Login!</h1>
      <label htmlFor="">Email</label>
      <input
        type="email"
        name="email"
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="">Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="loginBtn" type="submit">
        Login
      </button>
    </form>
  );
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
