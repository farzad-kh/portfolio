import React from "react";
import { data } from "../data/data.js";
import { delay, motion } from "framer-motion";
const Work = () => {
  // projects file
  const projects = data;
  //setProject(data);

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f] ">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my work</p>
        </div>

        {/* container for projects */}
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:p-8 p-4 "
        >
          {/* Gird Item */}
          {projects.map((project, index) => (
            <motion.div
              whileInView={{
                opacity: 1,
                y:30,
                transition: {
                  delay: index * 0.3,
                  type: "spring", 
                  stiffness: 100,
                  
                },
                
              }}
              initial={{ opacity: 0,y:0  }}
              viewport={{once:true}}
              key={index}
              style={{ backgroundImage: `url(${project.image})` }}
              className="group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div    "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 flex justify-center bg-[rgba(0,0,0,.6)] flex-col w-full h-full z-50 group-hover:backdrop-blur-[3px] transition-all duration-200">
                <span className="text-2xl font bold text-white tracking-wider mb-1 ">
                  {project.name}
                </span>
                <div className="flex gap-1 justify-center flex-wrap transition-all duration-200 ">
                  {project.library.map((item, i) => (
                    <>
                      <div className=" ">{item}</div>

                      {project.library.length === i + 1 ? (
                        ""
                      ) : (
                        <div className=" text-sky-400">.</div>
                      )}
                    </>
                  ))}
                </div>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={project.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                      !bg-white  text-gray-700   font-semibold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={project.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-[#fc637e] text-white   font-semibold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
