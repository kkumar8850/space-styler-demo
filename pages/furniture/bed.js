import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Header from '@/components/Header/Header'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

function bed() {
  return (
    <div>
        <Head>
            <title>Bed | Furniture</title>
            <meta name="description" content="Welcome to our Bed Collection, where comfort meets style for a restful and rejuvenating sleep experience. Explore a curated selection of meticulously crafted beds that blend exquisite design, superior craftsmanship, and exceptional comfort to create the perfect centerpiece for your bedroom sanctuary." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="keywords" content="Bed collection, Comfort and style, Restful sleep experience, Exquisite design, Exceptional comfort, Contemporary beds, Modern designs, Durability and support, Sleek platform beds, Statement of style, Elegance in the bedroom, Cozy haven of tranquility" />
            <meta name="author" content="Spacestyler" />
            <meta property="og:title" content="Space Styler | Transforming Spaces In Style" />
            <meta property="og:description" content="Welcome to our Bed Collection, where comfort meets style for a restful and rejuvenating sleep experience. Explore a curated selection of meticulously crafted beds that blend exquisite design, superior craftsmanship, and exceptional comfort to create the perfect centerpiece for your bedroom sanctuary." /> 
            <meta property="og:url" content="http://www.spacestyler.in" />
            <meta property="og:type" content="website" />
            <meta name="robots" content="index, follow" />
        </Head>
        <Header />
        <div>
            <div 
                className='h-[400px])'
                style={{
                    backgroundImage : `url(/Images/bed_123.jpg)`,
                    backgroundRepeat : 'no-repeat',
                    backgroundSize : 'cover',
                    backgroundPosition : 'center'
                }}
                >
                <div 
                    className='container h-[400px] relative bg-[rgba(0,0,0,0.6)]'>
                    
                        <div
                        className='absolute bottom-[-30px]'>
                        <div className='h-[200px] w-[100%] flex'>
                            <AnimatePresence>
                            <motion.div
                                initial={{opacity : 0, y : 15}}
                                animate={{opacity : 1, y : 0}}
                                exit={{opacity : 0, y : 15}}
                                transition={{ delay : 0.25}}
                                className='h-[200px] flex'
                            >
                                <Image
                                    src={`/Images/bed-images/image1.jpg`}
                                    alt="test"
                                    height={200}
                                    width={200}
                                    className="rounded-full"
                                    />
                            </motion.div>
                                </AnimatePresence>
                            <div>
                                <h1 className='text-3xl ml-[30px] font-medium'>Bed</h1>
                                {/* <p className='text-xl ml-[30px] mt-4'> 
    Every interiors project and every client is unique so our approach can be flexible to suit your needs.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-[60px]'>
                <motion.div
                    initial={{opacity : 0, y : -150}}
                    animate={{opacity : 1, y : 0}}
                    exit={{opacity : 0, y : -150}}
                    transition={{ delay : 0.25}}
                    >      
                    <Link href="/furniture" className='border-secondary border-2 rounded-full px-8 py-2'>Back</Link>
                </motion.div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-10 mb-10'>
                    <AnimatePresence>
                        {
                            [0,1,2,3,4,5,6,7].map((a, index)=> (
                                <motion.div
                                    initial={{opacity : 0, y : 15}}
                                    animate={{opacity : 1, y : 0}}
                                    exit={{opacity : 0, y : 15}}
                                    transition={{ delay : 0.25}}
                                    className='h-[300px] relative w-[100%]'
                                    key={a}
                                >
                                    <Image
                                        src={`/Images/bed-images/image${index + 1}.jpg`}
                                        alt={`images-${a}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw,
                                                (max-width: 1200px) 50vw,
                                                33vw"
                                    />
                                </motion.div>
                            ))
                        }
                    </AnimatePresence>
                </div>
            </div>
        </div>
    </div>
  )
}

export default bed