import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store";

function UserPlaylists() {
    const dispatch = useDispatch()


  const token = useSelector((state) => state.token.tokenString);
  const [data, setData] = useState([]);
  useEffect(()=>{
      async function fetchFeaturedPlaylist() {
        const response = await fetch("https://api.spotify.com/v1/me/playlists", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
      
        setData(data);  
      }
      fetchFeaturedPlaylist();
  },[token])


  function handleClick(playlistHref){
    dispatch(userActions.setActiveItem("Playlist")); //set main item to show playlist
    dispatch(userActions.setplaylistUrl(playlistHref)) //set url
  }

  return (
    <>
      {data.items?.map((item, index) => {
        return (
          <div className="d-flex ps-4 cursor user-list" key={index} onClick={()=>{handleClick(item.tracks.href)}}>
            <img
              className="bi bi-music-note-list my-auto rounded"
              src={item.images[0].url}
              alt="list-img"
              style={{width: '3rem'}}
            />
            <div className="ms-3 my-auto">{item.name}</div>
          </div>
        );
      })}
    </>
  );
}

export default UserPlaylists;
