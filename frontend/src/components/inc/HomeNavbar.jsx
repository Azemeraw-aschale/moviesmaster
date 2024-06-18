import React, { useState } from "react";
import logo from "../image/4.jpg";
import { Link } from "react-router-dom";
const MyNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-[#293A77] py-3 fixed-top shadow ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Company Logo and Name */}
        <div className="flex items-center ">
          <img
            src={logo}
            alt="Company Logo"
            className="h-8  w-8  hidden sm:block rounded-full"
          />
          <span className=" text-white font-bold text-lg hidden sm:block pl-2">
            Company Name
          </span>
        </div>

        <div class="flex justify-center ">
          <ul class="flex space-x-4 align-middle gap-2">
          <Link to="/home" className=" hover:bg-blue-500 cursor-pointer no-underline p-1 hover:rounded text-white ">Home</Link>
            <Link to="/about" className=" hover:bg-blue-500 cursor-pointer no-underline p-1 hover:rounded text-white ">About</Link>
            <Link to="/contact" className=" hover:bg-blue-500 cursor-pointer no-underline p-1 hover:rounded text-white ">Contact</Link>
            <Link to ="/login" className=" hover:bg-blue-500 cursor-pointer no-underline p-1 text-white  hover:rounded" >Login</Link>
          </ul>
        </div>

      
      </div>
    </nav>
  );
};

export default MyNavbar;
