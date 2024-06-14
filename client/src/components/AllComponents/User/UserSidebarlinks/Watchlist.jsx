import React from 'react'
import MyNavbar from "../../MyNavbar";
import Sidebar from "../UserShared/SidebarUser";
function Watchlist() {
  return (
    <>
    <MyNavbar/>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        Setting user
      </div>
    </div>
    </>
  )
}

export default Watchlist