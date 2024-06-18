// ProfileView.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import MyNavbar from "../UserShared/SidebarUser";
import Sidebar from "../../MyNavbar";

const ProfileView = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/profileview/13`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, []);

  // if (!user) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <MyNavbar />
      <div className="flex h-screen">
        <Sidebar />
          <div className="flex-1 overflow-y-auto p-2">
            <div className="flex justify-center align-middle">
              <p className="text-xl font-bold text-indigo-700">User Profile</p>
            </div>
            <div className="flex h-[85vh] w-100 p-2">
              <div className="bg-white shadow rounded px-3 mt-1 w-full">
                <div className="flex flex-row gap-4 justify-between">
                  <div className="mb-4 w-[50%]">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="firstName"
                      aria-required
                    >
                      First Name
                    </label>
                    <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                      {user.firstname}
                    </p>
                  </div>
                  <div className="mb-4 w-[50%]">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="lastName"
                      aria-required
                    >
                      Last Name
                    </label>
                    <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                      {user.lastname}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 justify-between">
                  <div className="mb-4 w-[50%]">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="username"
                      aria-required
                    >
                      Username
                    </label>
                    <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                      {user.username}
                    </p>
                  </div>
                  <div className="mb-4 w-[50%]">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="other"
                      aria-required
                    >
                      Other
                    </label>
                    <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                      {user.other}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4 justify-between">
                  <div className="mb-4 w-[50%]">
                    <div className="flex flex-row mt-3 justify-between">
                      <label
                        className="block text-gray-700 font-bold "
                        htmlFor="profileImage"
                      >
                        Profile Image
                      </label>
                      {user.profileImage && (
                        <img
                          width="100"
                          height="100"
                          src={user.profileImage}
                          alt="Profile"
                          className="ml-4 border-full bg-white shadow"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default ProfileView;