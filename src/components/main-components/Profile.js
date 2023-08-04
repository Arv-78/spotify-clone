import React from "react";
import { useSelector } from "react-redux";

import "./Profile.css";

function Profile() {
  const userInfo = useSelector((state) => state.user.userInfo);

  return (
    <div className="container" style={{height: '90vh'}}>
      <div className="row">
        <div className="col">
          <div className="text-white fs-1 mt-4 ms-5">Profile</div>
        </div>
      </div>
      <div className="d-flex gap-5">
        {userInfo.images ? (
          <img
            className="profile-img mt-4 ms-5"
            src={userInfo.images[1].url}
            alt="user-img"
          />
        ) : (
          <i className="bi bi-person-circle fs-1 mt-4 ms-5"></i>
        )}

        {userInfo.display_name ? (
          <div className="d-flex flex-column my-auto">
            <div className="fs-3 text-white">{userInfo.display_name}</div>
            <div className="text-secondary mb-3">{userInfo.email}</div>
            <a
              className="btn btn-success rounded-pill"
              href="https://spotify.com"
            >
              Open in spotify<i className="ms-2 bi bi-box-arrow-up-right"></i>
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Profile;
