import React, { useState } from 'react';
import action1 from '../image/action2.jpg';
import romance1 from '../image/romance1.jpg';
import documentary1 from '../image/romance.jpg';
import horror1 from '../image/slider3.jpg';
import comedy1 from '../image/comeddy.jpg';
import drama1 from '../image/ction6.jpg';
import scifi1 from '../image/romance.png';
import thriller1 from '../image/slider1.jpg';
import musical1 from '../image/slider2.jpg';
import war from '../image/war.jpg';
import animated1 from '../image/slider4.jpg';

const cards = {
  'Action Films': [
    {
      image: action1,
      title: 'Action Card 1',
      content: 'This is the content of the first action card.'
    }, {
      image: horror1,
      title: 'Action Card 1',
      content: 'This is the content of the first action card.'
    }, {
      image: action1,
      title: 'Action Card 1',
      content: 'This is the content of the first action card.'
    }, {
      image: action1,
      title: 'Action Card 1',
      content: 'This is the content of the first action card.'
    }, {
      image: action1,
      title: 'Action Card 1',
      content: 'This is the content of the first action card.'
    }, {
      image: action1,
      title: 'Action Card 1',
      content: 'This is the content of the first action card.'
    },
    // ... rest of action cards
  ],
  'Romance Films': [
    {
      image: romance1,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    }, {
      image: drama1,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    }, {
      image: romance1,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    }, {
      image: romance1,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    }, {
      image: romance1,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    }, {
      image: romance1,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    }, {
      image: romance1,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    }, {
      image: romance1,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    }, {
      image: romance1,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    }, {
      image: romance1,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    }, {
      image: romance1,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    }, {
      image: romance1,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    },
    // ... rest of romance cards
  ],
  'War Films': [
    {
      image: war,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    },{
      image: war,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    },{
      image: war,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    },{
      image: war,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    },{
      image: war,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    },{
      image: war,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    },{
      image: drama1,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    },{
      image: war,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    },{
      image: war,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    },{
      image: drama1,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    },{
      image: war,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    },{
      image: war,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    },{
      image: war,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    },{
      image: war,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    },{
      image: war,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    },{
      image: war,
      title: 'Romance Card 1',
      content: 'This is the content of the first romance card.'
    },
    // ... rest of romance cards
  ],
  'Comeddy Films': [{
    image: comedy1,
    title: 'comedy Card 1',
    content: 'This is the content of the first romance card.'
  },{
    image: comedy1,
    title: 'comedy Card 1',
    content: 'This is the content of the first romance card.'
  },,{
    image: comedy1,
    title: 'comedy Card 1',
    content: 'This is the content of the first romance card.'
  },,{
    image: comedy1,
    title: 'comedy Card 1',
    content: 'This is the content of the first romance card.'
  },,{
    image: comedy1,
    title: 'comedy Card 1',
    content: 'This is the content of the first romance card.'
  },
  // ... rest of romance cards
],
  // ... other genres
};

const MainContent = () => {
  const [activeGenre, setActiveGenre] = useState('Action Films');

  const handleGenreClick = (genre) => {
    setActiveGenre(genre);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="ml-64 pt-10 pb-8 px-4">
      <div className='flex justify-between'>
        <div><h2 className="text-lg font-bold mb-4  bg-slate-400 rounded p-2">Horizontal Scroll List</h2></div>
        <div><h2 onClick={toggleDropdown} className='text-lg font-bold mb-4 cursor-pointer bg-slate-400 rounded p-2'>Recommended Movies</h2></div>
        {isDropdownOpen && (
              <div className="absolute right-0  w-48 bg-white rounded-md shadow-lg mt-4">
                <div className="py-1">
                  <a href="#" className="block px-2 py-2 hover:bg-gray-100">
                    Recommended
                  </a>
                  <a href="#" className="block px-2 py-2 hover:bg-gray-100">
                    Letest
                  </a>
                  <a href="#" className="block px-2 py-2 hover:bg-gray-100">
                    Old
                  </a>
                </div>
              </div>
            )}
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 overflow-x-auto mb-8">
        <div className="flex space-x-4 w-max">
          <button
            className={`bg-gray-900 text-white px-4 py-2 rounded-lg ${activeGenre === 'Action Films' ? 'bg-gray-700' : ''}`}
            onClick={() => handleGenreClick('Action Films')}
          >
            Action Films
          </button>
          <button
            className={`bg-gray-900 text-white px-4 py-2 rounded-lg ${activeGenre === 'Romance Films' ? 'bg-gray-700' : ''}`}
            onClick={() => handleGenreClick('Romance Films')}
          >
            Romance Films
          </button>
          <button
            className={`bg-gray-900 text-white px-4 py-2 rounded-lg ${activeGenre === 'War Films' ? 'bg-gray-700' : ''}`}
            onClick={() => handleGenreClick('War Films')}
          >
            War Films
          </button>
          <button
            className={`bg-gray-900 text-white px-4 py-2 rounded-lg ${activeGenre === 'Comeddy Films' ? 'bg-gray-700' : ''}`}
            onClick={() => handleGenreClick('Comeddy Films')}
          >
            Comeddy Films
          </button>
          <button
            className={`bg-gray-900 text-white px-4 py-2 rounded-lg ${activeGenre === 'Comeddy Films' ? 'bg-gray-700' : ''}`}
            onClick={() => handleGenreClick('Comeddy Films')}
          >
            Comeddy Films
          </button>
          <button
            className={`bg-gray-900 text-white px-4 py-2 rounded-lg ${activeGenre === 'Romance Films' ? 'bg-gray-700' : ''}`}
            onClick={() => handleGenreClick('Romance Films')}
          >
            Romance Films
          </button>
          <button
            className={`bg-gray-900 text-white px-4 py-2 rounded-lg ${activeGenre === 'Romance Films' ? 'bg-gray-700' : ''}`}
            onClick={() => handleGenreClick('Romance Films')}
          >
            Romance Films
          </button>
          {/* ... other genre buttons */}
        </div>
      </div>
      <h2 className="text-lg font-bold mb-4">{activeGenre}</h2>
      <div className="bg-gray rounded-lg  overflow-y-auto" style={{ maxHeight: '400px' }}>
        <div className="grid grid-cols-3 gap-4 ">
          {cards[activeGenre].map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-2 ">
              <img src={card.image} alt={card.title} className="rounded-lg w-full h-1/2" />
              <div>
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p>{card.content}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;