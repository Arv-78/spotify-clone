import React from 'react'

function Login() {
  return (
    <div className="container-fluid h p-0" style={{ backgroundColor: "#000000" }}>
      <div className="d-flex h flex-column align-items-center justify-content-center gap-5">
        <img
          className="logo-img"
          src="images/spotify-logo.png"
          alt="spotify-logo"
        />
        <a
          className="btn btn-outline-success btn-lg"
          href={`https://accounts.spotify.com/authorize?response_type=token&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=user-read-email user-read-private user-read-currently-playing&show_dialog=true`}
        > 
          Login with Spotify
        </a>
      </div>
    </div>
  )
}

export default Login;