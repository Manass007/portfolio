"use client"
import React, { useState } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Main = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div id="Main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;am <span className="text-[#5651e5]">Manas</span>
          </h1>
          <h1 className="py-1 text-gray-700">A Full Stack Developer</h1>
          <p className={`py-4 text-gray-600 max-w-[70%] m-auto ${isReadMore ? '' : 'truncate-text'}`}>
            As a dedicated Full Stack Web Developer and student, I blend
            academic knowledge with practical freelance experience. Proficient
            in JavaScript frameworks like React, Angular, Next.js, Nuxt.js, and
            Vue.js, I create dynamic and responsive user interfaces. My back-end
            expertise includes Python frameworks (Django, Flask) and Java
            frameworks (Spring, Hibernate), allowing me to develop robust
            applications. With comprehensive knowledge of relational databases
            (MySQL) and non-relational databases (MongoDB, NoSQL), I ensure
            efficient data storage solutions. As a freelancer, I&#39;ve successfully
            completed various projects, showcasing my problem-solving skills and
            adaptability. I&#39;m eager to apply my skills in a professional setting
            as a Software Engineer intern, contributing to high-quality software
            development while continuing to learn from industry experts.
          </p>
          <span onClick={toggleReadMore} className='text-blue-500 underline cursor-pointer'>
            {isReadMore ? 'Read less' : 'Read more'}
          </span>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/manas-kumar-gupta-0b8657310/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/Manass007">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="https://x.com/lancelord007">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTwitter />
              </div>
            </a>
            <a href="https://www.instagram.com/_lancelord_/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <IoLogoInstagram />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
