import { motion } from "framer-motion";

const EcosystemsSensitization = () => {
    return (
        <div className="py-10 px-4">
            <div className="relative max-w-7xl mx-auto overflow-hidden">
                <motion.div
                    className="flex flex-col items-center justify-center py-8"
                >
                    <h2 className="text-4xl font-bold">Making an Impact</h2>
                    <p className="text-center text-gray-600 mx-auto my-8 max-w-5xl font-semibold leading-relaxed">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                        rebum. Stet clita kasd gubergren, no sea takimata sanctus est lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                        sadipscing elitr, sed diam nonumy
                    </p>
                </motion.div>
                <motion.div 
                    className="relative flex flex-col lg:flex-row"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="lg:w-3/5">
                        <img 
                            src="/images/eng-ren-6.webp" 
                            alt="Mains tenant une jeune plante dans du terreau" 
                            className="w-full object-cover rounded-xl overflow-hidden shadow-lg"
                            style={{ height: '95%' }}
                        />
                    </div>
          
                    <motion.div 
                        className="lg:w-1/2 bg-green-50 p-8 rounded-2xl shadow-lg
                                lg:absolute lg:right-0 lg:top-1/3 lg:transform lg:-translate-y-1/3
                                -mt-4 md:mt-4 lg:mt-0 flex justify-center items-center relative overflow-hidden"
                        style={{ height: '65%' }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="absolute inset-0 z-0 opacity-25">
                            <svg 
                                viewBox="0 0 200 200" 
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute -right-16 -bottom-16 w-64 h-64 text-green-300"
                            >
                                <path 
                                fill="currentColor" 
                                d="M45.1,-52.4C59.3,-41.5,72.4,-27.5,75.9,-11.2C79.5,5.1,73.5,23.7,62.3,36.7C51.1,49.7,34.7,57.1,17.5,61.8C0.3,66.5,-17.7,68.5,-33,62.2C-48.3,55.9,-60.8,41.3,-69.1,23.8C-77.4,6.3,-81.5,-14.2,-74.4,-30C-67.2,-45.9,-48.9,-57.2,-31.7,-67.1C-14.5,-76.9,1.6,-85.3,16.1,-80.8C30.6,-76.2,43.5,-58.7,45.1,-52.4Z" 
                                transform="translate(100 100)" 
                                />
                            </svg>
                            <svg 
                                viewBox="0 0 200 200" 
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute -left-20 -top-20 w-64 h-64 text-green-200"
                            >
                                <path 
                                fill="currentColor" 
                                d="M55.2,-63.8C71.9,-50.2,86.2,-33.1,88.8,-14.6C91.4,3.9,82.3,23.8,70.1,41.5C57.8,59.2,42.4,74.6,23.1,81.6C3.8,88.7,-19.4,87.2,-35.3,76.8C-51.2,66.3,-59.8,46.9,-67.8,26.5C-75.8,6.1,-83.1,-15.2,-77.7,-31.4C-72.3,-47.5,-54.2,-58.5,-36.6,-71.7C-19,-84.9,-1.9,-100.2,13.3,-98C28.5,-95.7,43.5,-75.9,55.2,-63.8Z" 
                                transform="translate(100 100)" 
                                />
                            </svg>
                        </div>
                        <div className="relative justify-items-end text-right">
                            <h2 className="text-2xl font-bold mb-4">
                                Achieve More, Together
                            </h2>
                            
                            <p className="text-gray-700 mb-8">
                                Explore our projects that drive meaningful change 
                                and help protect the planet for future generations.
                            </p>
                            
                            <motion.button
                                className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View More
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="relative flex flex-col lg:flex-row mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div 
                        className="lg:w-1/2 bg-blue-50 p-8 rounded-2xl shadow-lg
                                lg:absolute lg:left-0 lg:top-1/3 lg:transform lg:-translate-y-1/3
                                mt-4 lg:mt-0 flex justify-center items-center relative overflow-hidden"
                        style={{ height: '65%' }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="absolute inset-0 z-0 opacity-25">
                            <svg 
                                viewBox="0 0 200 200" 
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute -left-16 -bottom-16 w-64 h-64 text-blue-300"
                            >
                                <path 
                                fill="currentColor" 
                                d="M45.1,-52.4C59.3,-41.5,72.4,-27.5,75.9,-11.2C79.5,5.1,73.5,23.7,62.3,36.7C51.1,49.7,34.7,57.1,17.5,61.8C0.3,66.5,-17.7,68.5,-33,62.2C-48.3,55.9,-60.8,41.3,-69.1,23.8C-77.4,6.3,-81.5,-14.2,-74.4,-30C-67.2,-45.9,-48.9,-57.2,-31.7,-67.1C-14.5,-76.9,1.6,-85.3,16.1,-80.8C30.6,-76.2,43.5,-58.7,45.1,-52.4Z" 
                                transform="translate(100 100)" 
                                />
                            </svg>
                            <svg 
                                viewBox="0 0 200 200" 
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute -right-20 -top-20 w-64 h-64 text-blue-200"
                            >
                                <path 
                                fill="currentColor" 
                                d="M55.2,-63.8C71.9,-50.2,86.2,-33.1,88.8,-14.6C91.4,3.9,82.3,23.8,70.1,41.5C57.8,59.2,42.4,74.6,23.1,81.6C3.8,88.7,-19.4,87.2,-35.3,76.8C-51.2,66.3,-59.8,46.9,-67.8,26.5C-75.8,6.1,-83.1,-15.2,-77.7,-31.4C-72.3,-47.5,-54.2,-58.5,-36.6,-71.7C-19,-84.9,-1.9,-100.2,13.3,-98C28.5,-95.7,43.5,-75.9,55.2,-63.8Z" 
                                transform="translate(100 100)" 
                                />
                            </svg>
                        </div>
                        <div className="relative justify-items-start text-left">
                            <h2 className="text-2xl font-bold mb-4">
                                Achieve More, Together
                            </h2>
                            
                            <p className="text-gray-700 mb-8">
                                Explore our projects that drive meaningful change 
                                and help protect the planet for future generations.
                            </p>
                            
                            <motion.button
                                className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View More
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Image côté droit */}
                    <div className="lg:w-3/5 lg:ml-auto md:mt-0 -mt-4">
                        <img 
                        src="/images/eng-ren-5.webp" 
                        alt="Mains tenant une jeune plante dans du terreau" 
                        className="w-full object-cover rounded-xl overflow-hidden shadow-lg"
                        style={{ height: '95%' }}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
 
export default EcosystemsSensitization;