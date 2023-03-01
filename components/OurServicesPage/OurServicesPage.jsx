import React from 'react'
import Image from 'next/image'
import Image2 from '../../public/Images/2.jpg'

const arr = [
    {
        id : 0,
        heading : 'Renovation',
        subHeading : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i'
    },
    {
        id : 1,
        heading : 'Space Planning',
        subHeading : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i'
    },
    {
        id : 2,
        heading : '2D-3D Design',
        subHeading : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i'
    },
    {
        id : 3,
        heading : 'Renovation',
        subHeading : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i'
    },
    {
        id : 4,
        heading : 'Construction',
        subHeading : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i'
    },
    {
        id : 5,
        heading : 'Project Management',
        subHeading : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i'
    },
    {
        id : 6,
        heading : 'Turnkey (Design + Execution)',
        subHeading : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i'
    },
]

function OurServicesPage() {
  return (
    <div className='container py-10'>
        <div className='grid lg:grid-cols-3 xs:grid-cols-1 gap-6'>
            {
                arr.map(i=> (
                    <div className='bg-[#D9D9D9] text-center p-[20px] relative pt-[100px] rounded-sm mt-[100px]' key={i.id}>
                        <div className='h-[150px] w-[150px] absolute top-[-70px] rounded-full overflow-hidden left-[0] right-[0] mx-[auto]'>
                            <Image
                                src={Image2}
                                alt="second"
                                fill
                            />
                        </div>
                        <p className='text-primary text-2xl font-bold mb-4'>{i.heading}</p>
                        <p className='text-primary text-sm'>{i.subHeading}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default OurServicesPage