import Axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import ReactPaginate from 'react-paginate';
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import MyNavbar from "./MyNavbar";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  const [currentPage, setCurrentPage] = useState(0); // Start at page 1 (zero-indexed)
  const [itemsPerPage] = useState(8);
  const [movies, setMovies] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const navigate = useNavigate();

  // Fetch movie list
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    Axios.get("http://localhost:8080/api/select/movielist")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const deleteMovie = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");
    if (confirmDelete) {
      Axios.delete(`http://localhost:8080/moviedelete/${id}`)
        .then(() => {
          window.alert("Deleted successfully");
          fetchMovies();
        })
        .catch((error) => {
          console.log("Error deleting record", error);
        });
    }
  };

  // Pagination
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = movies.slice(indexOfFirstItem, indexOfLastItem);

  // Update data
  const editMovie = (id) => {
    const selectedMovie = movies.find((m) => m.id === id);
    setSelectedRecord(selectedMovie);
    navigate("/editmovies", { state: { movie: selectedMovie } });
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
              <div className="overflow-x-auto">
                <table className="table caption-top table-striped border-1 table-hover table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Director</th>
                      <th scope="col">Genre</th>
                      <th scope="col">Image</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((movie) => (
                      <tr key={movie.id}>
                        <td>{movie.title}</td>
                        <td>{movie.director}</td>
                        <td>{movie.genre}</td>
                        <td className="h-20 w-20 rounded-full">
                          <img src={movie.image} alt={movie.title} style={{ width: "100%", height: "100%", borderRadius: '10px' }} />
                        </td>
                        <td className="px-4 py-2 border-b">
                          <div className="flex gap-2">
                            <div
                              className="flex items-center justify-center px-1 py-1 font-normal text-white bg-[#0d6efd] rounded-md hover:bg-[#2b76e7] cursor-pointer"
                              onClick={() => editMovie(movie.id)}
                            >
                              <FaRegEdit />
                            </div>
                            <div
                              className="flex items-center justify-center px-2 py-1 font-normal text-white bg-red-500 rounded-md hover:bg-[#932828] cursor-pointer"
                              onClick={() => deleteMovie(movie.id)}
                            >
                              <MdDelete />
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="d-flex justify-content-end">
                  <ReactPaginate
                    previousLabel={"< previous"}
                    nextLabel={"next >"}
                    breakLabel={"..."}
                    pageCount={Math.ceil(movies.length / itemsPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                    forcePage={currentPage} // This ensures the current page is highlighted
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
