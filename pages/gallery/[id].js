import Header from '@/components/Header/Header'
import React from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const arr = [
    {
        id : 0,
        name : 'image1',
    },
    {
        id : 1,
        name : 'image2',
    },
    {
        id : 2,
        name : 'image3',
    },
    {
        id : 3,
        name : 'image4',
    },
    {
        id : 4,
        name : 'image5',
    },
    {
        id : 5,
        name : 'image6',
    },
    {
        id : 6,
        name : 'image7',
    },
    {
        id : 7,
        name : 'image8',
    },
]

function id() {
    const router = useRouter()
    const { id } = router.query || 'Living Room'
  return (
    <div>
        <Header />
        {
            id && (
                <div>
                    <div 
                        className='h-[300px])'
                        style={{
                            backgroundImage : `url(/Images/${id}/image1.jpg)`,
                            backgroundRepeat : 'no-repeat',
                            backgroundSize : 'cover',
                            backgroundPosition : 'center'
                        }}
                        >
                        <div 
                            className='container h-[300px] relative bg-[rgba(0,0,0,0.6)]'>
                            
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
                                            src={`/Images/${id}/image1.jpg`}
                                            alt="test"
                                            height={200}
                                            width={200}
                                            className="rounded-full"
                                            />
                                    </motion.div>
                                        </AnimatePresence>
                                    <div>
                                        <h1 className='text-3xl ml-[30px] font-medium'>{id?.replaceAll('-', ' ')}</h1>
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
                            <Link href="/gallery" className='border-secondary border-2 rounded-full px-8 py-2'>Back to gallery</Link>
                        </motion.div>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-10 mb-10'>
                            <AnimatePresence>
                                {
                                    arr.filter(i=> id === 'Balcony-Terrace' ? i.id < 6 : i.id < 8).map((a, index)=> (
                                        <motion.div
                                            initial={{opacity : 0, y : 15}}
                                            animate={{opacity : 1, y : 0}}
                                            exit={{opacity : 0, y : 15}}
                                            transition={{ delay : 0.25}}
                                            className='h-[300px] relative w-[100%]'
                                            key={a.id}
                                        >
                                            <Image
                                                key={a.id}
                                                src={`/Images/${id}/image${index + 1}.jpg`}
                                                alt={a.name}
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
            )
        }
    </div>
  )
}

export default id