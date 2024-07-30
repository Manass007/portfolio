'use client'
import Link from 'next/link';
import Image from 'next/image';
import img1 from '../public/assets/portfolio.png';
import React, {useState,useEffect} from 'react';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai';
import { IoLogoInstagram } from "react-icons/io5";
// import { useRouter, usePathname } from 'next/navigation';

const Navbar =({bgColor, linkColor}) => {
    const [nav, setNav] = useState(false);
    const [shadow,setshadow] = useState(false);
    // const [navBg, setNavBg] = useState('#ecf0f3');
    // const [linkColor, setLinkColor] = useState('#1f2937');
    // const router = useRouter();
    // const pathname = usePathname();

    // console.log(pathname)

    // useEffect(() => {
    //     if(pathname === '/RelicaAi'){
    //         setNavBg('transparent');
    //         setLinkColor('#ecf0f3');
    //     } else {
    //         setNavBg('#ecf0f3');
    //         setLinkColor('#1f2937');
    //     };

    // },[pathname])

    const handleNav = () => {
        setNav(!nav)
    }
    
    useEffect(()=>{
        const handleShadow = () => {
            if(window.scrollY >= 90) {
                setshadow(true);
            } else {
                setshadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    },[]);

  return (
    <>
    <div style={{backgroundColor:bgColor}} className= {shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl'>
        <Link href={"/"}><Image src={img1} alt="/" width="125" height="50" priority={true} /></Link>
        <div>
            <ul style={{color:linkColor}} className='hidden md:flex'>
                <Link href="/">
                    <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </Link>
                <Link href="/#About">
                    <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                </Link>
                <Link href="/#Skills">
                    <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                </Link>
                <Link href="/#Project">
                    <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                </Link>
                <Link href="/#Contact">
                    <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden'>
                <AiOutlineMenu size={25}/>
            </div>
        </div>
      </div>
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-5 ease-in duration-500':'fixed left-[-100%] top-0 p-5 ease-in duration-500'}>
            <div>
                <div className='flex w-full items-center justify-between'>
                    <Link href={"/"}><Image src={img1} alt='/' width={87} height={50}/></Link>
                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'><AiOutlineClose/></div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                    <p className='w-[85%] md:w-[90%]'>Let&#39;s build something legendary together</p>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href="/">
                        <li onClick={() =>  setNav(false)} className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link href="/#About">
                        <li onClick={() =>  setNav(false)} className='py-4 text-sm'>About</li>
                        </Link>
                        <Link href="/#Skills">
                        <li onClick={() =>  setNav(false)} className='py-4 text-sm'>Skills</li>
                        </Link>
                        <Link href="/#Project">
                        <li onClick={() =>  setNav(false)} className='py-4 text-sm'>Projects</li>
                        </Link>
                        <Link href="/#Contact">
                        <li onClick={() =>  setNav(false)} className='py-4 text-sm'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-20'>
                        <p className='uppercase tracking-widest text-[#5651e5]'>Let&#39;s Connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaGithub/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <AiOutlineMail/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <IoLogoInstagram/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default Navbar;
