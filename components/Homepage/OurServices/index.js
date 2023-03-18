import React from 'react'
import Image from 'next/image'
import renovationImage from '../../../public/Images/renovation.jpeg'
import spacePlanningImage from '../../../public/Images/spacePlanning.jpeg'
import DesignImage from '../../../public/Images/2d_3d_design.jpg'
import constructionImage from '../../../public/Images/construction.jpeg'
import projectManagementImage from '../../../public/Images/projectManagement.jpeg'
import turnkeyImage from '../../../public/Images/turnkey.jpeg'

const arr = [
  
  {
      id : 0,
      heading : 'Space Planning',
      img : spacePlanningImage,
      subHeading : 'While our 2D designer draft, draw and create technical drawings, our 3D designer gives the real feel highlighting every aspect of you space.'
  },
  {
      id : 1,
      heading : '2D-3D Design',
      img : DesignImage,
      subHeading : 'Our home renovation means working with some of what you have existing and completely transforming it into home you want. Our renovation ideas are implemented in a way that it upgrades the home functions, improves home value, provides comfort and enjoyment.'
  },
  {
        id : 2,
        heading : 'Renovation',
        img : renovationImage,
        subHeading : 'Our space planning ensures that our designs adhere to the room’s purpose, functional requirements and layout. We revitalize your property’s character by optimizing the use of available space and creating new spaces.'
    },
  {
      id : 4,
      heading : 'Construction',
      img : constructionImage,
      subHeading : 'Our interior construction transforms old developed buildings into modern, comfortable, livable space. This process involves extensive design work and permissible construction to make sure the building’s design is tailored to the client’s needs. '
  },
  {
      id : 5,
      heading : 'Project Management',
      img : projectManagementImage,
      subHeading : 'Our project management team works responsible for ensuring that every element of the project, from the start to finish, is planned for, costed, communicated to property owner, reviewed, approved and delivered safely within the time frame and budget.'
  },
  {
      id : 6,
      heading : 'Turnkey (Design + Execution)',
      img : turnkeyImage,
      subHeading : 'Our complete end – to - end interior design model combines the interior design and interior construction process under one umbrella. Our turnkey projects offer you design and build service that takes care of your every requirement, from concept planning to you moving into your new home.'
  },
]

function OurServices() {
  return (
    // <div className='container py-[100px]'>
    //     <div className='grid lg:grid-cols-2 gap-8 sm:grid-col-1'>
    //       <p className='text-secondary text-2xl xl:hidden lg:hidden mb-4 sm:block xs:block text-center'>Our Services</p>
            
    //         <div> 
    //             <p className='hidden text-secondary text-2xl mb-4 lg:block xl:block md:block'>Our Services</p>
    //             <p className='text-5xl font-semibold mb-2 leading-14'>We offer a wide range of Services and Provide Complete Client Satisfaction.</p>
                
    //         </div>
    //     </div>
    // </div>
    <div className='container py-10'>
      <p className=' text-secondary font-semibold text-3xl mb-4 text-center'>Our Services</p>
      <p className='text-xl text-center mb-6 leading-14'>We offer a wide range of Services and Provide Complete Client Satisfaction.</p>
        <div className='grid lg:grid-cols-3 xs:grid-cols-1 gap-6'>
            {
                arr.map(i=> (
                    <div 
                        className='bg-[#eaeaea] text-center p-[20px] rounded-sm ' key={i.id}>
                        <div 
                        
                        >
                            <Image
                                src={i.img}
                                alt="second"
                                className='w-[100%] h-[300px] mb-4'
                            />
                        </div>
                        <p className='text-[#333] text-2xl font-bold mb-4'>{i.heading}</p>
                        <p className='text-[#444] text-sm'>{i.subHeading}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default OurServices