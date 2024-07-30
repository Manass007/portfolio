import React from 'react'
import img1 from '../public/assets/projects/Melodyai4.png';
import img2 from '../public/assets/projects/img2.jpg';
import img3 from '../public/assets/projects/img3.jpg';
import img4 from '../public/assets/projects/img4.jpg';
import ProjectItem from './ProjectItem';

const Project = () => {
  return (
    <div id='Project' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I&#39;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem title='MelodyAI-your music companion' backgroundImg={img1} projecturl='/MelodyAI'></ProjectItem>
                <ProjectItem title='Project2' backgroundImg={img2} projecturl='/Zomatoclone'></ProjectItem>
                <ProjectItem title='Project3' backgroundImg={img3} projecturl='/Project3'></ProjectItem>
                <ProjectItem title='Project4' backgroundImg={img4} projecturl='/Project4'></ProjectItem>
            </div>
        </div>
    </div>
  )
}

export default Project
