import React, { useState, useEffect } from "react";
import MyNavbar from "../../MyNavbar";
import Sidebar from "../UserShared/SidebarUser";
import { FaHeart } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import axios from "axios";

function Watchlist() {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [wishlistLoading, setWishlistLoading] = useState(false);

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const token = localStorage.getItem("token"); // Get the token from localStorage

        const response = await axios.get("http://localhost:8080/api/select/wishlistview", {
          headers: {
            "x-auth-token": token, // Send token in the request headers
          },
        });
        console.log(response.data)
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovieList();
  }, []);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.genre.includes(selectedGenre))
    : movies;

  return (
    <>
      <MyNavbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-auto pl-3">
          <div>
            <h1 className="pb-3">Categories</h1>
          </div>
          <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide" style={{ overflowX: "scroll" }}>
            <button className="bg-[#293A77] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => handleGenreClick("")}>
              All
            </button>
            {movies
              .reduce((genres, movie) => {
                movie.genre.split(",").forEach((genre) => {
                  if (!genres.includes(genre.trim())) {
                    genres.push(genre.trim());
                  }
                });
                return genres;
              }, [])
              .map((genre, index) => (
                <button
                  key={index}
                  className="bg-[#293A77] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleGenreClick(genre)}
                >
                  {genre}
                </button>
              ))}
          </div>

          <div>
            <h1>{selectedGenre || "All Movies"}</h1>
          </div>
          {filteredMovies.length === 0 ? (
            <div className="text-center text-gray-600 mt-4">No movies in selected wishlist.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white justify-center align-middle">
              {filteredMovies.map((movie, index) => (
                <div className="rounded-lg shadow-md p-1" key={index}>
                  <div className="flex gap-3">
                    <div className="text-bold text-14 text-blue-600">Film Title: </div>
                    <div>
                      <h6 className="text-12">{movie.title}</h6>
                    </div>{" "}
                  </div>
                  <img src={movie.image} className="h-[250px] w-full p-2" alt={movie.title} />
                  <div className="flex flex-col">
                    <div className="flex gap-3">
                      {" "}
                      Director:
                      <div>
                        <h6 className=" text-12">{movie.director}</h6>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div>Genre: </div>
                      <div>
                        <h6 className="text-12">{movie.genre}</h6>
                      </div>{" "}
                    </div>
                  </div>
                  {/* 
                  Uncomment this block if you want to add wishlist functionality
                  
                  <div className="flex justify-between align-bottom mb-2 px-2">
                    <div
                      className={`cursor-pointer ${heartStates[index] ? "text-red-500" : ""}`}
                      onClick={() => handleHeartClick(index, movie._id)}
                    >
                      <span style={{ color: "red" }}>Like/Dislike</span>
                      <FaHeart />
                    </div>
                    <div className="cursor-pointer" onClick={() => addToWishlist(movie._id)}>
                      <span className="text-[#293A77] ">Add to wish list</span>
                      <IoAdd />
                    </div>
                  </div> 
                  */}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Watchlist;
