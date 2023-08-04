import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Footer from "./Footer";

function Home() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.tokenString);

  //get user info
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(" https://api.spotify.com/v1/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      dispatch(userActions.addUser(data));
    }
    fetchData();
  }, [token, dispatch]);

  return (
    <div className="container-fluid bg-warning" style={{ height: "100vh" }}>
      <div className="row">
        <div className="col-md-2 p-0" style={{ backgroundColor: "#1ED760" }}>
          <Sidebar />
        </div>
        <div
          className="col-md-10"
          style={{
            backgroundColor: "#0F0F0F",
          }}
        >
          <Main />
        </div>
      </div>
      <div className="row">
        <div
          className="col-12 position-fixed bottom-0"
          style={{ backgroundColor: "#2E2E2E"}}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
