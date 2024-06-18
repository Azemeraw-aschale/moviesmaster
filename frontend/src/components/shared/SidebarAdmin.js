import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarAdmin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`bg-gray-200 h-full w-64 fixed top-20 left-0 z-40 py-8 px-4 transition-transform duration-300 ${
        isSidebarOpen || 'md:translate-x-0 md:-translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center mb-4 md:hidden">
        <button
          className="md:hidden"
          onClick={toggleSidebar}
        >
          <svg
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isSidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>
      <ul>
        <li><a href="#" className="block py-2 hover:bg-gray-300">Dashboard</a></li>
        <li><a href="#" className="block py-2 hover:bg-gray-300">Report</a></li>
       <Link to="/allusers">All users</Link>
        <li><a href="#" className="block py-2 hover:bg-gray-300">settings</a></li>
        <li><a href="#" className="block py-2 hover:bg-gray-300">Feature</a></li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;