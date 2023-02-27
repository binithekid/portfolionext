import React, { useState, useRef, useEffect } from "react";
import { portfolioProjects } from "@/data/projectData";
import FeaturedModal from "./featuredModal";
import Modal from "./modal";
import { motion } from "framer-motion";

const Projects = ({ darkMode }: any) => {
  const [showModal, setShowModal] = useState(-1);
  const [showFeatured, setShowFeatured] = useState(false);

  const ref: React.MutableRefObject<null | HTMLDivElement> = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowModal(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    if (showModal >= 0 && showModal <= 3) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        bounce: 0.4,
        duration: 1,
        delayChildren: 1.3,
        staggerChildren: 0.5,
        type: "spring",
      },
    },
  };

  const featured = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section className='p-8 md:px-14 flex flex-col gap-4'>
      <div className='flex flex-col'>
        <h1 className='font-CalSans text-2xl'>Projects 🚀</h1>
        <p className='w-full md:w-1/2 '>
          Some projects that I have been working on recently
        </p>
      </div>
      <motion.div
        variants={featured}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className={`${
          darkMode ? "projectCardDark" : ""
        } shadow-md rounded-md flex flex-col justify-between w-full gap-2 bg-white px-6 pt-6 pb-2`}>
        <p className='text-xs'>Featured Project</p>
        <h1 className='font-CalSans text-3xl'>NutriPlan</h1>
        <p className='text-sm'>
          NutriPlan is powered by OpenAI&apos;s latest AI technology to create a
          customized meal plan for you in a matter of seconds, taking into
          account your personal details, dietary restrictions, and cuisine
          preferences. The cutting-edge AI technology generates your plan in a
          clear and concise manner, so you can easily follow and enjoy your
          delicious and nutritious meals.
        </p>
        <div className='flex flex-row justify-center'>
          <button
            onClick={() => setShowFeatured(true)}
            className={`px-4 py-2 rounded w-full text-xs mt-6 uppercase font-medium hover:opacity-80 transition-all ${
              darkMode ? "text-white" : "text-gray-800"
            }`}>
            Find out more
          </button>
        </div>
      </motion.div>
      <FeaturedModal
        darkMode={darkMode}
        setShowFeatured={setShowFeatured}
        showFeatured={showFeatured}
      />
      <motion.div
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='flex flex-col md:flex-row gap-4 w-full'>
        {portfolioProjects.map((project, i) => (
          <>
            <motion.div
              variants={item}
              key={i}
              className={`${
                darkMode ? "projectCardDark" : ""
              } shadow-md rounded-md flex flex-col justify-between w-full px-6 pt-6 pb-2 md:w-1/3 bg-white`}>
              <>
                <p className='font-CalSans mt-2 text-2xl'>{project.name}</p>
                <p className='text-sm mt-1 mb-6'>{project.excerpt}</p>
              </>
              <div className='flex flex-row justify-center'>
                <button
                  onClick={() => setShowModal(i)}
                  className={`px-4 py-2 rounded w-full text-xs mt-2 uppercase font-medium hover:opacity-80  transition-all ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}>
                  Find out more
                </button>
              </div>
            </motion.div>
            <Modal
              darkMode={darkMode}
              image={project.image}
              name={project.name}
              description={project.description}
              techStack={project.techStack}
              link={project.link}
              gitHub={project.gitHub}
              setShowModal={setShowModal}
              showModal={showModal}
              i={i}
              ref={ref}
            />
          </>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
