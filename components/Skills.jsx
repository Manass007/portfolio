import React from 'react'
import Image from 'next/image';
import img1 from '../public/assets/skills/html.png';
import img2 from '../public/assets/skills/css.png';
import img3 from '../public/assets/skills/javascript.png';
import img4 from '../public/assets/skills/react.png';
import img5 from '../public/assets/skills/tailwind.png';
import img6 from '../public/assets/skills/nextjs.png';
import img7 from '../public/assets/skills/node.png';
import img8 from '../public/assets/skills/mongo.png';
import img9 from '../public/assets/skills/github1.png';

const Skills = () => {
  return (
    <div id='Skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image className='w-16 h-16' src={img1} alt='/'></Image>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>HTML</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image className='w-16 h-16' src={img2} alt='/'></Image>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image className='w-16 h-16' src={img3} alt='/'></Image>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>JAVASCRIPT</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image className='w-16 h-16' src={img4} alt='/'></Image>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>REACT</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image className='w-16 h-16' src={img5} alt='/'></Image>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>TAILWINDCSS</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image className='w-16 h-16' src={img6} alt='/'></Image>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>NEXTJS</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image className='w-16 h-16' src={img7} alt='/'></Image>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>NODE</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image className='w-16 h-16' src={img8} alt='/'></Image>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>MONGODB</h3>
                    </div>
                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image className='w-16 h-16' src={img9} alt='/'></Image>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>GITHUB</h3>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
