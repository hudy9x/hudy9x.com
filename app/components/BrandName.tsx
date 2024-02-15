"use client";

import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    transform: "scale(2.5)",
    fill: "rgba(255, 255, 255, 0)",
    stroke: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transform: "scale(1)",
    stroke: "rgba(255, 255, 255, 1)",
    fill: "rgba(255, 255, 255, 1)",
  },
};

export const BrandName = () => {
  const duration = 3.7;
  return (
    <div className=" w-[200px] h-[50px] sm:w-[300px] sm:h-[100px]">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        height={"100%"}
        width={"100%"}
        viewBox="0 0 987 281"
        className="brand-name"
      >
        {/* h */}
        <motion.path
          d="M258.9,156.2c0,7.6-2,13.6-6,18c-4,4.2-9.4,6.3-16.2,6.3c-4.8,0-8.9-1-12.3-3s-6-4.8-7.8-8.4
		c-1.6-3.6-2.4-7.9-2.4-12.9v-84h-45.9v84.6c0,12.6,2.9,23.8,8.7,33.6c5.8,9.6,13.8,17.2,24,22.8c10.4,5.4,22.3,8.1,35.7,8.1
		c13.4,0,25.2-2.7,35.4-8.1c10.2-5.6,18.2-13.2,24-22.8c5.8-9.8,8.7-21.1,8.7-33.9V72.2h-45.9V156.2z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration, ease: "easeInOut" },
            fill: { duration, ease: [1, 0, 0.8, 1] },
          }}
        />

        {/* u */}
        <motion.path
          d="M433.8,81.7c-3.3-2.6-7-4.9-11.1-6.8c-8-3.8-17-5.7-27-5.7c-13.8,0-26.1,3.3-36.9,9.9
		c-10.6,6.6-19,15.6-25.2,27c-6,11.4-9,24.4-9,39c0,14.6,3,27.6,9,39c6.2,11.4,14.6,20.4,25.2,27c10.8,6.6,23.1,9.9,36.9,9.9
		c10,0,19.1-2,27.3-6c4.3-2.2,8.2-4.8,11.7-7.7V218h45V0.2h-45.9V81.7z M420.9,175.4c-4.8,2.8-10.5,4.2-17.1,4.2
		c-6.2,0-11.8-1.5-16.8-4.5s-8.9-7.1-11.7-12.3c-2.8-5.2-4.2-11.1-4.2-17.7c0-6.6,1.4-12.5,4.2-17.7c3-5.2,6.9-9.3,11.7-12.3
		c5-3,10.7-4.5,17.1-4.5c6.4,0,12,1.5,16.8,4.5c5,3,8.8,7.1,11.4,12.3c2.8,5,4.2,10.9,4.2,17.7s-1.4,12.8-4.2,18
		C429.5,168.3,425.7,172.4,420.9,175.4z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration, ease: "easeInOut" },
            fill: { duration, ease: [1, 0, 0.8, 1] },
          }}
        />

        {/* d */}
        <motion.path
          d="M115.4,76.4c-8.6-4.8-18.6-7.2-30-7.2c-11.2,0-21.1,2.4-29.7,7.2c-3.5,1.9-6.7,4.1-9.6,6.7V0.2H0.2V218h45.9
		v-83.1c0-5,1.1-9.4,3.3-13.2c2.2-4,5.2-7,9-9c3.8-2.2,8.2-3.3,13.2-3.3c7.2,0,13.1,2.4,17.7,7.2c4.8,4.6,7.2,10.7,7.2,18.3V218
		h45.9v-93.3c0-11-2.4-20.6-7.2-28.8C130.6,87.5,124,81,115.4,76.4z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration, ease: "easeInOut" },
            fill: { duration, ease: [1, 0, 0.8, 1] },
          }}
        />
        {/* y */}
        <motion.polygon
          points="575.6,160.7 546.5,72.2 497,72.2 552.7,208 519.5,279.5 566.6,279.5 592.4,218.6 654.8,72.2 
		605.3,72.2 	"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration, ease: "easeInOut" },
            fill: { duration, ease: [1, 0, 0.8, 1] },
          }}
        />
        {/* 9 */}
        <motion.path
          d="M782.1,12.8c-11.8-6.6-25.1-9.9-39.9-9.9s-28.1,3.3-39.9,9.9c-11.8,6.6-21.2,15.5-28.2,26.7
		s-10.5,23.8-10.5,37.8c0,13.4,3.1,25.4,9.3,36c6.4,10.4,14.9,18.7,25.5,24.9c10.8,6,22.6,9,35.4,9c2.1,0,4.1-0.1,6-0.2l-51,71h53.4
		l59.7-87c12.4-18.2,18.6-36.3,18.6-54.3c0-14-3.5-26.5-10.5-37.5C803.2,28,793.9,19.2,782.1,12.8z M770.7,95.6
		c-2.8,5-6.7,9-11.7,12s-10.6,4.5-16.8,4.5s-11.8-1.5-16.8-4.5s-9-7-12-12c-2.8-5.2-4.2-11-4.2-17.4c0-6.6,1.4-12.5,4.2-17.7
		c3-5.2,6.9-9.2,11.7-12c5-3,10.7-4.5,17.1-4.5c6.2,0,11.8,1.5,16.8,4.5c5,2.8,8.9,6.8,11.7,12s4.2,11.1,4.2,17.7
		C774.9,84.6,773.5,90.4,770.7,95.6z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration, ease: "easeInOut" },
            fill: { duration, ease: [1, 0, 0.8, 1] },
          }}
        />

        {/* x */}
        <motion.polygon
          points="987.6,218 936.1,142.8 984.6,72.2 934.8,72.2 910.3,111.7 885.9,72.2 832.2,72.2 881.8,143.7 
		829.5,218 879.6,218 907.6,174.5 934.5,218 	"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration, ease: "easeInOut" },
            fill: { duration, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </div>
  );
};
