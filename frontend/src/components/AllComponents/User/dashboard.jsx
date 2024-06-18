// App.js
import React from 'react';
// import MySidebar from './components/MySidebar';
import MyNavbar from '../MyNavbar'
import Sidebar from '../Sidebar'
import Container from './Container'
const Dashboard = () => {
  return (
    <>
    <MyNavbar/>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Container />
      </div>
    </div>
    </>
  );
};

export default Dashboard;