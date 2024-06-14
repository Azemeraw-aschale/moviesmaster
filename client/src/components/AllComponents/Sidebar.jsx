import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { IoLogOut, IoLogOutSharp, IoSettings } from "react-icons/io5";
import {
  MdAddAPhoto,
  MdArrowDropDown,
  MdDashboard,
  MdManageAccounts,
  MdMovieEdit,
  MdMovieFilter,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isMoviesDropdownOpen, setIsMoviesDropdownOpen] = useState(false);

  const toggleMoviesDropdown = () => {
    setIsMoviesDropdownOpen(!isMoviesDropdownOpen);
  };

  return (
    <div className="bg-[#293A77] text-white h-screen p-6 border-r-slate-500 border-1 shadow-sm" style={{ width: "250px" }}>
      {/* Dashboard */}
      <Link to="/dashboard" className="no-underline">
        <div className="mb-6 cursor-pointer py-2 rounded hover:bg-blue-900 p-6">
          <a href="#" className="flex items-center text-white text-lg gap-1 no-underline  hover:text-white">
            <FaHome />
            <span className=" hover:text-white">Dashboard</span>
          </a>
        </div>
      </Link>
      {/* Report */}
      <div>
        {/* Movie Management */}
        <div className="mb-2 cursor-pointer" onClick={toggleMoviesDropdown}>
          <div className="hover:bg-blue-900 p-1 hover:rounded">
            <a href="#" className="flex items-center text-white text-lg gap-2 no-underline  hover:text-white">
              <MdManageAccounts />
              <span>Reports</span>
              <MdArrowDropDown/>
            </a>
          </div>
          {isMoviesDropdownOpen && (
            <div className="pl-2">
              <Link to="/report" className="no-underline">
                <div className="mb-2 cursor-pointer hover:bg-blue-900 p-1 hover:rounded">
                  <a href="#" className="flex items-center text-white  text-base gap-2 no-underline  hover:text-white">
                    <MdManageAccounts />
                    <span>Movie Report</span>
                  </a>
                </div>
              </Link>
              <Link to="/totalusers" className="no-underline">
                <div className="mb-6 cursor-pointer hover:bg-blue-900 p-1 hover:rounded">
                  <a href="#" className="flex items-center text-white text-base gap-2 no-underline  hover:text-white">
                    <MdManageAccounts />
                    <span>Customer Report</span>
                  </a>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* Add movies */}
      <Link to="/MoviesRegster" className="no-underline">
        <div className="mb-6 cursor-pointer  hover:bg-blue-900 p-1 hover:rounded">
          <a href="#" className="flex items-center  text-white text-lg gap-2 no-underline  hover:text-white">
            <MdAddAPhoto />
            <span>Add Movie</span>
          </a>
        </div>
      </Link>
      {/* Features */}
      <Link to="/movielist" className="no-underline">
        <div className="mb-6 cursor-pointer  hover:bg-blue-900 p-1 hover:rounded">
          <a href="#" className="flex items-center text-white text-lg gap-2 no-underline  hover:text-white">
            <MdMovieFilter />
            <span>Movie list</span>
          </a>
        </div>
      </Link>
      {/* Settings */}
      <Link to="/settings" className="no-underline">
        <div className="mb-6 cursor-pointer hover:bg-blue-900 p-1 hover:rounded">
          <a href="#" className="flex items-center text-white text-lg gap-2 no-underline  hover:text-white">
            <IoSettings />
            <span>Setting</span>
          </a>
        </div>
      </Link>
      {/* Logout */}
      <div className="absolute bottom-6 left-6 cursor-pointer  hover:bg-blue-900 p-1 hover:rounded ">
        <a href="#" className="flex items-center gap-2 text-red-500 text-lg no-underline  hover:text-white">
          <IoLogOutSharp />
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
