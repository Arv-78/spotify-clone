import React, { useEffect, useState } from "react";
import "./Search.css";
import { useSelector } from "react-redux";
import Track from "./Track";
function Search() {
  const token = useSelector((state) => state.token.tokenString);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // var change = false;
  useEffect(() => {
    if (!search) setSearchResults([]);
    // if (!change) {
      async function fetchFeaturedPlaylist() {
        if (search) {
          const response = await fetch(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(
              search
            )}&type=track`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          const data = await response.json();
          setSearchResults(data);
        }
      }
      // change = true;
      fetchFeaturedPlaylist();
    // }
  }, [search, token]);

  const handleChange = (event) => {
    const key = event.target.value;
    // console.log(key);
    setSearch(key);
  };

  return (
    <div className="container">
      <div className="col-12 mt-5">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text bg-dark border-0 text-white"
              id="basic-addon1"
            >
              <i className="bi bi-search"></i>
            </span>
          </div>
          <input
            type="text"
            className="form-control text-white bg-dark border-0 input-color"
            placeholder="Search for artists, music and genres..."
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="col-12 overflow-scroll hide-scroll" style={{height: '80vh'}}>
        {searchResults.tracks?.items.map((track, index) => {
          return (
           <Track track={track} key={index}/>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
