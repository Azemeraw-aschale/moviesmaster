import React, { useState, useEffect } from "react";
import axios from "axios";
import MyNavbar from "../../MyNavbar";
import Sidebar from "../UserShared/SidebarUser";
import { FaHeart } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import cardimage from "../../../image/action4.jpg";
const UserDashboard = () => {
  const [movies, setMovies] = useState([]);
  const [imageCards, setImageCards] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [clickedCardIndex, setClickedCardIndex] = useState(-1);
  const fetchMovieList = () => {
    axios
      .get("http://localhost:3001/genres")
      .then((response) => {
        setMovies(response.data);
        setImageCards(
          response.data.map((movie) => ({

            // image :"https://via.placeholder.com/300x200",
            // image:movie.image,

            // image: "https://via.placeholder.com/300x200",
            image: movie.image,

            title: movie.title,
            genre: movie.genre,
            director: movie.director,
          }))
        );
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  const filteredCards = selectedGenre
    ? imageCards.filter((card) => card.genre.includes(selectedGenre))
    : imageCards;

  const clicked = () => {
    console.log("add button clicked");
  };

  /// heart clicked
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const [heartStates, setHeartStates] = useState(
    filteredCards.map(() => false)
  );

  const handleHeartClick = (index) => {
    setHeartStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  return (
    <>
      <MyNavbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-auto pl-3">
          {/* Horizontal Scrollable Genre Buttons */}
          <div>
            <h1 className="pb-3">Categories</h1>
          </div>
          <div
            className="flex overflow-x-auto whitespace-nowrap scrollbar-hide"
            style={{ "overflow-x": "scroll" }}
          >
            <button
              className="bg-[#293A77]  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 "
              onClick={() => handleGenreClick("")}
            >
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
                  className="bg-[#293A77]  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleGenreClick(genre)}
                >
                  {genre}
                </button>
              ))}
          </div>

          {/* Image Cards */}
          <div>
            <h1>{selectedGenre || "All Movies"}</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white justify-center align-middle">
            {filteredCards.map((card, index) => (
              <div className=" rounded-lg shadow-md p-1 " key={index}>
                <div className="flex gap-3">
                    <div className="text-bold text-14 text-blue-600">
                      Film Title:{" "}
                    </div>
                    
                    <div>
                      <h6 className="text-12">{card.title}</h6>
                    </div>{" "}
                  </div>
                <img src={card.image} className="h-[250px] w-full p-2" />
                <div className="flex flex-col">
                  <div className="flex gap-3">
                    {" "}
                    Director:
                    <div>
                      <h6 className=" text-12">{card.director}</h6>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div>
                      Genre:{" "}
                    </div>
                    
                    <div>
                      <h6 className="text-12">{card.genre}</h6>
                    </div>{" "}
                  </div>
                  {/* <p className="text-center">{card.director}</p> */}
                </div>
                <div className="flex justify-between align-bottom mb-2 px-2 ">
                  <div
                    className={`cursor-pointer ${
                      heartStates[index] ? "text-red-500" : ""
                    }`}
                    onClick={() => handleHeartClick(index)}
                  >
                    <span style={{ color: "red" }}>Like/Dislike</span>
                    <FaHeart />
                  </div>
                  <div onClick={clicked} className="cursor-pointer">
                    <span className="text-[#293A77] ">Add to wish list</span>
                    <IoAdd />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
