import React from 'react'
import FeaturedList from './FeaturedList'

function SidebarFeaturedList() {
  return (
    <div
    className="container w-100 overflow-scroll hideScroll"
    style={{ height: "90vh" }}
  >
    <div className="row">
      <div className="col-12 fs-4 text-white mt-4">Featured Playlist</div>
      <div className="col-12 mt-3">
        <FeaturedList />
      </div>
    </div>
  </div>
  )
}

export default SidebarFeaturedList