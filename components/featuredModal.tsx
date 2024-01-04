import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { GoMarkGithub } from "react-icons/go";
import { FaGlobe } from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";
import image from "../public/images/aimhireai.png";

const FeaturedModal = ({ showFeatured, setShowFeatured, darkMode }: any) => {
  const techStack = ["Next JS", "Tailwind", "OpenAI", "Firebase", "Redux"];
  return (
    <div>
      {" "}
      <AnimatePresence>
        {showFeatured && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            className="modal"
          >
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
            >
              <Image
                height={500}
                width={500}
                src={image.src}
                alt="nutriplanLogo"
                className="object-cover h-64 w-full border"
              />
              <h1 className="font-CalSans mt-1 text-lg">Aim Hire AI</h1>
              <p className="text-xs md:text-sm">
                Aimhire.ai transforms your job search with a cutting-edge,
                full-stack platform. Powered by Firebase, it seamlessly
                integrates Next.js for a responsive user experience. Utilizing
                AI, it elevates your CVs and cover letters. Styled with Tailwind
                CSS for a sleek design, Aimhire.ai combines technology and
                career success seamlessly
              </p>
              <div className="flex flex-row gap-3 mt-2 text-sm">
                {techStack.map((tech: any, i: number) => (
                  <p className="text-md font-medium" key={i}>
                    {tech}
                  </p>
                ))}
              </div>
              <div className="flex flex-row mt-4 justify-between">
                <div className="flex gap-2">
                  {/* <a
                    target="_blank"
                    href="https://github.com/binithekid/nutriplan"
                    className="border gap-2 py-1 px-3 flex flex-row justify-center items-center uppercase text-sm rounded shadow bg-emerald-500 text-white transition-all hover:opacity-70"
                    rel="noreferrer"
                  >
                    <GoMarkGithub size={"1em"} /> GitHub
                  </a> */}
                  <a
                    target="_blank"
                    href="https://aimhire.ai/"
                    className="border gap-2 py-1 px-3 flex flex-row justify-center items-center uppercase text-sm rounded shadow bg-blue-500 text-white transition-all hover:opacity-70"
                    rel="noreferrer"
                  >
                    <FaGlobe size={"1em"} /> Website
                  </a>
                </div>

                <button
                  className="border gap-2 py-1 px-3 flex flex-row justify-center items-center uppercase text-sm rounded shadow bg-red-500 text-white transition-all hover:opacity-70"
                  onClick={() => setShowFeatured(false)}
                >
                  <RiCloseCircleFill size={"1.2em"} /> Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeaturedModal;
