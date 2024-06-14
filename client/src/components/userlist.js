import Sidebar from "./shared/Sidebar";
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
const UserList = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);

  // grap user list
  useEffect(() => {
    fetchEmployees();
  }, []);

// fetching employee list 
  const fetchEmployees = () => {
    Axios.get('http://localhost:3001/userlist')
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
  const deleteEmployee = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");
  
    if (confirmDelete) {
      Axios.delete(`http://localhost:3001/delete/${id}`)
        .then(() => {
          window.alert("Deleted successfully");
          window.alert("User Data deleted successfully")
          fetchEmployees();
        })
        .catch((error) => {
          console.log("Error deleting record", error);
        });
    } else {
      console.log("Deletion canceled by user");
    }
  };
 
  return (

    <div className="grid">
      <h3 className="mb-3 text-secondary">Customer List</h3>
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden h-full">
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-3 md:gap-4 p-4">
          <div className="grid justify-end grid-cols-1 gap-3 p-2 md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 md:gap-4 md:justify-end sm:justify-start lg:justify-end">
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 flex-shrink-0">
              <input
                type="date"
                className="border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Start Date"
                name="start_date"
              />
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 flex-shrink-0">
              <input
                type="date"
                className="border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
                placeholder="End Date"
                name="end_date"
              />
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 flex-shrink-0">
              {/* Add any additional elements or functionality here */}
            </div>
          </div>
          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-start md:space-x-3 flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="bg-gray-50 border mx-2 px-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
                required
                aria-label="filterbox"
                aria-describedby="basic-addon1"
                onChange
              />
            </div>
            <div className="flex grid-cols-1 gap-3 p-2 sm:grid-cols-1 md:grid-cols-1">
              <button
                className="flex space-y-4 items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-blue border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick
              >

                &nbsp;
                Add Customer
              </button>
              <button
                onClick
                type="button"
                className="flex space-y-4 items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >

                &nbsp;
                Import Excel File
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table caption-top table-striped border-1 table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">First  Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">User Name</th>

                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id} >
                    <td>{employee.firstname}</td>
                    <td>{employee.lastname}</td>
                    <td>{employee.username}</td>

                    <td>

                    </td>
                    <td className="px-4 py-2 border-b">
                      <div className="flex gap-2">
                        <div
                          class="flex items-center justify-center px-1 py-1 font-normal text-white bg-[#0d6efd] rounded-md hover:bg-[#2b76e7] cursor-pointer"
                          onClick
                        >
                          <FaRegEdit />
                        </div>

                        <div
                class="flex items-center justify-center px-2 py-1 font-normal text-white bg-red-500 rounded-md hover:bg-[#932828] cursor-pointer"
                onClick={() => deleteEmployee(employee.id)}
              >
                <MdDelete />
              </div>
                      </div>
                      {/* </div> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;