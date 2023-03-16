import React from 'react'
import Image from 'next/image'
import SofaImage from '@/public/Images/sofa.png'
import BedImage from '@/public/Images/bed.png'

function Specialization() {
  return (
        <div className='bg-secondary mb-[40px]'>
            <div className='container mt-4 py-[40px]'>
                <p className='text-primary text-3xl font-semibold text-center mb-2'>Our Specialization</p>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                    <a href='/furniture/bed'>
                        <div className='text-center'>
                            <div className='h-[420px] lg:h-[330px] w-full lg:w-[50%] bg-primary mx-auto rounded-full pt-[30px]'>
                                <Image
                                    src={BedImage}
                                    alt="bed"
                                    height={500}
                                    width={500}
                                />
                            </div>
                            <h1 className='text-3xl text-primary mt-[30px]'>Bed</h1>
                        </div>
                    </a>
                    <a href="/furniture/sofa">
                        <div className='text-center'>
                            <div className='h-[420px] lg:h-[330px] w-full lg:w-[50%] bg-primary mx-auto rounded-full pt-[30px]'>
                                <Image
                                    src={SofaImage}
                                    alt="bed"
                                    height={500}
                                    width={500}
                                />
                            </div>
                            <h1 className='text-3xl text-primary mt-[30px]'>Sofa</h1>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Specialization