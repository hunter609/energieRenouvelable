import React, { memo } from 'react';

// Extraction des données statiques
const PRODUCTS = [
  {
    id: 1,
    name: "Dry Distilled Grain",
    description: "High-quality distilled grain products for agricultural applications.",
    image: "https://img.freepik.com/free-photo/quinoa-real_1368-9186.jpg?uid=R100988146&ga=GA1.1.1549274076.1728654303&semt=ais_hybrid",
    alt: "Hands holding dry distilled grain"
  },
  {
    id: 2,
    name: "First Generation Ethanol Biofuel",
    description: "Renewable energy solution with reduced carbon emissions.",
    image: "https://img.freepik.com/premium-photo/science-background-illustration-scientific-design-flasks-glass-chemistry-physics-elements_839051-3772.jpg?uid=R100988146&ga=GA1.1.1549274076.1728654303&semt=ais_hybrid",
    alt: "Green flask containing ethanol biofuel",
    featured: true
  },
  {
    id: 3,
    name: "FOSD Oil",
    description: "Premium oil extract with superior performance characteristics.",
    image: "https://img.freepik.com/free-vector/oil-petroleum-platform_1284-5587.jpg?uid=R100988146&ga=GA1.1.1549274076.1728654303&semt=ais_hybrid",
    alt: "Glass bottle of FOSD oil"
  }
];

// SVG extraits en constantes pour éviter les re-render
const TOP_WAVE = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-40">
    <path 
      fill="#4ade80" 
      fillOpacity="0.3" 
      d="M0,160L80,181.3C160,203,320,245,480,240C640,235,800,181,960,165.3C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
    </path>
  </svg>
);

const BOTTOM_WAVE = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-64">
    <path 
      fill="#4ade80" 
      fillOpacity="0.3" 
      d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,122.7C672,107,768,85,864,96C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
    </path>
  </svg>
);

// Composant de carte de produit memoïsé
const ProductCard = memo(({ product }) => (
  <div className="group relative">
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Badge */}
      {product.featured && (
        <div className="absolute top-4 right-4 z-20">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-600 text-white">
            Featured
          </span>
        </div>
      )}
      
      {/* Image container */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10"></div>
        <img 
          src={product.image} 
          alt={product.alt}
          loading="lazy"
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-green-600 font-medium hover:text-green-700 inline-flex items-center transition-colors">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          
          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 cursor-pointer hover:bg-green-600 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
));

// Composant principal optimisé
export const Products = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-green-50 py-24 px-4" id='products'>
      {/* Background decorative elements */}
      {/* <div className="absolute top-0 left-0 right-0 w-full h-40 opacity-20">
        {TOP_WAVE}
      </div> */}
      
      <div className="absolute bottom-0 left-0 right-0 w-full h-64 opacity-10">
        {BOTTOM_WAVE}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full mb-3">
            Innovation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-green-600">Products</span> & Technology
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Discover our premium line of sustainable products designed with the future in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="relative overflow-hidden group bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full shadow-md transition-all duration-300">
            <span className="relative z-10">View All Products</span>
            <span className="absolute inset-0 h-full w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </section>
  );
};