import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, contactMethods } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ index, title, icon, URL }) => {
  return (
    <Tilt className="xs:w-[260px] w-full">
      <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          {URL ? (
            <Link to={URL} target="_blank" rel="noopener noreferrer">
              <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
              <h3 className="text-white text-[20px] font-bold text-center mt-8">{title}</h3>
            </Link>
          ) : (
            <>
              <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
              <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Growing up, I used to dismantle everything at sight trying to figure out how and why they work the way they do, the satisfaction of rebuilding to full functionality is something I got addicted
        to.
        <br />
        I thought my dream was to be an IT technician for a little company, sipping coffee and waiting for employees to need my help, It seemed enough for a young man. But I felt it wasn't quite
        enough. I yearned to learn more, I longed to learn something different.
        <br />
        That's when my journey started, the spark I was missing ignited the instant I started my first JavaScript tutorial.
        <br />
        Now, and after All of this who I'm I, and what do I have under my belt? 3+ years of hands-on experience made me a hard-working full-stack web developer who knows what timeline and quality of
        software matter.
        <br />
        Coding is not just my work, I take it more as a passion, interest, and art of creating something out of nothing. I have solid programming experience in combination with good problem-solving
        skills.
        <br />
        My primary stack is NodeJS with Express framework for Back-end, and Angular (ReactJs is also an option) for Front-end.
        <br />
        I'm eager to learn new methodologies and keep up with the latest trends in technology, enthusiastically grabbing onto any other programming languages, frameworks, or principles I can integrate
        into the coding web in my head.
      </motion.p>
      <>
        <h2 className={`mt-20 ${styles.heroSubText}`}>My Services:</h2>
        <div className="mt-8 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </>
      <>
        <h2 className={`mt-20 ${styles.heroSubText}`}>Reach Out On:</h2>
        <div className="mt-8 flex flex-wrap gap-10">
          {contactMethods.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </>
    </>
  );
};

export default SectionWrapper(About, "about");
