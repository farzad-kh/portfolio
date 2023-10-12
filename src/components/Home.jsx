import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Typing } from "./framer/Typing";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div name="home"  className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-pink-600"
        >
          Hi, my name is
        </motion.p>
        <h1 className="">
          <Typing
            text={"FARZAD KH"}
            type={"name"}
            styleText={"text-4xl sm:text-7xl font-bold text-[#ccd6f6]"}
          />
        </h1>
        <h2 className="">
          <Typing
            text={"I'm a Front End Developer."}
            type={"carrier"}
            styleText={"text-4xl sm:text-7xl font-bold text-[#8892b0]"}
          />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a Front End Developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
