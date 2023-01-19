import React from 'react'
import Carousel from 'nuka-carousel';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import Image1 from '../../public/Images/1.jpg'
import Image from 'next/image';

function OurServices() {
  return (
    <div className='container text-center'>
        <p className='text-secondary text-2xl my-[30px]'>Our Services</p>
        <div className='w-[90%] mx-auto'>
            <Carousel 
                wrapAround
                slide
                defaultControlsConfig={{
                    pagingDotsStyle : {
                        display : 'none'
                    }
                }}
                renderCenterLeftControls={({previousSlide })=> (
                    <button onClick={previousSlide } className="ml-[-80px] border-[#fff] border-solid p-[10px] rounded-full border-2">
                        <FaAngleLeft />
                    </button>
                  )}
                  renderCenterRightControls={({nextSlide})=> (
                    <button onClick={nextSlide} className="mr-[-80px] border-[#fff] border-solid p-[10px] rounded-full border-2">
                        <FaAngleRight />
                    </button>
                  )}
                >
                <div className='grid lg:grid-cols-3 gap-8 sm:grid-col-3 xs:grid-col-3'>
                    <div>
                        <div className='h-[300px] border-secondary text-center rounded-sm border-2'>
                            <Image
                                src={Image1}
                                alt="service"
                            />
                        </div>
                            <p className='text-center text-2xl'>Service 1</p>
                    </div>
                    <div>
                        <div className='h-[300px] border-secondary text-center rounded-sm border-2'>
                            <div>
                            test 1
                            </div>
                        </div>
                            <p className='text-center text-2xl'>Service 1</p>
                    </div>
                    <div>
                        <div className='h-[300px] border-secondary text-center rounded-sm border-2'>
                            <div>
                            test 1
                            </div>
                        </div>
                            <p className='text-center text-2xl'>Service 1</p>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 gap-8 xs:grid-col-1'>
                    <div className='h-[300px] border-secondary text-center rounded-sm border-2'>
                        test 1
                    </div>
                    <div className='h-[300px] border-secondary text-center rounded-sm border-2'>
                        test 2
                    </div>
                    <div className='h-[300px] border-secondary text-center rounded-sm border-2'>
                        test 2
                    </div>
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default OurServices