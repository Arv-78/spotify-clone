import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store';

function WeeklyPlaylist() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.token.tokenString)
    const playlist = useSelector(state => state.user.weeklyPlaylist)
    useEffect(() => {
        async function fetchFeaturedPlaylist() {
          const response = await fetch(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent('this week')}&type=playlist`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          const data = await response.json();
        dispatch(userActions.setWeeklylist(data));
        }
        fetchFeaturedPlaylist();
      }, [token, dispatch]);

      function handleClick(playlistHref){
        dispatch(userActions.setActiveItem("Playlist")); //set main item to show playlist
        dispatch(userActions.setplaylistUrl(playlistHref)) //set url
      }

  return (
    <>
      <div className="d-flex flex-row flex-nowrap overflow-scroll hideScroll">
        {playlist.playlists ? (
          playlist.playlists.items.map((list, index) => {
            return (
              <div
                className="card me-4 mb-4 border-0"
                key={index}
                style={{ minWidth: "13rem"}}
                onClick={()=>{handleClick(list.tracks.href)}}
              >
                <img
                  src={list.images[0].url}
                  className="card-img-top"
                  alt="playlist-img"
                />
                <div
                  className="card-body text-white"
                  style={{ backgroundColor: "#272829", fontSize: "0.9rem" }}
                >
                  <div className="card-title fs-6">{list.name}</div>
                  <div className="card-text">{list.description.slice(0, 20) + '...'}</div>
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ height: "10rem" }}>loading</div>
        )}
      </div>
    </>
  )
}

export default WeeklyPlaylist