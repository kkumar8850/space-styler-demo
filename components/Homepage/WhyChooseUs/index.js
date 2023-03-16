import React from 'react'
import {FaStudiovinari, FaRegLightbulb, FaDollarSign,FaPeopleCarry, FaPeopleArrows} from 'react-icons/fa'

const contentArray = [
    {
        id : 0,
        name : 'Creative Design', 
        text : 'Free Download Furni for furniture ecommerce website template. You can also use this for interior design websites. Visit Untree.co now!',
        icon : <FaStudiovinari color="#fff" fontSize={60} />
    },
    {
        id : 1,
        name : 'Fast Execution', 
        text : 'Free Download Furni for furniture ecommerce website template. You can also use this for interior design websites. Visit Untree.co now!',
        icon : <FaRegLightbulb color="#fff" fontSize={80}/>
    },
    {
        id : 2,
        name : 'We never exceed your budge', 
        text : 'Free Download Furni for furniture ecommerce website template. You can also use this for interior design websites. Visit Untree.co now!',
        icon : <FaDollarSign color="#fff" fontSize={80}/>
    },
    {
        id : 3,
        name : 'Inhouse design and execution team', 
        text : 'Free Download Furni for furniture ecommerce website template. You can also use this for interior design websites. Visit Untree.co now!',
        icon : <FaPeopleCarry color="#fff" fontSize={80}/>
    },
    {
        id : 4,
        name : 'Start to finish we handle it all', 
        text : 'Free Download Furni for furniture ecommerce website template. You can also use this for interior design websites. Visit Untree.co now!',
        icon : <FaPeopleArrows color="#fff" fontSize={80}/>
    },
]

function WhyChooseUs() {
  return (
    <div className='container py-[50px]'>
        <p className='text-secondary text-3xl font-semibold text-center mb-2'>Why Choose Us</p>
        <p className='mb-6 text-center text-xl'>Free Download Furni for furniture ecommerce website template. You can also use this for interior design websites. Visit Untree.co now!</p>
        <div className='grid lg:grid-cols-3 xs:grid-cols-1 gap-6'>
            {
                contentArray.map(i=> (
                    <div 
                        className='bg-[#eaeaea] text-center p-[20px] rounded-sm ' key={i.id}>
                        <div 
                            className='h-[200px] mb-4 flex justify-center items-center bg-secondary'
                        >
                            {i.icon}
                        </div>
                        <p className='text-[#333] text-2xl font-bold mb-4'>{i.name}</p>
                        <p className='text-[#444] text-sm'>{i.text}</p>
                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default WhyChooseUs