import React, { useEffect, useState } from 'react';

const partners = [
  { name: 'logo', logo: '/images/logoipsum-1.jpg' },
  { name: 'logo', logo: '/images/logoipsum-2.jpg' },
  { name: 'logo', logo: '/images/logoipsum-3.jpg' },
  { name: 'logo', logo: '/images/logoipsum-4.jpg' },
  { name: 'logo', logo: '/images/logoipsum-5.jpg' },
  { name: 'logo', logo: '/images/logoipsum-6.jpg' },
];

export default function CollaborationAndPartners() {
  const [position, setPosition] = useState(0);
  
  useEffect(() => {
    // Animation fluide avec requestAnimationFrame
    let animationId;
    let lastTimestamp = 0;
    const speed = 0.02; // Vitesse de défilement fotsiny
    
    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      
      // Mise à jour de la position
      setPosition(prevPosition => {
        const newPosition = prevPosition - speed;
        
        // Si tous les éléments ont défilé, on revient au début
        if (newPosition < -100) {
          return 0;
        }
        
        return newPosition;
      });
      
      lastTimestamp = timestamp;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    // Nettoyage à la destruction du composant
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  // On duplique les logos pour créer un effet de défilement infini
  const allPartners = [...partners, ...partners];
  
  return (
    <section className="bg-green-50 py-12 px-4 sm:px-8 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-10">
        Collaborations and Partners
      </h2>
      
      <div className="relative overflow-hidden w-full">
        <div 
          className="flex space-x-8"
          style={{ 
            transform: `translateX(${position}%)`,
            transition: 'transform 0.1s linear'
          }}
        >
          {allPartners.map((partner, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 w-48 md:h-24 md:w-64 object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}