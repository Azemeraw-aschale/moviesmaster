import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom'
import Header from './Header'
import CustomerSidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { FaBars } from 'react-icons/fa6';
import MainContent from './MainContent';

const Customer = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const drawerRef = useRef(null);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarVisible(true);
      } else {
        setSidebarVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially to set the sidebar visibility based on the initial screen size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const handleOutsideClick = (event) => {
    if (!drawerRef.current.contains(event.target)) {
      setDrawerVisible(false);
    }
  };


  useEffect(() => {
    if (drawerVisible) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [drawerVisible]);

  return (

    <div className={`bg-white h-screen w-screen overflow-hidden flex flex-row ${drawerVisible ? 'drawer-visible' : ''}`}>
      {sidebarVisible && <CustomerSidebar />}
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 p-4 min-h-0 overflow-auto">
          <Outlet />
        </div>
      </div>
      {drawerVisible && (
        <div ref={drawerRef} className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50" onClick={toggleDrawer}>
          <div className="h-full flex flex-col justify-between">
            <CustomerSidebar />
          </div>
        </div>
      )}
      <button
        className="fixed top-2 left-2 text-gray-600 focus:outline-none z-50 md:hidden bg-transparent"
        onClick={toggleDrawer}
      >
        <FaBars size={24} />
      </button>
     
    </div>

  );
};

export default Customer