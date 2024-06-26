import { useLocation } from 'react-router-dom';
import MyNavbar from "./MyNavbar";
import Sidebar from "./Sidebar";
import { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditMovies = () => {
  const location = useLocation();
  const [movie, setMovie] = useState(location.state.movie);
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputKey, setInputKey] = useState(0);
  const imageInputRef = useRef(null);
  const navigate = useNavigate();

  const genres = [
    "Romance", "Action", "Horror", "Comedy", "Drama", "Sci-Fi", "Documentary", "Animation",
    "Adventure", "Thriller", "Fantasy", "Crime", "War", "History", "Music", "Mystery",
    "Family", "Biography", "Sport", "Western",
  ];

  const handleTitleChange = (e) => {
    setMovie({ ...movie, title: e.target.value });
  };

  const handleDirectorChange = (e) => {
    setMovie({ ...movie, director: e.target.value });
  };

  const handleGenreChange = (e) => {
    setMovie({ ...movie, genre: e.target.value });
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImage(files[0]);
    setInputKey(inputKey + 1); // Increment the inputKey to force a re-render
  };

  const handleImageClick = () => {
    setSelectedImage(null); // Reset the selected image
    imageInputRef.current.value = null; // Reset the input field
    imageInputRef.current.click(); // Trigger the click to open file browser
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', movie.title);
    formData.append('director', movie.director);
    formData.append('genre', movie.genre);
    if (selectedImage) {
      formData.append('image', selectedImage);
    }

    try {
      const response = await axios.put(`https://localhost:8080/update/${movie.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('Movie updated successfully');
        navigate("/movielist");
        setMovie(response.data.movieData);
      } else {
        alert('Failed to update the movie');
      }
    } catch (error) {
      console.error('Error updating movie:', error);
      alert('An error occurred while updating the movie');
    }
  };

  return (
    <>
      <MyNavbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-y-auto p-2">
          <div className="flex justify-center align-middle">
            <p className="text-xl font-bold text-indigo-700">Update Movies</p>
          </div>
          <div className="flex h-[85vh] w-100 p-2">
            <form className="bg-white shadow rounded px-3 mt-1 w-full" onSubmit={handleSubmit}>
              <div className="flex flex-row gap-4 justify-between">
                <div className="mb-4 w-[50%]">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Title</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    placeholder="Enter movie Title"
                    value={movie.title}
                    onChange={handleTitleChange}
                  />
                </div>
                <div className="mb-4 w-[50%]">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="director">Director</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="director"
                    type="text"
                    placeholder="Enter movie director"
                    value={movie.director}
                    onChange={handleDirectorChange}
                  />
                </div>
                <div className="mb-4 w-[50%]">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="genre">Genre</label>
                  <div className="relative">
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="genre"
                      value={movie.genre}
                      onChange={handleGenreChange}
                    >
                      <option value="">Select a genre</option>
                      {genres.map((genreOption, index) => (
                        <option key={index} value={genreOption}>
                          {genreOption}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-4 justify-between">
                <div className="mb-4 w-[50%]">
                  <div className="flex flex-row mt-3 justify-between">
                    <label className="block text-gray-700 font-bold" htmlFor="title">Change Image</label>
                    <td className="h-40 w-40 rounded-full" onClick={handleImageClick}>
                      {selectedImage ? (
                        <img
                          src={URL.createObjectURL(selectedImage)}
                          style={{ width: "100%", height: "100%", borderRadius: "10px", cursor: "pointer" }}
                        />
                      ) : (
                        <img
                          src={movie.image}
                          style={{ width: "100%", height: "100%", borderRadius: "10px", cursor: "pointer" }}
                        />
                      )}
                    </td>
                    <input
                      type="file"
                      ref={imageInputRef}
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                      key={inputKey}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Update Movie
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

export default EditMovies;
