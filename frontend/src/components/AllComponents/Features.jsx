import React from 'react'
import MyNavbar from './MyNavbar'
import Sidebar from './Sidebar'
function Features() {
  return (
    <>
    <MyNavbar/>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto p-2 bg-slate-400">
        {/* <Container /> */}
        This is Features  
      </div>
    </div>
    </>
  )
}

export default Features
