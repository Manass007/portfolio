"use client"
import React from 'react'
import Image from 'next/image'
import img1 from '../public/assets/contact.jpg';
import { useState } from "react";
import {FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa';
import { IoLogoInstagram } from "react-icons/io5";
import Link from 'next/link';
import {HiOutlineChevronDoubleUp} from "react-icons/hi"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message, mobile, subject }),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setMobile("");
      setSubject("");
    } else {
      setStatus("Failed to send Message. Please try again.");
    }
  };
  return (
    <div id='Contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
            {/* left */}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='lg:p-4 h-full'>
                    <div>
                        <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={img1} alt="/"></Image>
                    </div>
                    <h2 className='py-2'>Manas Kumar Gupta</h2>
                    <p>Full Stack Developer</p>
                    <p className='py-4'>I am available for freelance or full-time positions.Contact me and let&#39;s talk.</p>
                <div>
                    <p className='uppercase pt-8'>Connect with me</p>
                    <div className='flex items-center justify-between py-4'>
                        <a href='https://www.linkedin.com/in/manas-kumar-gupta-0b8657310/'><div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                        </div></a>
                        <a href='https://github.com/Manass007'><div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub/>
                        </div></a>
                        <a href='https://x.com/lancelord007'><div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaTwitter />
                        </div></a>
                        <a href='https://www.instagram.com/_lancelord_/'><div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <IoLogoInstagram/>
                        </div></a>
                    </div>
                </div>
                </div>
            </div>
            {/* right */}
            <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                <div className='p-4'>
                    <form onSubmit={handleSubmit}>
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2' htmlFor="name">Name</label>
                                <input className='rounded-lg border-2 p-3 border-gray-300' type="text" value={name} name="name" id="name" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2' htmlFor="mobile">Phone number</label>
                                <input className='rounded-lg border-2 p-3 border-gray-300' type="text" id="mobile" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                            </div>
                        </div>
                            <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2' htmlFor="email">Email</label>
                            <input className='rounded-lg border-2 p-3 border-gray-300' type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2' htmlFor="subject">Subject</label>
                            <input className='rounded-lg border-2 p-3 border-gray-300' type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                            </div>
                            <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2' htmlFor="message">Message</label>
                            <textarea className='rounded-lg border-2 p-3 border-gray-300' rows='10' id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4 '>send Message</button>
                            {status && (
                                <div className="p-2 w-full">
                                <p className="text-center text-sm text-gray-400">{status}</p>
                                </div>
                            )}
                    </form>
                </div>
            </div>
        </div>
        <div className='flex justify-center py-12'>
            <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
            </div>
            
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
