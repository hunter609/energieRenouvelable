import React, { useEffect, useRef } from 'react'

const partners = [
    { name: 'logo', logo: '/images/logoipsum-1.jpg' },
    { name: 'logo', logo: '/images/logoipsum-2.jpg' },
    { name: 'logo', logo: '/images/logoipsum-3.jpg' },
    { name: 'logo', logo: '/images/logoipsum-4.jpg' },
    { name: 'logo', logo: '/images/logoipsum-5.jpg' },
    { name: 'logo', logo: '/images/logoipsum-6.jpg' },
];

export default function CollaborationAndPartners() {
    const containerRef = useRef(null);
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (containerRef.current) {
                const halfWidth = containerRef.current.scrollWidth / 2;
                const scrollAmount = containerRef.current.offsetWidth;

                containerRef.current.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth',
                });
            }
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className="bg-green-50 py-12 px-4 sm:px-8 lg:px-16">
                <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-10">
                Collaborations and Partners
                </h2>

                <div className="flex justify-center items-center">
                    <div
                        ref={containerRef}
                        className="overflow-x-auto w-full flex justify-center"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <div className="flex space-x-8">
                        {partners.map((partner, index) => (
                            <img
                            key={index}
                            src={partner.logo}
                            alt={partner.name}
                            className="h-22 w-80 md:h-24 object-contain transition-transform duration-300 hover:scale-105 mx-auto"
                            />
                        ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
