import React, { useState } from "react";
import Axios from "axios";
import MyNavbar from "./MyNavbar";
import Sidebar from "./Sidebar";
import { Navigate, useNavigate } from "react-router-dom";

const MovieRegistrationForm = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [runtime, setRuntime] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [plotSummary, setPlotSummary] = useState("");
  const [cast, setCast] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [inputKey, setInputKey] = useState(0);

  const genres = [
    "Romance",
    "Action",
    "Horror",
    "Comedy",
    "Drama",
    "Sci-Fi",
    "Documentary",
    "Animation",
    "Adventure",
    "Thriller",
    "Fantasy",
    "Crime",
    "War",
    "History",
    "Music",
    "Mystery",
    "Family",
    "Biography",
    "Sport",
    "Western",
  ];
  // Add validation states
  const [titleError, setTitleError] = useState("");
  const [directorError, setDirectorError] = useState("");
  const [genreError, setGenreError] = useState("");
  const [imageError, setImageError] = useState("");
const navigate=useNavigate();
  const addMovie = (e) => {
    e.preventDefault();

    // Perform validation checks
    let isValid = true;

    if (!title.trim()) {
      setTitleError("Please enter a movie title");
      isValid = false;
    } else {
      setTitleError("");
    }

    if (!director.trim()) {
      setDirectorError("Please enter a movie director");
      isValid = false;
    } else {
      setDirectorError("");
    }

    if (!genre) {
      setGenreError("Please select a movie genre");
      isValid = false;
    } else {
      setGenreError("");
    }

    if (!selectedImage) {
      setImageError("Please select a movie image");
      isValid = false;
    } else {
      setImageError("");
    }

    // If all fields are valid, proceed with the form submission
    if (isValid) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("director", director);
      formData.append("genre", genre);
      formData.append("image", selectedImage);

      Axios.post(`http://localhost:3001/moviecreate`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          console.log(response.data.message);
          console.log(response.data.userData);
          window.confirm("Movie registration successful");
          // Clear the form fields after successful addition
          setTitle("");
          setDirector("");
          setGenre("");
          setSelectedImage(null);
          Navigate("/movielist")
        })
        .catch((error) => {
          console.log("Error:", error);
          window.confirm("Unable to register movie");
        });
    }
  };
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);
    setSelectedImage(files[0]); // Update the selectedImage state
    setInputKey((prevKey) => prevKey + 1); // Increment the inputKey to force re-render
  };

  return (
    <>
      <MyNavbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-y-auto p-2">
          {/* <Container />  */}
          <div className="flex justify-center align-middle">
            <p className="text-xl font-bold text-indigo-700">
              Movie Registration
            </p>
          </div>
          <div className="flex   h-[85vh] w-100 p-2">
            <form
              onSubmit={addMovie}
              className="bg-white shadow rounded px-3 mt-1  w-full "
            >
              <div className="flex flex-row gap-4 justify-between">
                <div className="mb-4 w-[50%]">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="director"
                    aria-required
                  >
                    Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="director"
                    type="text"
                    placeholder="Enter movie Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-4 w-[50%]">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="director"
                    aria-required
                  >
                    Director
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="director"
                    type="text"
                    placeholder="Enter movie director"
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                  />
                </div>
                <div className="mb-4 w-[50%]">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="genre"
                  >
                    Genre
                  </label>
                  <div className="relative">
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="genre"
                      value={genre}
                      onChange={(e) => setGenre(e.target.value)}
                    >
                      <option value="">Select a genre</option>
                      {genres.map((genreOption, index) => (
                        <option key={index} value={genreOption}>
                          {genreOption}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  {genreError && (
                    <p className="text-red-500 text-xs italic">{genreError}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-row gap-4 justify-between">
                <div className="mb-4 w-[50%]">
                  <label
                    for="movie-year"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Movie Release Year:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="number"
                    id="movie-year"
                    name="movie-year"
                    min="1900"
                    max="2100"
                    step="1"
                    placeholder="Enter the year"
                  />
                </div>
                <div className="mb-4 w-[50%]">
                  <label
                    for="movie-duration"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Movie Duration (minutes):
                  </label>
                  <input
                    type="number"
                    id="movie-duration"
                    name="movie-duration"
                    min="0"
                    step="1"
                    placeholder="Enter the Duration "
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4 w-[50%]">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="Cast"
                    aria-required
                  >
                    Cast
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="director"
                    type="year"
                    placeholder="Enter movie Cast"
                    value={cast}
                    onChange={(e) => setCast(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col  justify-between">
                <label for="movie-description">Movie Description:</label>
                <textarea
                  id="movie-description"
                  name="movie-description"
                  rows="3"
                  cols="50"
                  height="50px"
                  placeholder="Enter a brief description of the movie"
                  className="border-2 p-2"
                ></textarea>
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
                      onChange={handleImageChange}
                      key={inputKey} // Use the inputKey to force re-render
                    />
                 
                    {selectedImage && (
                      <img
                        width="100"
                        height="100"
                        src={URL.createObjectURL(selectedImage)}
                        alt="Selected"
                        className="ml-4  border-full  bg-white shadow"
                      />
                    )}
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

export default MovieRegistrationForm;
