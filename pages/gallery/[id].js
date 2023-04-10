import Header from '@/components/Header/Header'
import React from 'react'
import Image1 from '@/public/Images/bed-images/image1.jpg'
import Image2 from '@/public/Images/bed-images/image2.jpeg'
import Image3 from '@/public/Images/bed-images/image3.jpeg'
import Image4 from '@/public/Images/bed-images/image4.jpeg'
import Image5 from '@/public/Images/bed-images/image5.jpeg'
import Image6 from '@/public/Images/bed-images/image6.jpeg'
import Image7 from '@/public/Images/bed-images/image7.jpg'
import Image8 from '@/public/Images/bed-images/image8.jpg'
import Image from 'next/image'

const arr = [
    {
        id : 0,
        name : 'image1',
        img : Image1
    },
    {
        id : 1,
        name : 'image1',
        img : Image2
    },
    {
        id : 2,
        name : 'image1',
        img : Image3
    },
    {
        id : 3,
        name : 'image1',
        img : Image4
    },
    {
        id : 4,
        name : 'image1',
        img : Image5
    },
    {
        id : 5,
        name : 'image1',
        img : Image6
    },
    {
        id : 6,
        name : 'image1',
        img : Image7
    },
    {
        id : 7,
        name : 'image1',
        img : Image8
    },
]

function id() {
  return (
    <div>
        <Header />
        <div 
            className='h-[300px])'
            style={{
                backgroundImage : `url(/Images/1.jpg)`,
                backgroundRepeat : 'no-repeat',
                backgroundSize : 'cover',
                backgroundPosition : 'center'
            }}
            >
            <div 
                className='container h-[300px] relative bg-[rgba(0,0,0,0.6)]'>
                <div className='absolute bottom-[-30px]'>
                    <div className='h-[200px] w-[100%] flex'>
                        <Image
                            src={arr[0].img}
                            alt="test"
                            height={200}
                            width={200}
                            className="rounded-full"
                            />
                        <div>
                            <h1 className='text-3xl ml-[30px] font-medium'>Decor in west delhi</h1>
                            <p className='text-xl ml-[30px] mt-4'> 
Every interiors project and every client is unique so our approach can be flexible to suit your needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container mt-[60px]'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-10 mb-10'>
                {
                    arr.map(a=> (
                        <div
                            className='h-[300px] relative w-[100%]'
                            key={a.id}
                        >
                            <Image
                                key={a.id}
                                src={a.img}
                                alt={a.name}
                                fill
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default id