import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const Contact = ({ darkMode }: any) => {
  const [confirmation, setConfirmation] = useState({
    message: "",
  });

  const SubmitMessage = async (values: any) => {
    try {
      const result = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((data) => {
          setConfirmation({
            message: "Success",
          });
        });
    } catch (error) {}
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    // Validate Form
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      name: Yup.string().required("Name is required"),
      message: Yup.string().required("Please enter a message"),
    }),

    onSubmit: (values) => {
      setConfirmation({
        message: "Loading",
      });
      SubmitMessage(values);
    },
  });

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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className='flex w-full flex-col px-8 pt-20 justify-center items-center'>
      <h1 className='font-CalSans text-2xl md:text-4xl mb-4'>
        Send us a message 👋
      </h1>
      <p className='w-full md:w-1/2 mb-3'>
        If you have any enquires or would like to leave any feedback feel free
        to drop us a message.
      </p>
      <motion.form
        variants={container}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        onSubmit={formik.handleSubmit}
        className='flex flex-col gap-4 w-full justify-center items-center md:w-1/2'>
        <motion.input
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          variants={item}
          placeholder='Enter your name'
          id='name'
          name='name'
          type='text'
          className='p-2 text-xs shadow-sm rounded w-full'
        />
        {formik.touched.name && formik.errors.name ? (
          <p className='mb-2 text-red-400 text-xs -mt-3 w-full'>
            *{formik.errors.name}
          </p>
        ) : null}
        <motion.input
          id='email'
          name='email'
          type='email'
          variants={item}
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          placeholder='Enter your email'
          className='p-2 text-xs shadow-sm rounded w-full'
        />
        {formik.touched.name && formik.errors.name ? (
          <p className='mb-2 text-red-400 text-xs -mt-3 w-full'>
            *{formik.errors.email}
          </p>
        ) : null}
        <motion.textarea
          id='message'
          name='message'
          onChange={formik.handleChange}
          value={formik.values.message}
          onBlur={formik.handleBlur}
          placeholder='Enter your message'
          rows={8}
          variants={item}
          className='p-2 text-xs shadow-sm rounded w-full'
        />
        {formik.touched.message && formik.errors.message ? (
          <p className='mb-2 text-red-400 text-xs -mt-3 w-full'>
            *{formik.errors.message}
          </p>
        ) : null}
        <motion.button
          variants={item}
          whileHover={{ scale: 1.05 }}
          type='submit'
          className={`border rounded text-sm w-32 mt-2 bg-white py-1 submitButton ${
            darkMode ? "text-black" : ""
          }`}>
          Submit
        </motion.button>
      </motion.form>
      {confirmation?.message === "Loading" ? (
        <p className='text-xs mt-6'>Sending message..</p>
      ) : confirmation?.message === "Success" ? (
        <p className='text-xs mt-6 text-green-500'>
          Thanks for getting in touch!
        </p>
      ) : confirmation?.message ? (
        <p className='text-xs mt-4'>
          There has been an error sending your email, please try another email
          address
        </p>
      ) : (
        <p className='smallText'></p>
      )}
    </div>
  );
};

export default Contact;
