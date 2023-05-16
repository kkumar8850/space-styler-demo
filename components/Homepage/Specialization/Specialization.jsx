import React from 'react'
import Image from 'next/image'
import SofaImage from '@/public/Images/sofaImage.jpg'
import ModularKitchen from '@/public/Images/u-shape.jpg'

function Specialization() {
  return (
        <div className=' mb-[40px]'>
            <div className='container mt-4 py-[40px]'>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
                    <div>
                    <p className='text-secondary text-3xl font-semibold mb-10'>More about us</p>
                    </div>
                    <a href='/modular-kitchen' className='h-[100%]'>
                        <div 
                            className='bg-[#eaeaea] text-center p-[20px] rounded-sm h-[100%] min-h-[400px]'>
                            <div
                                className='h-[50%] bg-primary flex items-center justify-center relative'
                            >
                               <Image
                                    src={ModularKitchen}
                                    alt="bed"
                                    fill
                                />
                            </div>
                            <p className='text-[#333] text-2xl font-bold my-4'>Modular Kitchen</p>
                            <p className='text-[#444] text-sm'>We offer a wide range of custom kitchen designs and solutions that are tailored to your unique needs and preferences.</p>
                        </div>
                    </a>
                    <a href="/furniture">
                    <div 
                            className='bg-[#eaeaea] text-center p-[20px] rounded-sm h-[100%] min-h-[400px]'>
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
                            <p className='text-[#444] text-sm'>
                            Elevate your living space with our furniture design services. Experience style, comfort and quality with Space Styler bespoke styling furnitures.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Specialization