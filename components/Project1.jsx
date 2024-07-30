import React from 'react'
import Image from 'next/image'
import img1 from '../public/assets/projects/Melodyai4.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
 
const Project1 = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>    
            <Image className=' z-1' fill={true} priority={false} style={{objectFit:'cover'}} src={img1} alt='/'></Image>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>MelodyAI-your music companion</h2>
                <h3>Nextjs / TailwindCSS / Firebase / MongoDB / Reactjs / Nodemailer</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>

1. <b>Seamless Music Streaming:</b> Built a continuous audio playback feature using React hooks and Next.js, ensuring uninterrupted music as users navigate the app.<br />
   
2. <b>Feedback System:</b> Developed a feedback form with Nodemailer integration, sending user comments as professional HTML email templates.<br />

3. <b>Modern UI/UX:</b> Designed a responsive and visually appealing interface using Tailwind CSS for an enhanced user experience.<br />

4. <b>Efficient Data Management and Security:</b> Utilized MongoDB for managing and retrieving data related to artists, playlists, and songs. Secured user login credentials using JWT tokens and encryption methods, ensuring data protection and secure access.<br />
</p>
            <button className='px-8 py-2 mt-4 mr-8'>Github Link</button>
            <a href='https://melody-ai-1-0.vercel.app/'><button className='px-8 py-2 mt-4 '>Visit</button></a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-2 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Nextjs</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>TailwindCSS</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Firebase</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>MongoDB</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Reactjs</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Nodemailer</p>
                    </div>
                </div>

            </div>
            <Link href='/#project'>
                <p className='underline cursor-pointer'>Back</p>
            </Link>
        </div>
    </div>
  )
}

export default Project1