"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import img2 from '../public/assets/lancelord.jpg';
import Link from 'next/link';

const About = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div id='About' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className={`py-2 text-gray-600 ${isReadMore ? '' : 'truncate-text'}`}>
            I am a Full Stack Web Developer and current B.Tech student in Computer Science Engineering with a specialization in Artificial Intelligence and Machine Learning (CSE-AIML). With expertise in JavaScript frameworks like React, Angular, Next.js, Nuxt.js, and Vue.js, and back-end experience in Python (Django, Flask) and Java (Spring, Hibernate), I build dynamic, scalable applications. Proficient in both MySQL and NoSQL databases, I offer efficient data solutions. My freelance projects showcase my problem-solving skills and adaptability. I am eager to contribute to a forward-thinking team as a Software Engineer intern, leveraging my academic and practical knowledge to drive business success.
          </p>
          <span onClick={toggleReadMore} className='text-blue-500 underline cursor-pointer'>
            {isReadMore ? 'Read less' : 'Read more'}
          </span>
          <Link href="/#Project">
            <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
          </Link>
        </div>
        <div className='max-sm:mt-6 w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image className='rounded-xl' src={img2} alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
