import React from 'react'
import Image from 'next/image'
import img4 from '../public/assets/projects/img4.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
 
const Project4 = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>    
            <Image className=' z-1' fill={true} priority={false} style={{objectFit:'cover'}} src={img4} alt='/'></Image>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Project4</h2>
                <h3>Reactjs / TailwindCSS / OpenAI / Axios</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur vitae consequuntur voluptatum praesentium laudantium quisquam doloremque voluptas voluptates eos, maxime quam error fugiat blanditiis, repellat odit incidunt dolores eligendi quidem illum harum, eaque nam! Dolorum pariatur nesciunt asperiores voluptate, similique minus, debitis corrupti sapiente, atque doloremque inventore deserunt nam?</p>
            <button className='px-8 py-2 mt-4 mr-8'>code</button>
            <button className='px-8 py-2 mt-4 '>demo</button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>React</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>TailwindCSS</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Axios</p>
                        <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>OpenAi</p>
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

export default Project4