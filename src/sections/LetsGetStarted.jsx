import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowRightCircle } from 'lucide-react';

export default function LetsGetStarted() {
  return (
    <div className="container bg-green-50 px-4 py-10">
        <motion.div
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-green-500 rounded-2xl py-10"
        >
            <div className="flex flex-col items-center justify-center text-white">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Let's get started</h2>
                <p className="text-justify md:text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='bg-white bg-opacity-50 flex justify-between w-full md:w-1/2 p-2 rounded-full mt-4'
                >
                    <input type="text" name="" id="" placeholder='Enter your email here' className='bg-transparent border-none focus:outline-none focus:ring-0 rounded-l-full text-white font-semibold placeholder:text-white p-2' style={{ width: '90%' }} />
                    <button
                        className='bg-white rounded-full p-2'
                    >
                        <ArrowRight className='text-black' />
                    </button>
                </motion.div>
            </div>
        </motion.div>
    </div>
  )
}
