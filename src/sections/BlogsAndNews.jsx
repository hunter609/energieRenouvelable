import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    image: '/images/eng-ren-1.webp',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    image: '/images/eng-ren-2.webp',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    image: '/images/eng-ren-3.webp',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    id: 4,
    image: '/images/eng-ren-4.webp',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  },
  {
    id: 5,
    image: '/images/eng-ren-5.webp',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  },
  {
    id: 6,
    image: '/images/eng-ren-6.webp',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  },
];

const BlogsAndNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? newsItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === newsItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Reorder items so that the current item is first, followed by the rest in order
  const displayedItems = [
    newsItems[currentIndex],
    ...newsItems.slice(currentIndex + 1),
    ...newsItems.slice(0, currentIndex)
  ];

  return (
    <div className="relative bg-gray-800 text-white py-20">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 md:h-2/3 bg-cover bg-center z-0" style={{ backgroundImage: 'url(/images/eng-ren-1.webp)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="sm:p-6 flex flex-col md:flex-row min-h-[300px]">
          <div className="md:w-1/5 flex flex-col items-start mb-4 md:mb-0 md:mr-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Our Latest News & Blogs
            </h2>
            <div className="flex flex-col items-center space-y-4 w-full my-auto">
              <div className="flex items-center space-x-4">
                <ArrowLeft
                  className="w-6 h-6 text-gray-300 cursor-pointer hover:text-gray-100 transition"
                  onClick={goToPrevious}
                />
                <ArrowRight
                  className="w-6 h-6 text-gray-300 cursor-pointer hover:text-gray-100 transition"
                  onClick={goToNext}
                />
              </div>
            </div>
            <div className=" mt-auto text-gray-300 text-2xl font-semibold">
              {currentIndex + 1}/{newsItems.length}
            </div>
          </div>

          <div className="md:w-4/5 flex-grow overflow-hidden">
            <div className="flex space-x-4 pb-4">
              {displayedItems.map((item, index) => (
                <div
                  key={item.id}
                  className="relative min-w-[250px] max-w-[350px] w-full flex-shrink-0 rounded-2xl overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-105 min-h-[300px]"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={`News ${item.id}`}
                      className="w-full h-64 object-cover rounded-2xl"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 rounded-b-2xl">
                      <div className="relative pb-6">
                        <p className="text-white text-sm sm:text-base p-4 pb-0">
                          {item.description}
                        </p>
                        {index === 0 && (
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                            <button className="bg-white text-green-500 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-300 shadow-lg hover:shadow-xl z-50">
                              Read More
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 transform translate-y-1/2 mr-4 pr-4">
          <button className="bg-green-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl z-50">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsAndNews;
