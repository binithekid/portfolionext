import React, { forwardRef, Ref } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { GoMarkGithub } from "react-icons/go";
import { FaGlobe } from "react-icons/fa";
import { RiCloseCircleFill, RiCloseCircleLine } from "react-icons/ri";

const Modal = forwardRef(
  (
    {
      image,
      name,
      setShowModal,
      showModal,
      i,
      description,
      link,
      gitHub,
      techStack,
      darkMode,
    }: any,
    ref: Ref<HTMLDivElement> | undefined
  ) => {
    return (
      <AnimatePresence>
        {showModal === i && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            className='modal'>
            <motion.div
              initial={{
                opacity: 0,
                y: 200,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
              }}
              exit={{ opacity: 0, y: 200 }}
              className={`${
                darkMode ? "dark-modal-content" : "modal-content"
              }  rounded flex flex-col w-5/6 md:w-1/2 `}
              ref={ref}>
              <Image
                height={500}
                width={500}
                src={image}
                alt={name}
                className='object-cover h-64 w-full border'
              />
              <h1 className='font-CalSans mt-1 text-lg'>{name}</h1>
              <p className='text-sm'>{description}</p>
              <div className='flex flex-row gap-3 mt-2 text-sm'>
                {techStack.map((tech: any, i: number) => (
                  <p className='text-md font-medium' key={i}>
                    {tech}
                  </p>
                ))}
              </div>
              <div className='flex flex-row mt-4 justify-between'>
                <div className='flex gap-2'>
                  <a
                    href={gitHub}
                    target='_blank'
                    className='border gap-2 cursor-pointer py-1 px-3 flex flex-row justify-center items-center uppercase text-sm rounded shadow bg-emerald-500 text-white transition-all hover:opacity-70'
                    rel='noreferrer'>
                    <GoMarkGithub size={"1em"} />
                    GitHub
                  </a>
                  <a
                    href={link}
                    target='_blank'
                    className='border gap-2 py-1 px-3 flex flex-row justify-center items-center uppercase text-sm rounded shadow bg-blue-500 text-white transition-all hover:opacity-70'
                    rel='noreferrer'>
                    <FaGlobe size={"1em"} />
                    WEBSITE
                  </a>
                </div>

                <button
                  className='border gap-2 py-1 px-3 flex flex-row justify-center items-center uppercase text-sm rounded shadow bg-red-500 text-white transition-all hover:opacity-70'
                  onClick={() => setShowModal(-1)}>
                  <RiCloseCircleFill size={"1.2em"} /> Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);
Modal.displayName = "Modal";
export default Modal;
