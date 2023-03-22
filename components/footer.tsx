import React from "react";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className='w-full flex justify-center items-center p-6 border-t border-gray-300 flex-col mt-12'>
      {/* <hr className='h-px my-8 bg-gray-900 border-0 dark:bg-gray-700'></hr> */}
      <h1 className='font-CalSans'>Where to find us:</h1>
      <div className='flex gap-2 mt-2'>
        <a
          className='cursor-pointer'
          target='_blank'
          href='https://github.com/binithekid?tab=repositories'
          rel='noreferrer'>
          <FiGithub size={"1.3em"} />
        </a>
        <a href='mailto:bini.tek1@gmail.com' className='cursor-pointer'>
          <HiOutlineMail size={"1.4em"} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
