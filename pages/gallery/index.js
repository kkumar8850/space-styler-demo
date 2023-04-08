import React from 'react'
import Header from '@/components/Header/Header'
import Image1 from '@/public/Images/1.jpg'
import Image2 from '@/public/Images/2.jpg'
import Image3 from '@/public/Images/3.jpg'
import Image4 from '@/public/Images/4.jpg'
import Image5 from '@/public/Images/5.jpg'
import Image6 from '@/public/Images/6.jpg'
import Image from 'next/image'
import Head from 'next/head'

const portfolio = [
  {
    id : 0,
    name : 'Living Room',
    img : Image1
  },
  {
    id : 1,
    name : 'Bed Room',
    img : Image2
  },
  {
    id : 2,
    name : 'Kids Room',
    img : Image3
  },
  {
    id : 3,
    name : 'Kitchen',
    img : Image4
  },
  {
    id : 4,
    name : 'Bath Room',
    img : Image5
  },
  {
    id : 5,
    name : 'Balcony/Terrace',
    img : Image6
  },
]

function gallery() {
  return (
    <div>
      <Head>
        <title>Our Showcase</title>
      </Head>
        <Header />
        <div className='container'>
          <h1 className='text-center uppercase my-5 text-3xl'>Awesome Portfolio</h1>
          <div className='grid lg:grid-cols-3 xs:grid-cols-1 gap-6 my-4'>
          {
            portfolio.map(i=> (
              <a href={`/gallery/${i.name}`} className="hover:mt-[-20px] transition-[0.5s]" key={i.id}>
                <div 
                    className='bg-[#eaeaea] text-center p-[20px] rounded-sm ' >
                    <div>
                        <Image
                            src={i.img}
                            alt="second"
                            className='w-[100%] h-[300px] mb-4'
                        />
                    </div>
                    <p className='text-[#333] text-2xl font-bold mb-4'>{i.name}</p>
                    {/* <p className='text-[#444] text-sm'>{i.subHeading}</p> */}
                </div>
              </a>
            ))
          }
          </div>
        </div>
    </div>
  )
}

export default gallery