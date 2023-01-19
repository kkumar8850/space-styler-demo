import React from 'react'
import Image from 'next/image'
import Img from '../../../public/Images/why-choose-us.jpg'
import {FaStudiovinari, FaRegLightbulb, FaDollarSign,FaPeopleCarry, FaPeopleArrows} from 'react-icons/fa'

function WhyChooseUs() {
  return (
    <div className='container py-[50px]'>
        <div className='grid lg:grid-cols-2 gap-8 xs:grid-col-1'>
            <div className=' mx-auto'>
              <p className='text-secondary text-2xl text-left mb-2'>Why Choose Us</p>
              <p className='mb-6'>Free Download Furni for furniture ecommerce website template. You can also use this for interior design websites. Visit Untree.co now!</p>
                <div className='grid lg:grid-cols-2 gap-8 xs:grid-col-1'>
                    <div>
                        <div className='bg-secondary h-[50px] w-[50px] rounded-sm flex items-center justify-center'>
                            <FaStudiovinari size={30}/>
                        </div>
                        <p className='text-xl my-2'>Creative Design</p>
                        <p className='font-light text-sm'>
                        Free Download Furni for furniture ecommerce website template. You can also use this for interior design websites. Visit Untree.co now!
                        </p>
                    </div>
                    <div>
                        <div className='bg-secondary h-[50px] w-[50px] rounded-sm flex items-center justify-center'>
                            <FaRegLightbulb size={30}/>
                        </div>
                        <p className='text-xl my-2'>Fast Execution</p>
                        <p className='font-light text-sm'>
                        Free Download Furni for furniture ecommerce website template. You can also use this for interior design websites. Visit Untree.co now!
                        </p>
                    </div>
                    <div>
                        <div className='bg-secondary h-[50px] w-[50px] rounded-sm flex items-center justify-center'>
                            <FaDollarSign size={30}/>
                        </div>
                        <p className='text-xl my-2'>We never exceed your budget</p>
                        <p className='font-light text-sm'>
                        Free Download Furni for furniture ecommerce website template. You can also use this for interior design websites. Visit Untree.co now!
                        </p>
                    </div>
                    <div>
                        <div className='bg-secondary h-[50px] w-[50px] rounded-sm flex items-center justify-center'>
                            <FaPeopleArrows size={30}/>
                        </div>
                        <p className='text-xl my-2'>Inhouse design and execution team</p>
                        <p className='font-light text-sm'>
                        Free Download Furni for furniture ecommerce website template. You can also use this for interior design websites. Visit Untree.co now!
                        </p>
                    </div>
                    <div>
                        <div className='bg-secondary h-[50px] w-[50px] rounded-sm flex items-center justify-center'>
                            <FaPeopleCarry size={30}/>
                        </div>
                        <p className='text-xl my-2'>Start to finish we handle it all</p>
                        <p className='font-light text-sm'>
                        Free Download Furni for furniture ecommerce website template. You can also use this for interior design websites. Visit Untree.co now!
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className='w-[90%] mx-auto mt-10 shadow-inner rounded-sm overflow-hidden shadow-secondary'>
                    <Image
                        alt="design"
                        src={Img}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs