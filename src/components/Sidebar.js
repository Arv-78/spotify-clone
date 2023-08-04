import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { userActions } from "../store";
import UserPlaylists from "./main-components/UserPlaylists";
function Sidebar() {
  const dispatch = useDispatch();

  //toggle sidebar when change below inner width 390px

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(()=>{
    window.addEventListener('resize', ()=>{ //it listens to resize of window
      setScreenWidth(window.innerWidth)
    })

    return (
      window.removeEventListener('resize', ()=>{
        setScreenWidth(window.innerWidth)
      })
    )
  },[])

 

  //main item to display
  function handleHomeClick() {
    dispatch(userActions.setActiveItem("Home"));
  }
  function handleProfileClick() {
    dispatch(userActions.setActiveItem("Profile"));
  }
  function handleSearchClick() {
    dispatch(userActions.setActiveItem("Search"));
  }
  function handleListClick() {
    dispatch(userActions.setActiveItem("List"));
  }


  return (
    <div className="text-white">
      <div
        className="d-flex flex-column fw-light fs-5 gap-2"
        style={{ height: `${screenWidth <= 770 ? "auto" : "90vh"}` }}
      
      >
        <img
          className="mt-4 mb-4 mx-auto" 
          src="images/sidebar-logo.png"
          alt="sidebar-logo"
          style={{ maxWidth: "60%" }}
        />

        {/* Toggle Navbar */}
        {screenWidth <= 770 && (
          <button
            className="btn btn-success fs-4"
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <i className="bi bi-list"></i>
          </button>
        )}
        {/* end */}
    

        <div className={screenWidth <= 770 ? "collapse" : 'd-flex flex-column fw-light fs-5 gap-2'} id="collapseExample" style={{height: `${screenWidth <= 770 ? '60vh' : '90vh'}`}}>
          <div
            className="d-flex ps-4 side-items cursor"
            onClick={handleHomeClick}
          >
            <i className="bi bi-house-fill my-auto"></i>
            <div className="ms-3 my-auto">Home</div>
          </div>
          <div
            className="d-flex ps-4 side-items cursor"
            onClick={handleProfileClick}
          >
            <i className="bi bi-person-circle my-auto"></i>
            <div className="ms-3 my-auto">Profile</div>
          </div>
          <div
            className="d-flex ps-4 side-items cursor"
            onClick={handleSearchClick}
          >
            <i className="bi bi-search my-auto"></i>
            <div className="ms-3 my-auto">Search</div>
          </div>
          <div
            className="d-flex ps-4 side-items cursor"
            onClick={handleListClick}
          >
            <i className="bi bi-music-note-list my-auto"></i>
            <div className="ms-3 my-auto">Featured List</div>
          </div>

          {/* users plalists */}
          <hr className="mx-3 bg-white rounded" style={{ height: "12px" }} />
          <div className="ms-4 my-auto fs-4 fw-bolder">User Playlists</div>
          <div className="d-flex flex-column flex-grow-1 gap-3">
            <UserPlaylists />
          </div>

          <div
            className="d-flex ps-4 side-items mt-auto cursor"
            onClick={() => {
              window.location = process.env.REACT_APP_REDIRECT_URI;
            }}
          >
            <i className="bi bi-box-arrow-right my-auto"></i>
            <div className="ms-3 my-auto">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
