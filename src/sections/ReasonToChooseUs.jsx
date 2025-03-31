import React from "react";

export const ReasonToChooseUs = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-green-50 py-20 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
          Reason to Choose us
        </h1>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy
        </p>

        <div className="flex justify-center mb-20">
          <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Read More
          </button>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-10">
          {/* Curved line */}
          <div className="absolute w-full h-full top-0 left-0 pointer-events-none hidden md:block">
            <svg className="w-full h-full" viewBox="0 0 1200 300" fill="none">
              <path
                d="M50 150 C300 50 900 50 1150 150"
                stroke="#34D399"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="opacity-50"
              />
              <circle
                cx="50"
                cy="150"
                r="6"
                fill="#34D399"
                className="opacity-70"
              />
              <circle
                cx="600"
                cy="80"
                r="6"
                fill="#34D399"
                className="opacity-70"
              />
              <circle
                cx="1150"
                cy="150"
                r="6"
                fill="#34D399"
                className="opacity-70"
              />
            </svg>
          </div>

          {/* Content sections */}
          <div className="relative">
            <div className="absolute -left-10 top-0 text-[200px] font-bold text-gray-100 select-none z-0">
              1
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-green-600 mb-4">
                Expertise
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit
              </p>
            </div>
          </div>

          <div className="relative mt-20 md:mt-40">
            <div className="absolute -left-10 top-0 text-[200px] font-bold text-gray-100 select-none z-0">
              2
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-green-600 mb-4">
                Quality
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-0 text-[200px] font-bold text-gray-100 select-none z-0">
              3
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-green-600 mb-4">Trust</h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
