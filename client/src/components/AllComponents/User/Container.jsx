import React, { useEffect, useState } from 'react';
import Axios from 'axios';
const Container = () => {
  const movieGenres = [
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
    "Western"
  ];
 const [war, setWar]=useState([]);

 useEffect(()=>{
  fetchWar();
 },[]);


 const fetchWar = () => {
  Axios.get('http://localhost:3001/war')
    .then((response) => {
      setWar(response.data);
    })
    .catch((error) => {
      console.log('error', error);
    });
};
  const imageCards = [
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Movie 1',
      genre: 'Romance'
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Movie 2',
      genre: 'Romance'
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Movie 3',
      genre: 'Action'
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Movie 4',
      genre: 'Action'
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Movie 5',
      genre: 'Romance'
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Movie 6',
      genre: 'Action'
    }
  ];

  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  const filteredCards = selectedGenre
    ? imageCards.filter((card) => card.genre === selectedGenre)
    : imageCards;

  return (
    <div className="flex flex-col w-full pt-3 m-2">
      {/* Horizontal Scrollable Genre Buttons */}
      <div>
        <h1 className="pb-3">Categories</h1>
      </div>
      <div className="overflow-x-hidden mb-4 whitespace-nowrap" style={{ 'overflow-x': 'scroll' }}>
        {war.map((genre, index) => (
          <button
            key={index}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 ${
              selectedGenre === genre ? 'bg-blue-700' : ''
            }`}
            onClick={() => handleGenreClick(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Image Cards */}
      <div>
        <h1>{selectedGenre || 'All Movies'}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white justify-center align-middle">
        {war.map((card, index) => (
          <div className=' rounded-lg shadow-md p-2 m-1' key={index}>
            <img src={card.image} alt={`Movie ${index + 1}`} className='h-[250px] w-[250px]' />
            <h3 className="text-center">{card.title}</h3>
            <h3 className="text-center">{card.director}</h3>
            <h3 className="text-center">{card.genre}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;