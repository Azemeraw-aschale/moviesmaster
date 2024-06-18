import MyNavbar from './MyNavbar'
import Sidebar from './Sidebar'
import React from 'react'

function Settings() {
  return (
    <>
    <MyNavbar/>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        {/* <Container /> */}
        This is Settings 
      </div>
    </div>
    </>
  )
}

export default Settings
