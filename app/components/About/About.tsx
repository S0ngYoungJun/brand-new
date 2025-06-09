import { ABOUT_SECTION } from '@/app/data/portfolio'
import React from 'react'

const About = () => {
  return (
    <section id="about" className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[90vh] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center'>
            <div className='animate__animated animate__fadeIn animate__delay-1s'>
            <p className='font-bold text-center text-[40px] md:text-5xl lg:text-6xl leading-snug tracking-wide dark:bg-gradient-to-r from-[#3927A7] to-[#B70707] dark:bg-clip-text dark:text-transparent'>
                {ABOUT_SECTION.displayText}
            </p>
            </div>
            <div className='animate__animated animate__fadeIn'>
            <p className='text-[30px] mt-10 text-center mb-5'>안녕하세요 저는 <span className='items-center font-bold dark:bg-gradient-to-r from-[#1E2A94] to-[#999999] dark:bg-clip-text dark:text-transparent'>{ABOUT_SECTION.name} </span> 입니다.{ABOUT_SECTION.greeting}</p>
            {/* <p className='text-[30px] text-center mb-10'> {ABOUT_SECTION.title}.</p> */}
            </div>
            <div className='content-center items-center animate__animated animate__fadeIn animate__delay-3s'>
            <p className='text-[20px] text-center  px-2 mb-10 leading-loose dark:bg-gradient-to-r from-[#F8F1F1] to-[#404146] dark:bg-clip-text dark:text-transparent'>{ABOUT_SECTION.description}</p>
            </div>
        </div>

    </section>
  )
}

export default About