import React from "react";
import { useSelector } from "react-redux";
import SongSlider from "./footer-components/SongSlider";

function Footer() {
  const track = useSelector(state => state.user.currentTrackInfo)
  return (
    <div
      className="d-flex flex-row px-4"
      style={{ height: "10vh", width: "100%" }}
    >
      <div className="d-flex align-items-center" style={{ width: "25%" }}>
        <img
          className="rounded-circle"
          src={track.imgUrl}
          alt="track-img"
          style={{ width: "3.5rem", height: "3.5rem" }}
        />
        <div className="d-flex flex-column ms-3">
          <p className="text-white fs-6 mb-1">{track.title}</p>
          <p className="text-white fs-6 mb-1">{track.artist}</p>
        </div>
      </div>
      <div className="d-flex align-items-center" style={{ width: "50%" }}>
        <div className="d-flex text-white gap-3 fs-4" style={{ width: "20%"}}>
          <i className="bi bi-chevron-bar-left"></i>
          <i className="bi bi-pause"></i>
          <i className="bi bi-chevron-bar-right"></i>
        </div>
        <div className="d-flex gap-3 align-items-center" style={{ width: "80%"}}>
          <p className="text-white fs-6 mb-1">0:0</p>
          <SongSlider />
          <p className="text-white fs-6 mb-1">{track.trackTime}</p>
        </div>
      </div>
      <div className="d-flex text-white gap-3 align-items-center ms-5 fs-2" style={{ width: "20%"}}>
        <i className="bi bi-volume-down"></i>
        <SongSlider />
      </div>
    </div>
  );
}

export default Footer;
