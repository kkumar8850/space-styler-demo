import React from 'react'
import Header from '@/components/Header/Header'
import Image1 from '@/public/Images/bed-images/image1.jpg'
import Image2 from '@/public/Images/sofa-images/image1.jpg'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

function index() {
  return (
        <div>
            <Header />
            <div 
                className='h-[500px] relative'
                style={{
                    backgroundImage : `url(/Images/furniture.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition:'center',
                    backgroundSize : 'cover'
                }}
            >
            <div 
                className='container h-[500px] bg-[rgba(0,0,0,0.5)] flex items-center justify-center'
                > 
                <div>
                    <AnimatePresence>
                        <motion.h1 
                            className='text-5xl font-semibold'
                            initial={{opacity : 0, x : -150}}
                            animate={{opacity : 1, x : 0}}
                            exit={{opacity : 0, x : -150}}
                            transition={{ delay : 0.25}}
                            >
                                Discover the best furniture
                        </motion.h1>
                        <motion.p 
                            className='text-2xl mt-4'
                            initial={{opacity : 0, x : 150}}
                            animate={{opacity : 1, x : 0}}
                            exit={{opacity : 0, x : 150}}
                            transition={{ delay : 0.25}}
                            >
                                The best choice for your comfort and everyone's style.
                        </motion.p>
                    </AnimatePresence>
                </div>
            </div>
        </div>
            <AnimatePresence>
                <div className='container my-8'>
                    <div className='grid lg:grid-cols-6 sm:grid-cols-1 gap-4'>
                        <motion.div 
                            className='lg:col-start-2 lg:col-end-4'
                            initial={{opacity : 0, x : -150}}
                            animate={{opacity : 1, x : 0}}
                            exit={{opacity : 0, x : -150}}
                            transition={{ delay : 0.25}}
                            >
                            <a href={`/furniture/bed`} className="hover:mt-[-20px] transition-[0.5s]">
                                <div 
                                    className='bg-[#eaeaea] text-center p-[20px] rounded-sm ' >
                                    <div>
                                        <Image
                                            src={Image1}
                                            alt="second"
                                            className='w-[100%] h-[300px] mb-4'
                                        />
                                    </div>
                                    <p className='text-[#333] text-2xl font-bold mb-4'>Bed</p>
                                </div>
                            </a>
                        </motion.div>
                        <motion.div 
                            className='lg:col-start-4 lg:col-end-6'
                            initial={{opacity : 0, x : 150}}
                            animate={{opacity : 1, x : 0}}
                            exit={{opacity : 0, x : 150}}
                            transition={{ delay : 0.25}}
                            >
                            <a href={`/furniture/sofa`} className="hover:mt-[-20px] transition-[0.5s]">
                                <div 
                                    className='bg-[#eaeaea] text-center p-[20px] rounded-sm ' >
                                    <div>
                                        <Image
                                            src={Image2}
                                            alt="second"
                                            className='w-[100%] h-[300px] mb-4'
                                        />
                                    </div>
                                    <p className='text-[#333] text-2xl font-bold mb-4'>Sofa</p>
                                </div>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </AnimatePresence>
    </div>
  )
}

export default index