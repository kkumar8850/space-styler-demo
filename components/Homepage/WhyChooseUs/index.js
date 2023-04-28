import Image from 'next/image'
import React from 'react'
import Image1 from '@/public/Images/sofaImage.jpg'
import { FaRegLightbulb, FaDollarSign,FaPeopleCarry, FaPeopleArrows} from 'react-icons/fa'

const contentArray = [
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

const anotherArray = [
    {
        id : 5,
        img : Image1,
        name : 'Well-considered design',
        text : 'Extensive combined knowledge and experience of our team ensure we have the nous to create innovative and stylish solutions for your home, workplace or holiday rental. Whatever the project, our job is to find the right solution.'
    },
    {
        id : 6,
        img : Image1,
        name : 'We create for you',
        text : 'We listen to our clients and create a personalised design solution that is tailored to you. We want you to love the end result and will work with you to ensure you are more than happy with the outcome.'
    },
    {
        id : 7,
        img : Image1,
        name : 'Leave the details to us',
        text : 'It all comes down to the details and our team are there to ensure all the finer points are taken care of, so you don’t need to worry about them, giving you peace of mind.'
    },
    // {
    //     id : 8,
    //     img : Image1,
    //     name : 'Seamless solution',
    //     text : 'From the beginning concept to the final completion, our creative team will look after your project from start to finish ensuring a seamless process of design, construction and decoration.'
    // },
    {
        id : 8,
        img : Image1,
        name : 'Value for your investment',
        text : 'By working with an experienced Interior Designer, you have the benefit of our industry knowledge, as well as that of our preferred and trusted suppliers and trades, helping you to avoid financial disappointment and giving you a finished project that will delight you.'
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
                        <p className='text-[#fff] text-xl mb-4'>{i.name}</p>
                    </div>
                ))
            }
        </div>
        <h1 className='text-center text-3xl my-8'>Apart from above points our key features are : </h1>
        <div className="grid lg:grid-cols-4 xs:grid-cols-1 gap-4">
            {   
                anotherArray.map(i=> (
                    <div 
                        className='bg-[#eaeaea] text-center p-[20px] rounded-sm ' key={i.id}>
                        <div 
                        
                        >
                            <Image
                                src={i.img}
                                alt="second"
                                className='w-[100%] h-[150px] mb-4'
                            />
                        </div>
                        <p className='text-[#333] text-xl font-semibold mb-4'>{i.name}</p>
                        <p className='text-[#444] text-sm'>{i.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default WhyChooseUs