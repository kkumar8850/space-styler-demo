import React from 'react'
import Image from 'next/image'
import SofaImage from '@/public/Images/sofaImage.jpg'
import BedImage from '@/public/Images/bedImage.jpg'

function Specialization() {
  return (
        <div className=' mb-[40px]'>
            <div className='container mt-4 py-[40px]'>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
                    <div>
                    <p className='text-secondary text-3xl font-semibold mb-10'>Our Specialization</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <a href="/furniture" className='border-2 border-secondary text-secondary px-5 py-2 mt-5 inline-block hover:bg-secondary hover:text-white'>Read more</a>
                    </div>
                    <a href='/furniture/bed' className='h-[100%]'>
                        <div 
                            className='bg-[#eaeaea] text-center p-[20px] rounded-sm h-[100%]'>
                            <div
                                className='h-[50%] bg-primary flex items-center justify-center relative'
                            >
                               <Image
                                    src={BedImage}
                                    alt="bed"
                                    fill
                                />
                            </div>
                            <p className='text-[#333] text-2xl font-bold my-4'>Modular Kitchen</p>
                            <p className='text-[#444] text-sm'>industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                        </div>
                        {/* <div className='text-center'>
                            <div className='h-[420px] lg:h-[330px] w-full lg:w-[50%] border-secondary border-2 mx-auto rounded-full pt-[30px]'>
                                <Image
                                    src={BedImage}
                                    alt="bed"
                                    height={500}
                                    width={500}
                                />
                            </div>
                            <h1 className='text-3xl text-secondary mt-[30px]'>Bed</h1>
                        </div> */}
                    </a>
                    <a href="/furniture/sofa">
                    <div 
                            className='bg-[#eaeaea] text-center p-[20px] rounded-sm h-[100%]'>
                            <div
                                className='h-[50%] bg-primary flex items-center justify-center relative'
                            >
                               <Image
                                    src={SofaImage}
                                    alt="bed"
                                    fill
                                />
                            </div>
                            <p className='text-[#333] text-2xl font-bold my-4'>Furniture</p>
                            <p className='text-[#444] text-sm'>industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                        </div>
                        {/* <div className='text-center'>
                            <div className='h-[420px] lg:h-[330px] w-full lg:w-[50%] bg-primary mx-auto rounded-full pt-[30px]'>
                                <Image
                                    src={SofaImage}
                                    alt="bed"
                                    height={500}
                                    width={500}
                                />
                            </div>
                            <h1 className='text-3xl text-secondary mt-[30px]'>Sofa</h1>
                        </div> */}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Specialization