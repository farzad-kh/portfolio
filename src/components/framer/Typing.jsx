import React from "react";
import { motion } from "framer-motion";
import { container } from "../../../util/motion";
import { leftRight } from "../../../util/motion";

// const container = (i) => ({
//   hidden: {
//     opacity: 0,
//   },

//   show: {
//     opacity: 1,
//     transition: {
//       delay: 0.1 * i,
//       duration: 0.4,
//       ease: "easeIn",
//       type: "tween",
//     },
//   },
//   viewport: {},
// });

export const Typing = ({ text, styleText, type }) => (
  <motion.p initial="hidden" whileInView="show" viewport={{ once: true }}>
    {[...text].map((letter, i) => (
      <motion.span
        className={`${styleText} ${
          type === "name" ? "colorGrName" : "colorGrCarrier"
        }`}
        variants={type === "name" ? container(i).show : container(i + 9).show}
        viewport={{ once: true }}
        initial={
          type === "name" ? container(i).hidden : container(i + 9).hidden
        }
        whileInView={
          type === "name" ? container(i).show : container(i + 9).show
        }
        key={i}
      >
        {letter}
      </motion.span>
    ))}
  </motion.p>
);
export const AboutMe = ({ text, type }) => (
  <motion.div initial="hidden" whileInView="show" viewport={{ once: true }}>
    <motion.p viewport={{ once: true }}
    variants={leftRight(type)}
    whileInView={leftRight(type).show}
    initial={leftRight(type).hidden}
    >
      {text}
      </motion.p>
  </motion.div>
);
