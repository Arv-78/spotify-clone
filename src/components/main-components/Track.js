import React from "react";
import "./Track.css";
import { useDispatch } from "react-redux";
import { userActions } from "../../store";

function Track(track) {
  const dispatch = useDispatch();
  if (track.track?.duration_ms) {
    var time = track.track?.duration_ms;
    time /= 1000;
    time = Math.floor(time);
    var sec = time % 60;
    time /= 60;
    time = Math.floor(time);
  }

  function handleClick() {
    const imgUrl = track.track.album?.images[0].url;
    const title = track.track?.name;
    const artist = track.track.artists[0]?.name;
    const trackTime = `${time + ":" + sec}`;

    dispatch(userActions.setcurrentTrackInfo({ imgUrl, title, artist, trackTime }));
  }

  return (
    <div
      className="d-flex justify-content-between rounded mb-2"
      style={{ backgroundColor: "#191825" }}
      onClick={handleClick}
    >
      <div className="d-flex">
        <img
          className="track-img p-2"
          src={track.track.album?.images[0].url}
          alt="track-img"
        />
        <div className="d-flex flex-column ms-4" style={{ width: "10rem" }}>
          <p className="fs-6 text-white mb-1">
            {track.track?.name.substring(0, 17) +
              (track.track?.name.length > 17 ? "..." : "")}
          </p>
          <p className="fs-6 text-white mb-2">{track.track.artists[0]?.name}</p>
        </div>
      </div>
      <p className="fs-6 text-white my-auto" style={{ width: "20rem" }}>
        {track.track.album?.name}
      </p>
      <p className="fs-6 text-white my-auto" style={{ width: "5rem" }}>
        {time + ":" + sec}
      </p>
    </div>
  );
}

export default Track;
