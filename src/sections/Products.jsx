import React from 'react';

export const Products = () => {
  const products = [
    {
      id: 1,
      name: "Dry Distilled Grain",
      image: "/images/dry-distilled-grain.jpg",
      alt: "Hands holding dry distilled grain"
    },
    {
      id: 2,
      name: "First generation Ethanol biofuel",
      image: "https://img.freepik.com/premium-photo/science-background-illustration-scientific-design-flasks-glass-chemistry-physics-elements_839051-3772.jpg?uid=R100988146&ga=GA1.1.1549274076.1728654303&semt=ais_hybrid",
      alt: "Green flask containing ethanol biofuel"
    },
    {
      id: 3,
      name: "FOSD Oil",
      image: "https://img.freepik.com/free-vector/oil-petroleum-platform_1284-5587.jpg?uid=R100988146&ga=GA1.1.1549274076.1728654303&semt=ais_hybrid",
      alt: "Glass bottle of FOSD oil"
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-green-50 to-green-100 py-16 px-4">
      {/* SVG Background Wave - Now positioned at the top */}
      <div className="absolute top-0 left-0 right-0 w-full h-32 opacity-20">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path 
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,165.3C672,171,768,213,864,218.7C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" 
            fill="#34d399" 
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16">
          Our Products & Technology
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 md:gap-8">
          {/* Premier produit */}
          <div className="md:col-span-2">
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <img 
                src={products[0].image} 
                alt={products[0].alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-black/60 backdrop-blur-sm z-20">
                <h3 className="text-white text-xl font-bold text-center">
                  {products[0].name}
                </h3>
              </div>
            </div>
          </div>

          {/* Produit du milieu plus grand */}
          <div className="md:col-span-3">
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <img 
                src={products[1].image} 
                alt={products[1].alt}
                className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-black/60 backdrop-blur-sm z-20">
                <h3 className="text-white text-xl font-bold text-center">
                  {products[1].name}
                </h3>
              </div>
            </div>
          </div>

          {/* Troisième produit */}
          <div className="md:col-span-2">
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <img 
                src={products[2].image} 
                alt={products[2].alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-black/60 backdrop-blur-sm z-20">
                <h3 className="text-white text-xl font-bold text-center">
                  {products[2].name}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};
