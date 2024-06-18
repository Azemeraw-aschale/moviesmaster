import React, { useState } from 'react';
import logo from '../image/4.jpg';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const MyNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white py-3 sticky top-0  shadow">
      <div className=" px-4 flex items-center justify-between">
        {/* Company Logo and Name */}
        <div className="flex items-center ">
          <img src={logo} alt="Company Logo" className="h-8  w-8  hidden sm:block rounded-full" />
          <span className="text-black font-bold text-lg hidden sm:block pl-2">Company Name</span>
        </div>

        {/* Search Bar */}
        {/* <div className="w-full max-w-md mx-auto sm:mx-0 sm:ml-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input type="text" className="block w-full bg-gray-700 border-none rounded-md py-1 pl-10 pr-4 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Search..." />
          </div>
        </div> */}
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0 ">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaSearch style={{color:'gray', height:'16px'}}/>
                    </div>
                    <input
                      type="text"
                      className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"                      placeholder="Search"
                      required
                      aria-label="filterbox"
                      aria-describedby="basic-addon1"
                      onChange
                    />
                  </div>
                  
                </div>

        {/* Notification and Avatar */}
        <div className="flex items-center relative">
          <div className="relative mr-4">
            <svg className="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
            <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-500 rounded-full text-black text-xs font-bold leading-none pt-0.5">3</span>
          </div>
          <div className="relative">
            <img
              src={logo}
              alt="Avatar"
              className="h-10 w-10 rounded-full cursor-pointer"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg w-48 z-10">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Settings
                  </a>
                  <Link to="/profileupdate">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Profile
                  </a>
                  </Link>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Logout
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Payment Methods
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;