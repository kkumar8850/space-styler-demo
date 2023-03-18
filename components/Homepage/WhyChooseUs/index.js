import React from 'react'
import {FaStudiovinari, FaRegLightbulb, FaDollarSign,FaPeopleCarry, FaPeopleArrows} from 'react-icons/fa'

const contentArray = [
    // {
    //     id : 0,
    //     name : 'Creative Design', 
    //     text : 'Free Download Furni for furniture ecommerce website template. You can also use this for interior design websites. Visit Untree.co now!',
    //     icon : <FaStudiovinari color="#22A39F" fontSize={40} />
    // },
    {
        id : 1,
        name : 'Fast Execution', 
        icon : <FaRegLightbulb color="#22A39F" fontSize={40}/>
    },
    {
        id : 2,
        name : 'We never exceed your budget', 
        icon : <FaDollarSign color="#22A39F" fontSize={40}/>
    },
    {
        id : 3,
        name : 'Inhouse design and execution team', 
        icon : <FaPeopleCarry color="#22A39F" fontSize={40}/>
    },
    {
        id : 4,
        name : 'Start to finish we handle it all', 
        icon : <FaPeopleArrows color="#22A39F" fontSize={40}/>
    },
]

function WhyChooseUs() {
  return (
    <div className='container py-[50px]'>
        <p className='text-secondary text-5xl font-medium text-left mb-2'>Why Choose Us</p>
        <p className='mb-6 text-left text-xl w-[50%]'>Free Download Furni for furniture ecommerce website template. You can also use this for interior design websites. Visit Untree.co now!</p>
        <div className='grid lg:grid-cols-4 xs:grid-cols-1 gap-6'>
            {
                contentArray.map(i=> (
                    <div 
                        className='p-[20px] rounded-sm ' key={i.id}>
                        <div 
                            className='h-[100px] w-[100px] mb-4 flex justify-center items-center border-2 border-secondary rounded-full'
                        >
                            {i.icon}
                        </div>
                        <p className='text-[#fff] text-2xl font-bold mb-4'>{i.name}</p>
                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default WhyChooseUs