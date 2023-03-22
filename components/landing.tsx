import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

const Landing = ({ darkMode, setDarkMode }: any) => {
  const scrollDuration = 1000;

  const toggleSwitch = () => setDarkMode(!darkMode);

  const handleButtonClick = () => {
    const section = document.getElementById("target-section");
    if (section) {
      const targetPosition = section.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const startTime = performance.now();

      const easeInOutQuad = (t: number) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };

      const scrollStep = (timestamp: number) => {
        const currentTime = timestamp - startTime;
        const scrollPosition =
          easeInOutQuad(currentTime / scrollDuration) * distance +
          startPosition;
        window.scrollTo(0, scrollPosition);
        if (currentTime < scrollDuration) {
          window.requestAnimationFrame(scrollStep);
        }
      };

      window.requestAnimationFrame(scrollStep);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        type: "spring",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const spring = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    duration: 2,
  };

  return (
    <main
      className={`flex justify-center flex-col h-screen gap-4 p-8 md:p-14 ${
        darkMode ? `DarkLanding` : `LightLanding`
      } `}>
      <div
        className={`switch border absolute top-0 right-0 md:right-6 ${
          darkMode ? `switchDark` : `switchLight`
        }`}
        data-ison={darkMode}
        onClick={toggleSwitch}>
        <motion.div
          className={`handle border flex justify-center items-center ${
            darkMode ? `handleDark` : `handleLight`
          }`}
          layout
          transition={spring}>
          {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
        </motion.div>
      </div>
      <motion.div variants={container} initial='hidden' animate='show'>
        <motion.p variants={item}>Welcome to</motion.p>
        <motion.div variants={item} className='flex flex-row'>
          <h1 className='font-CalSans text-4xl sm:text-5xl md:text-6xl'>
            The Masonry
          </h1>
          <div
            className={`font-CalSans text-4xl sm:text-5xl md:text-6xl ${
              darkMode ? `bg-animate-dark` : `bg-animate`
            } `}>
            Group
          </div>
        </motion.div>
        <motion.p
          variants={item}
          className='w-full md:w-1/2 mt-2 text-sm md:text-base'>
          As skilled web developers with a keen eye for design, we have amassed
          over five years of practical experience in efficiently crafting
          websites and applications using a variety of tools, including
          JavaScript/React and TypeScript. Our commitment to creating
          state-of-the-art, user-friendly interfaces has been a driving force
          for our success. We pride ourselves on our ability to stay ahead of
          the curve by actively seeking out the latest advancements and trends
          in the field. With this dedication to excellence and a passion for
          delivering consistently exceptional work, we are confident that we
          would make a valuable addition to any team in need of skilled web
          developers.
        </motion.p>
      </motion.div>
      <motion.button
        animate={{
          y: [-10, 10],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={`border px-5 py-2 w-20 flex justify-center rounded-lg text-md mt-5 md:absolute md:right-6 md:bottom-0 md:m-6 cursor-pointer exploreButton ${
          darkMode ? `bg-zinc-900` : `bg-white`
        }`}
        onClick={handleButtonClick}>
        <FiChevronDown size={"1.4em"} />
      </motion.button>
    </main>
  );
};

export default Landing;
