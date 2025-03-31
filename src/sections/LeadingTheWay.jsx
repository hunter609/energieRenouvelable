import { motion } from "framer-motion";
import { Button } from "../components/button";

const LeadingTheWay = () => {
    return (
        <div className="bg-green-50 py-10">
            <div className="relative max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center py-10 overflow-hidden">
                    <motion.div
                        className="w-full md:w-1/4 h-64 md:h-80 relative"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.img
                            src="/images/eng-ren-5.webp"
                            alt="Underwater scene"
                            className="w-full h-full rounded-tl-full rounded-br-full object-cover"
                            animate={{ rotate: [0, 2, -2, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut"
                            }}
                            style={{ transformOrigin: 'bottom' }}
                            whileHover={{ rotate: 0 }}
                        />
                    </motion.div>

                    <motion.div 
                        className="w-full md:w-1/2 px-6 py-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            Leading the Way for Ecological Change
                        </h1>
                        
                        <p className="text-gray-700 mb-6">
                            We are passionate environmental advocates committed to 
                            protecting our planet and promoting sustainable living.
                        </p>

                        <Button
                            color={'bg-green-500'}
                            textColor={'text-white'}
                            hoverColor={'hover:bg-green-600'}
                            text="Learn More"
                        />
                    </motion.div>

                    <motion.div
                        className="w-full md:w-1/4 h-64 md:h-80 relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.img
                            src="/images/eng-ren-4.webp"
                            alt="Forest with sunlight"
                            className="w-full h-full rounded-bl-full rounded-tr-full object-cover"
                            animate={{ rotate: [0, -2, 2, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut"
                            }}
                            style={{ transformOrigin: 'bottom' }}
                            whileHover={{ rotate: 0 }}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
 
export default LeadingTheWay;