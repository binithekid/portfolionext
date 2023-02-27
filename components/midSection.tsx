import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import Projects from "./projects";
import TechStack from "./techStack";
import Contact from "./contact";
import Footer from "./footer";

const MidSection = ({ darkMode }: any) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: "-80px 0px 0px 0px",
    };

    const observer = new IntersectionObserver(([entry]) => {
      setShowNavbar(entry.isIntersecting);
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    } else {
      setShowNavbar(false);
    }

    return () => {
      if (sectionRef!.current) {
        observer.unobserve(sectionRef!.current);
      }
    };
  }, []);

  const navbarVariants = {
    hidden: {
      opacity: 0,
      y: -40,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 24,
        duration: 1,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 24,
        delay: 0.8,
        duration: 2,
      },
      velocity: 2,
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const targetSection = document.getElementById("target-section");
      const navbar = document.getElementById("navbar");
      if (targetSection && navbar) {
        const topBorder = targetSection.getBoundingClientRect().top;
        topBorder >= 0
          ? navbar.classList.remove("fixed")
          : navbar.classList.add("fixed");
      }
    });
  }, []);

  return (
    <section
      className={`${darkMode ? "darkMidSection" : "lightMidSection"}`}
      id='target-section'>
      <div>
        <motion.nav
          id='navbar'
          className={`flex bg-white shadow justify-between items-center px-8 md:px-14 py-4 ${
            darkMode ? "darkNav" : "lightNav"
          }`}
          variants={navbarVariants}
          initial='hidden'
          animate={showNavbar ? "visible" : "hidden"}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          style={{ originY: 0.55 }}>
          <div className='font-CalSans flex flex-row'>
            <h1 className='text-2xl md:text-3xl '>Binyams</h1>
            <div
              className={` text-2xl md:text-3xl ${
                darkMode ? "bg-animate-dark-small" : "bg-animate-small"
              }`}>
              portfolio
            </div>
          </div>
          <div className='flex flex-row gap-4'>
            <FiGithub size={"1.3em"} />
            <HiOutlineMail size={"1.4em"} />
          </div>
        </motion.nav>{" "}
        <div className='content' ref={sectionRef}>
          <Projects darkMode={darkMode} />
          <TechStack />
          <Contact darkMode={darkMode} />
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default MidSection;
