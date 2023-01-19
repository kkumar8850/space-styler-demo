import Image from 'next/image'
import React from 'react'
import User from '../../public/Images/u-1.jpg'
import User2 from '../../public/Images/u-2.jpg'

function Team() {
  return (
    <div className='container'>
        <p className='text-secondary text-center text-2xl py-[50px]'>Our leadership team</p>
        <div className='grid lg:grid-cols-3 gap-8 xs:grid-col-1 mb-[40px]'>
            <div className='hover:border-secondary hover:border-solid hover:border-2 border-2 border-[transparent]'>
                <div className='text-center'>
                    <div className='rounded-full h-[150px] w-[150px] border-2 border-secondary mx-auto overflow-hidden'>
                        <Image
                            alt="user"
                            src={User}
                        />
                    </div>
                    <p className='text-lg mt-2'>Jonathan Holmes</p>
                    <p className='text-sm py-2'>Founder & CEO</p>
                    <p className='text-sm'>Tech and design entrepreneur with previous businesses in digital, e-commerce and media</p>
                </div>
            </div>
            <div>
                <div className='text-center'>
                    <div className='rounded-full h-[150px] w-[150px] border-2 border-secondary mx-auto overflow-hidden'>
                        <Image
                            alt="user"
                            src={User2}
                        />
                    </div>
                    <p className='text-lg mt-2'>Aliah Da</p>
                    <p className='text-sm py-2'>Chief Creative Officer</p>
                    <p className='text-sm'>Tech and design entrepreneur with previous businesses in digital, e-commerce and media</p>
                </div>
            </div>
            <div>
                <div className='text-center'>
                    <div className='rounded-full h-[150px] w-[150px] border-2 border-secondary mx-auto overflow-hidden'>
                        <Image
                            alt="user"
                            src={User}
                        />
                    </div>
                    <p className='text-lg mt-2'>Aliah Da</p>
                    <p className='text-sm py-2'>Head of People</p>
                    <p className='text-sm'>Tech and design entrepreneur with previous businesses in digital, e-commerce and media</p>
                </div>
            </div>
            <div>
                <div className='text-center'>
                    <div className='rounded-full h-[150px] w-[150px] border-2 border-secondary mx-auto'>
                    <div className='rounded-full h-[150px] w-[150px] border-2 border-secondary mx-auto overflow-hidden'>
                        <Image
                            alt="user"
                            src={User2}
                        />
                    </div>
                    </div>
                    <p className='text-lg mt-2'>Carina</p>
                    <p className='text-sm py-2'>VP Sales & Partnerships</p>
                    <p className='text-sm'>Tech and design entrepreneur with previous businesses in digital, e-commerce and media</p>
                </div>
            </div>
            <div>
                <div className='text-center'>
                    <div className='rounded-full h-[150px] w-[150px] border-2 border-secondary mx-auto'>
                    <div className='rounded-full h-[150px] w-[150px] border-2 border-secondary mx-auto overflow-hidden'>
                        <Image
                            alt="user"
                            src={User}
                        />
                    </div>
                    </div>
                    <p className='text-lg mt-2'>Mike Massimi</p>
                    <p className='text-sm py-2'>Chief Customer Officer</p>
                    <p className='text-sm'>Tech and design entrepreneur with previous businesses in digital, e-commerce and media</p>
                </div>
            </div>
            <div>
                <div className='text-center'>
                    <div className='rounded-full h-[150px] w-[150px] border-2 border-secondary mx-auto'>
                    <div className='rounded-full h-[150px] w-[150px] border-2 border-secondary mx-auto overflow-hidden'>
                        <Image
                            alt="user"
                            src={User2}
                        />
                    </div>
                    </div>
                    <p className='text-lg mt-2'>Neil Turner</p>
                    <p className='text-sm py-2'>VP Sales & Partnerships</p>
                    <p className='text-sm'>Tech and design entrepreneur with previous businesses in digital, e-commerce and media</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team