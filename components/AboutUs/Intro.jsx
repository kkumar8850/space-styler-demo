import React from 'react'
import Image from 'next/image'
import IntroTop from '../../public/Images/intro.jpg'
import ProjectImage from '../../public/Images/project.jpg'
import styles from '../../styles/aboutus.module.css'

function Intro() {
  return (
    <section>
      <div 
        className='h-[500px]' 
        style={{
        backgroundImage : `url(/Images/1.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center',
        backgroundSize : 'cover'
      }}
    >
        <div>
            <div className='h-[500px] bg-[rgba(0,0,0,0.5)] container flex items-center justify-center'>
              <div className='text-center flex items-center justify-center'>
                <ul className='m-0 p-0'>
                  <li className='inline-block hover:text-secondary'>
                    <a href="/">Home - </a>
                  </li>
                  <li className='inline-block'> About</li>
                </ul>
              </div>
            </div>
        </div>
    </div>
      <div className='container'>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 pt-8'>
          <div>
              <p className='text-left text-secondary text-3xl font-semibold lg:mb-[30px] xs:mb-[20px] uppercase border-t-4 pt-4 inline-block'>Who we are </p>
              <p className='text-3xl'>Get your place the best makeover possible.</p>
          </div>
          <div>
            <p 
              className='text-lg mb-[20px] lg:w-[90%] xs:w-full text-[#000] dark:text-[#ccc]'>
                <span className='text-xl text-secondary font-bold mr-2'>Space styler</span>
                 is one of the leading interior design company well known for its ability to create calm balanced refined interiors. 
            </p>
            <p 
              className='text-lg mb-[20px] text-[#000] dark:text-[#ccc]'>
                Weather it’s a residential or commercial project, getting to know clients, understanding their needs and preferences, winning their trust and collaborating with them is at the heart of space styler work.
            </p>
            <p 
              className='text-lg mb-[20px] lg:w-[90%] xs:w-full text-[#000] dark:text-[#ccc]'>
                Whilst our work delivers a modern interior design vibe we don’t forget to pay attention to functionality and comfort.
            </p>
            <p 
              className='text-lg mb-[20px] text-[#000] dark:text-[#ccc]'>
                We take the pride on our intelligent approach to interior space planning and designs. Our Aim is to create spaces that are worthy of today and embraced by tomorrow.
            </p>
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
      <div
        className='h-[500px]' 
        style={{
        backgroundImage : `url(/Images/2.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center',
        backgroundSize : 'cover'
      }}
      >
        <div className='container'>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 pt-8'>
            <div className='bg-[rgba(0,0,0,0.5)] p-10'>
              <h1 className='text-3xl'>Our Experties</h1>
              <h2 className='text-5xl capitalize'>Cast your impression with a Design</h2>

              <div className='mb-6'>
                <h1>IDEA & CONCEPT</h1>
                <div className='bg-white w-full h-[5px]'>
                  <div className='bg-secondary w-[90%] h-[inherit]'></div>
                </div>
              </div>
              <div className='mb-6'>
                <h1>ACCURACY</h1>
                <div className='bg-white w-full h-[5px]'>
                  <div className='bg-secondary w-[75%] h-[inherit]'></div>
                </div>
              </div>
              <div className='mb-6'>
                <h1>EXECUTION</h1>
                <div className='bg-white w-full h-[5px]'>
                  <div className='bg-secondary w-[84%] h-[inherit]'></div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro