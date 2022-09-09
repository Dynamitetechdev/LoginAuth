import React from "react";
import "./App.css";
import Header from "./components/header";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import { Outlet } from "react-router-dom";
import useToken from "./useToken";

function App() {
  const [openMenu, setOpenMenu] = React.useState(false);

  const { token, setToken } = useToken();
  // const [token, setToken] = React.useState();

  return (
    <div className="App">
      <Header setOpenMenu={setOpenMenu} openMenu={openMenu} />
      {!token ? <Login setToken={setToken} /> : <Outlet />}
    </div>
  );
}

export default App;
