// import Sidebar from "./shared/Sidebar";
import { useState, useEffect } from "react";
import Axios from "axios";
import { FaRegEdit, FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import MyNavbar from "./MyNavbar";
import Sidebar from "./Sidebar";
const MovieList = () => {
  const [movie, setMovies] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);

  // grap user list
  useEffect(() => {
    fetchMovie();
  }, []);

  // fetching employee list
  const fetchMovie = () => {
    Axios.get("http://localhost:3001/movielist")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const deleteMovie = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this record?"
    );

    if (confirmDelete) {
      Axios.delete(`http://localhost:3001/moviedelete/${id}`)
        .then(() => {
          window.alert("Deleted successfully");

          fetchMovie();
        })
        .catch((error) => {
          console.log("Error deleting record", error);
        });
    } else {
      console.log("Deletion canceled by user");
    }
  };

  return (
    <>
      <MyNavbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-y-auto p-3">
          <div className="grid">
            <h3 className="mb-3 text-secondary">Movie List</h3>
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
                <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
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
              </div>
              <div className="overflow-x-auto">
                <table className="table caption-top table-striped border-1 table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Director</th>
                      <th scope="col">Year</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Genre</th>
                      <th scope="col">Image</th>
                      <th scope="col">Cast</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movie.map((movies) => (
                      <tr key={movies.id}>
                        <td>{movies.title}</td>
                        <td>{movies.director}</td>
                        <td>{movies.year}</td>
                        <td>{movies.duration}</td>
                        <td>{movies.genre}</td>
                        <td>{movies.image}</td>
                        <td>{movies.cast}</td>
                        <td className="px-4 py-2 border-b">
                          <div className="flex gap-2">
                            <div
                              class="flex items-center justify-center px-1 py-1 font-normal text-white bg-[#0d6efd] rounded-md hover:bg-[#2b76e7] cursor-pointer"
                              // onClick={() => editMovie(movies.id)}
                            >
                              <FaRegEdit />
                            </div>

                            <div
                              class="flex items-center justify-center px-2 py-1 font-normal text-white bg-red-500 rounded-md hover:bg-[#932828] cursor-pointer"
                              onClick={() => deleteMovie(movies.id)}
                            >
                              <MdDelete />
                            </div>
                          </div>
                          {/* </div> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
