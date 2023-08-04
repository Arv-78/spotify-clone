import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { useDispatch } from "react-redux";
import { tokenActions } from "./store";

function App() {
  const [token, setToken] = useState("");
  const dispatch = useDispatch()
  useEffect(() => {
    if (window.location.hash) {
      const access_token = window.location.hash
        .split("#")[1]
        .split("&")[0]
        .split("=")[1];
      setToken(access_token);
      dispatch(tokenActions.setToken(access_token))
    }

  }, [dispatch]);


  return <>{!token ? <Login /> : <Dashboard />}</>;
}

export default App;
