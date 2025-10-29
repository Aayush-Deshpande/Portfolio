// src/components/Certificates.jsx

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// This Card can handle both images and PDFs
const CertificateCard = ({ index, title, file }) => {
  // Check if the file path is a PDF.
  // The 'file' variable is a string path like "/assets/my-cert.a1b2.pdf"
  const isPdf = file.toLowerCase().includes(".pdf");

  return (
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card xs:w-[250px] w-full'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-5 min-h-[320px] flex justify-between items-center flex-col'>
          {isPdf ? (
            // --- This is rendered for PDF files ---
            <a
              href={file}
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-col items-center justify-center text-center h-full'
            >
              <div className='w-full h-[180px] bg-black-100 rounded-lg flex items-center justify-center border border-secondary'>
                <p className='text-white font-black text-2xl'>PDF</p>
              </div>
              <p className='text-secondary mt-2 text-sm'>
                Click to view Certificate
              </p>
            </a>
          ) : (
            // --- This is rendered for JPG/PNG files ---
            <a href={file} target='_blank' rel='noopener noreferrer'>
              <img
                src={file}
                alt={title}
                className='w-full h-[180px] object-contain rounded-lg'
              />
            </a>
          )}

          <h3 className='text-white text-[18px] font-bold text-center mt-4'>
            {title}
          </h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Accomplishments
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Certificates.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center'
        >
          Here are the certifications I've earned throughout my journey. They
          include a mix of official credentials and course completions. Click on
          any card to view the image or PDF.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={`certificate-${index}`}
            index={index}
            {...certificate}
          />
        ))}
      </div>
    </>
  );
};

// This wraps the component with padding and the ID for the navbar link
export default SectionWrapper(Certificates, "certificates");