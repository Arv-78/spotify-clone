import React from "react";
import FeaturedList from "./FeaturedList";
import WeeklyPlaylist from "./WeeklyPlaylist";
import "./Home.css";

//greeting
//featured list
//weeks songs

function Home() {
  function greeting() {
    var date = new Date();
    var hours = date.getHours();
    if (hours < 12) {
      return "Good Morning!";
    } else if (hours >= 12 && hours <= 17) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  }

  return (
    <div
      className="container w-100 overflow-scroll hideScroll"
      style={{ height: "90vh" }}
    >
      <div className="row">
        <div className="col fs-1 mt-4 text-color">{greeting()}</div>
      </div>
      <div className="row">
        <div className="col-12 fs-4 text-white mt-4">Featured Playlist</div>
        <div className="col-12 mt-3">
          <FeaturedList />
        </div>
      </div>
      <div className="row">
        <div className="col-12 fs-4 text-white mt-4">This Weekly Playlist</div>
        <div className="col-12 mt-3">
          <WeeklyPlaylist />
        </div>
      </div>
    </div>
  );
}

export default Home;
