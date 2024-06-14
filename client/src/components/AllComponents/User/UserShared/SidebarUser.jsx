import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { MdDashboard, MdMovieCreation, MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isMoviesDropdownOpen, setIsMoviesDropdownOpen] = useState(false);

  const toggleMoviesDropdown = () => {
    setIsMoviesDropdownOpen(!isMoviesDropdownOpen);
  };

  return (
    <div className="bg-[#293A77] text-white h-screen p-6  border-r-slate-500 border-1 shadow-sm"style={{ width: "250px" }}>
      {/* Dashboard */}
      <Link to="/userdashboard" className="no-underline">
        <div className="mb-6 cursor-pointer py-2  rounded hover:bg-blue-900 p-6">
          <a href="#" className="flex items-center text-white text-lg gap-1 no-underline  hover:text-white">
            <MdDashboard/>
            <span className=" hover:text-white">User Dashboard</span>
          </a>
        </div>
      </Link>
      {/* Report */}
      
      <Link to="/watchlists" className="no-underline">
      <div className="mb-6 cursor-pointer  hover:bg-blue-900 p-1 hover:rounded">
      <a href="#" className="flex items-center  text-white text-lg gap-2 no-underline  hover:text-white">
      <MdMovieCreation/>
            <span>Watch Lists</span>
          </a>
        </div>
      </Link>
      
      <Link to="/favorites"  className="no-underline">
        {/* Add movies */}
        <div className="mb-6 cursor-pointer  hover:bg-blue-900 p-1 hover:rounded">
        <a href="#" className="flex items-center text-white text-lg gap-2 no-underline  hover:text-white">
        <FaHeart/>
            <span>Favorites</span>
          </a>
        </div>
      </Link>
      <Link to="/usersettings" className="no-underline">
        {/* Setting */}
        <div className="mb-6 cursor-pointer hover:bg-blue-900 p-1 hover:rounded">
        <a href="#" className="flex items-center text-white text-lg gap-2 no-underline  hover:text-white">
        <MdSettings/>
            <span>Setting</span>
          </a>
        </div>
      </Link>
      {/* Logout */}
      <div className="absolute bottom-6 left-6 cursor-pointer  hover:bg-blue-900 p-1 hover:rounded ">
      <a href="#" className="flex items-center gap-2 text-red-500 text-lg no-underline  hover:text-white">
      <svg
            className="h-6 w-6 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
