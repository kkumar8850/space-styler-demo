import React from 'react'
import Image from 'next/image'
import IntroTop from '../../public/Images/intro.jpg'
import ProjectImage from '../../public/Images/project.jpg'
import styles from '../../styles/aboutus.module.css'

function Intro() {
  return (
    <div className='container'>
      <p className='text-center text-secondary text-3xl font-semibold lg:mb-[30px] xs:mb-[20px]'>Who we are ?</p>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
        <div className='w-full sm:w-[90%] block lg:hidden sm:block'>
          <Image
            src={IntroTop}
            alt="intro-image"
            className='rounded-lg'
            />
        </div>
        <div>
          <p className='text-lg mb-[20px] lg:w-[90%] xs:w-full text-[#000] dark:text-[#ccc]'><span className='text-xl text-secondary font-bold'>Space styler</span> is one of the leading interior design company well known for its ability to create calm balanced refined interiors. 
          </p>
          <p className='text-lg mb-[20px] text-[#000] dark:text-[#ccc]'>Weather it’s a residential or commercial project, getting to know clients, understanding their needs and preferences, winning their trust and collaborating with them is at the heart of space styler work.</p>
          <p className='text-lg mb-[20px] lg:w-[90%] xs:w-full text-[#000] dark:text-[#ccc]'>Whilst our work delivers a modern interior design vibe we don’t forget to pay attention to functionality and comfort.</p>
          <p className='text-lg mb-[20px] text-[#000] dark:text-[#ccc]'>We take the pride on our intelligent approach to interior space planning and designs. Our Aim is to create spaces that are worthy of today and embraced by tomorrow.</p>
        </div>
        <div className='w-full sm:w-[90%] hidden sm:hidden lg:block'>
          <Image
            src={IntroTop}
            alt="intro-image"
            className='rounded-lg'
            />
        </div>
      </div>
    <div className='my-[40px]'>
      <blockquote className={styles.blockquote}>
        <p>Central to everything we do is our close working relationship with our clients - We provide friendly guidance and a comprehensive design service to help bring their ideas to life.</p>
      </blockquote>
    </div>
    </div>
  )
}

export default Intro