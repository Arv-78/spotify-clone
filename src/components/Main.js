import React from "react";
import { useSelector } from "react-redux";
import Home from "./main-components/Home";
import Profile from "./main-components/Profile";
import Search from "./main-components/Search";
import PlaylistTracks from "./main-components/PlaylistTracks";
import SidebarFeaturedList from "./main-components/SidebarFeaturedList";

function Main() {
  const activeItem = useSelector((state) => state.user.activeMainItem);

  return (
    <>
      {activeItem === "Home" && <Home />}
      {activeItem === "Profile" && <Profile />}
      {activeItem === "Search" && <Search />}
      {activeItem === "Playlist" && <PlaylistTracks />}
      {activeItem === "List" && <SidebarFeaturedList />}
    </>
  );
}

export default Main;
