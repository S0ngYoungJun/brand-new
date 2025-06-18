import { projects } from '@/app/data/portfolio'
import React from 'react'
import SwiperTest from '../Slide/Slide'

const Projects = () => {
  return (
    <section id="projects" className='my-20  justify-center flex flex-col animate__animated animate__fadeIn animate__delay-2s'>
        <p className='text-[30px] font-bold text-center dark:bg-gradient-to-r from-[#3927A7] to-[#B70707] dark:bg-clip-text dark:text-transparent'>PROJECTS</p>
        <div className='flex justify-center'>
            <div className='grid grid-cols-1 items-center content-center lg:grid-cols-2 gap-20 md:p-20'>
                {projects.map((project,index)=>{
                    return (
                        <a
                            key={project.title + index}
                            href={project.github_link || undefined}
                            target={project.github_link ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className={`flex flex-col items-center w-[330px] md:w-[380px]
                              border rounded-2xl border-none shadow-2xl shadow-blue-900
                              ${project.github_link ? 'cursor-pointer hover:-translate-y-20' : 'cursor-not-allowed opacity-70'}
                              transition-transform duration-300`}
                          >
                            <SwiperTest images={project.images}/>
                             <p className='text-lg text-center p-4 font-bold'>{project.title}</p>
                             <p className='text-lg text-center p-4 dark:text-gray-400'>{project.description}</p>
                             <div className='flex flex-wrap p-8 gap-4'>                  
                             </div>
                        </a>
                    )
                })}
            </div>

        </div>
    </section>
  )
}

export default Projects