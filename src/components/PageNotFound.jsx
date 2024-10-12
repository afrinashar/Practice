import React from 'react';
import { motion } from 'framer-motion';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <motion.div
      className="page-not-found"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        className="error-svg"
        initial={{ scale: 0.5, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {/* SVG Content */}
        <g fill="#F44336">
          <path d="M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0zm216 683.8c0 8.7-.7 17.3-2.2 25.8-1.5 8.5-3.6 16.7-6.4 24.7-2.8 7.9-6.3 15.4-10.4 22.4-4.2 7-9.1 13.5-14.7 19.6-5.7 6.1-12 11.6-19 16.6-7 5-14.5 9.2-22.4 12.8-7.9 3.6-16.2 6.4-24.7 8.4-8.5 2-17.2 3-26 3h-66.3c-7.5 0-14.7-.9-21.7-2.8-7-1.9-13.8-4.6-20.3-8.1a88.292 88.292 0 0 1-17.4-12.8c-5.3-5-9.8-10.7-13.7-17-3.8-6.3-6.8-13.2-8.9-20.6-2.1-7.4-3.2-15.3-3.2-23.6v-33.1c0-12.5 2.3-23.9 7-34.3 4.7-10.4 10.9-19.3 18.8-26.8 7.8-7.5 16.9-13.4 27.1-17.6 10.2-4.2 21-6.3 32.1-6.3h66.4c7.4 0 14.6.9 21.7 2.8 7.1 1.9 13.8 4.6 20 8.1a88.292 88.292 0 0 1 17.4 12.8c5.3 5 9.9 10.7 13.7 17 3.9 6.3 6.9 13.2 9 20.6 2.1 7.4 3.2 15.3 3.2 23.6v33.1zm-37.1-33.1c0-7.3-1.3-13.9-4-19.8-2.6-6-6.2-11-10.5-15.3-4.4-4.2-9.5-7.5-15.2-9.8-5.8-2.3-11.8-3.4-18.1-3.3h-66.4c-6.1-.1-12.1 1-17.9 3.2-5.8 2.2-10.9 5.4-15.4 9.6-4.5 4.2-8.1 9.3-10.8 15.3-2.7 6-4 12.7-4 20v33.1c0 7.4 1.3 14 4 20 2.6 6 6.2 11 10.6 15.2 4.4 4.2 9.6 7.4 15.4 9.7 5.8 2.3 11.9 3.4 18.2 3.3h66.4c7.3 0 13.8-1.2 19.8-3.6 6-2.4 11-5.7 15.1-10 4.2-4.4 7.4-9.3 9.6-15.2 2.3-5.9 3.4-12.3 3.4-19.3v-33.1zm-16-26.9a17.89 17.89 0 0 1 2.8 6.7c.5 2.4.5 4.8 0 7.1-.5 2.3-1.4 4.5-2.8 6.5-1.4 2-3.1 3.7-5.3 5.2l-99.4 66.4c-1.6 1.2-3.3 2.1-5 2.5-1.7.5-3.4.7-5.2.7-3 0-5.9-.7-8.6-2.1-2.7-1.4-4.9-3.4-6.7-6.1a17.89 17.89 0 0 1-2.8-6.7c-.5-2.4-.5-4.8-.1-7.1.4-2.3 1.3-4.5 2.6-6.5 1.3-2 3.1-3.7 5.2-5.2l99.7-66.4a17.89 17.89 0 0 1 6.7-2.8c2.4-.5 4.8-.5 7.1 0 2.3.5 4.5 1.4 6.5 2.7 2 1.4 3.8 3.1 5.2 5.1z"/>
        </g>
      </motion.svg>
      <motion.h1
        className="error-title"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        404
      </motion.h1>
      <motion.p
        className="error-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>
      <motion.a
        href="/"
        className="back-link"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        Go Back Home
      </motion.a>
    </motion.div>
  );
};

export default PageNotFound;
