import React from "react";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className='w-full flex justify-center items-center p-6 border-t border-gray-300 flex-col mt-12'>
      {/* <hr className='h-px my-8 bg-gray-900 border-0 dark:bg-gray-700'></hr> */}
      <h1 className='font-CalSans'>Where to find me:</h1>
      <div className='flex gap-2 mt-2'>
        <FiGithub size={"1.3em"} />
        <HiOutlineMail size={"1.4em"} />
      </div>
    </div>
  );
};

export default Footer;
