import React from 'react';
import {AboutMe} from "../components/framer/Typing"
import { motion } from 'framer-motion';
const About = () => {
  return (
    <motion.div viewport={{ once: true }} name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1200px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div div className='max-w-[1200px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div  className='sm:text-right text-3xl font-bold'>
             
             <AboutMe type={"bottom"} text={ "I'm a Junior Front End Developer . thank you for visiting my portfolio . please take look to my projects"}
             
              
              />
            
         
            </div>
            <div className=' text-2xl font-bold text-gray-400 '>
              <AboutMe type={"top"} text={"I am passionate to learning programing languages especially in front end area"} />
            

            </div>
          </div>
      </div>
    </motion.div>
  );
};

export default About;
