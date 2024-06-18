// ProfileForm.js
import React, { useState } from "react";
import axios from "axios";
import MyNavbar from "../../MyNavbar";
import Sidebar from "../UserShared/SidebarUser";

const ProfileUpdate = () => {
  const [firstname, setFirstname] = useState("");
  //   const [email, setEmail] = useState('');
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3001/api/profile/13`, {
        // Replace '1' with the actual user ID
        firstname,
        lastname,
        username,
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update profile");
    }
  };

  return (
    <>
      <MyNavbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-y-auto p-2">
          {/* <Container />  */}
          <div className="flex justify-center align-middle">
            <p className="text-xl font-bold text-indigo-700">Update Profile</p>
          </div>
          <div className="flex   h-[85vh] w-100 p-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow rounded px-3 mt-1  w-full "
            >
              <div className="flex flex-row gap-4 justify-between">
                <div className="mb-4 w-[50%]">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="director"
                    aria-required
                  >
                    First Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="director"
                    type="text"
                    placeholder="Enter First name"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>

                <div className="mb-4 w-[50%]">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="director"
                    aria-required
                  >
                    Last Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="director"
                    type="text"
                    placeholder="Enter Lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
              <div  className="flex flex-row gap-4 justify-between">
                <div className="mb-4 w-[50%]">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="director"
                    aria-required
                  >
                    User Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="director"
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-4 w-[50%]">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="director"
                    aria-required
                  >
                    Other things .....
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="director"
                    type="text"
                    placeholder="This is for other if we want to update "
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-row gap-4 justify-between">
                <div className="mb-4 w-[50%]">
                  <div className="flex flex-row mt-3 justify-between">
                    <label
                      className="block text-gray-700 font-bold "
                      htmlFor="title"
                    >
                      Attach Image
                    </label>
                    <input
                      className="shadow appearance-none border rounded  py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="title"
                      type="file"
                      placeholder="select Image"
                      //   onChange={handleImageChange}
                      //   key={inputKey} // Use the inputKey to force re-render
                    />

                    {/* {selectedImage && (
                      <img
                        width="100"
                        height="100"
                        src={URL.createObjectURL(selectedImage)}
                        alt="Selected"
                        className="ml-4  border-full  bg-white shadow"
                      />
                    )} */}
                  </div>
                </div>
                {/* Other form fields */}
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Register Movie
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUpdate;
