import React from "react";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiAdobephotoshop } from "react-icons/si";
import { motion } from "framer-motion";

const TechStack = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        bounce: 0.4,
        duration: 0.5,
        delayChildren: 0.5,
        staggerChildren: 0.5,
        type: "spring",
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section className='p-8 md:p-14 mt-16 mb-20'>
      <h1 className='font-CalSans text-2xl mb-1'>Tech Stack 💡</h1>
      <p className='w-full md:w-1/2 '>
        Some technologies and frameworks we use during our working process
      </p>
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='w-full flex flex-row mt-10 flex-wrap'>
        <motion.div
          variants={item}
          className='w-1/2 md:w-1/4 flex flex-col mt-4 md:mt-0'>
          <SiJavascript size={"3rem"} className='mb-1' />
          <p className='font-CalSans'>Languages</p>
          <p>JavaScript</p>
          <p>TypeScript</p>
          <p>GraphQL</p>
        </motion.div>
        <motion.div
          variants={item}
          className='w-1/2 md:w-1/4 flex flex-col mt-4 md:mt-0'>
          <FaReact size={"3rem"} className='mb-1' />
          <p className='font-CalSans'>Frameworks</p>
          <p>React</p>
          <p>NodeJS</p>
          <p>NextJS</p>
        </motion.div>
        <motion.div
          variants={item}
          className='w-1/2 md:w-1/4 flex flex-col mt-6 md:mt-0'>
          <MdOutlineDesignServices size={"3rem"} className='mb-1' />
          <p className='font-CalSans'>Design</p>
          <p>CSS/SCSS</p>
          <p>Tailwind</p>
          <p>Styled Components</p>
        </motion.div>
        <motion.div
          variants={item}
          className='w-1/2 md:w-1/4 flex flex-col mt-6 md:mt-0'>
          <SiAdobephotoshop size={"3rem"} className='mb-1' />
          <p className='font-CalSans'>Other</p>
          <p>Photoshop</p>
          <p>Figma</p>
          <p>Adobe XD</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechStack;
