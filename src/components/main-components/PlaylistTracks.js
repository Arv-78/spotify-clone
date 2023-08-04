import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Track from "./Track";
import "./FeaturedList.css";

function PlaylistTracks() {
  const token = useSelector((state) => state.token.tokenString);
  const playlistHref = useSelector((state) => state.user.playlistUrl);
  const [tracks, setTracks] = useState();
  useEffect(() => {
    async function fetchFeaturedPlaylist() {
      const response = await fetch(`${playlistHref}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      // console.log(data);
      setTracks(data);
    }
    fetchFeaturedPlaylist();
  }, [token, playlistHref]);

  //items[1].track artists[0].name name allbum.images[0].url

  return (
    <div className="container w-100">
      <div className="d-flex justify-content-between rounded mb-2 mt-5">
        <p className="fs-5 text-white my-auto" style={{ width: "15rem" }}>
          Title
        </p>
        <p className="fs-5 text-white my-auto" style={{ width: "20rem" }}>
          Album
        </p>
        <p className="fs-5 text-white my-auto" style={{ width: "5rem" }}>
          Time
        </p>
      </div>
      <hr className="bg-white mb-4 rounded" style={{ height: "5px" }} />
      <div className="container overflow-scroll hideScroll" style={{height: '80vh'}}>
        {tracks?.items.map((track, index) => {
          return <Track track={track.track} key={index} />;
        })}
      </div>
    </div>
  );
}

export default PlaylistTracks;
