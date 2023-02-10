import React from "react";
import { motion, useAnimation } from "framer-motion";

const Landing = () => {
  return (
    <main className='font-CalSans flex justify-center items-center flex-col h-screen gap-2'>
      {/* <p className='text-4xl text-gray-400'>Welcome to </p> */}
      <div className='flex flex-row'>
        <h1 className='text-9xl'>Hello</h1>
        <motion.div className='bg-animate'>world</motion.div>
      </div>
      {/* <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.4 }}
        className='border px-5 py-2 rounded-md text-xl mt-5 shadow-md '>
        explore
      </motion.button> */}
    </main>
  );
};

export default Landing;
