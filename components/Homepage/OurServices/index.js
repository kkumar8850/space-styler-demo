import Link from 'next/link'
import React from 'react'
var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery")
}
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Button from '../../UIComponent/Button'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import renovationImage from '../../../public/Images/renovation.jpeg'
import spacePlanningImage from '../../../public/Images/spacePlanning.jpeg'
import DesignImage from '../../../public/Images/2d_3d_design.jpeg'
import constructionImage from '../../../public/Images/construction.jpeg'
import projectManagementImage from '../../../public/Images/projectManagement.jpeg'
import turnkeyImage from '../../../public/Images/turnkey.jpeg'

const OwlCarousel = dynamic(()=> import('react-owl-carousel'), {ssr : false})

function OurServices() {
  return (
    <div className='container py-[100px]'>
        <div className='grid lg:grid-cols-2 gap-8 sm:grid-col-1'>
          <p className='text-secondary text-2xl xl:hidden lg:hidden mb-4 sm:block xs:block text-center'>Our Services</p>
            {/* <div className='lg:h-[100%] xs:h-[400px] w-[75%] mx-auto sm:w-[100vw] xs:w-[100vw]'>
              <div className='lg:block md:block h-[inherit]'> */}
                <OwlCarousel
                  className="h-[400px] w-[100%]"
                  nav
                  items={1}
                  loop
                  responsive={{
                    0 : {
                      items : 1
                    },
                    600 : {
                      items : 1
                    },
                    1000 : {
                      items : 1
                    }
                  }}  
                >
                  <div className='item h-[inherit]'>
                    <div className='border-2 border-secondary p-[20px] h-full'>
                    <Image
                      src={renovationImage}
                      alt="image"
                      fill
                    />
                    </div>
                  </div>
                  <div className='item h-[inherit]'>
                    <div className='border-2 border-secondary p-[20px] h-full'>
                    <Image
                      src={spacePlanningImage}
                      alt="image"
                      fill
                    />
                    </div>
                  </div>
                  <div className='item h-[inherit]'>
                    <div className='border-2 border-secondary p-[20px] h-full'>
                    <Image
                      src={DesignImage}
                      alt="image"
                      fill
                    />
                    </div>
                  </div>
                  <div className='item h-[inherit]'>
                    <div className='border-2 border-secondary p-[20px] h-full'>
                    <Image
                      src={constructionImage}
                      alt="image"
                      fill
                    />
                    </div>
                  </div>
                  <div className='item h-[inherit]'>
                    <div className='border-2 border-secondary p-[20px] h-full'>
                    <Image
                      src={projectManagementImage}
                      alt="image"
                      fill
                    />
                    </div>
                  </div>
                  <div className='item h-[inherit]'>
                    <div className='border-2 border-secondary p-[20px] h-full'>
                    <Image
                      src={turnkeyImage}
                      alt="image"
                      fill
                    />
                    </div>
                  </div>
                </OwlCarousel>
              {/* </div>
            </div> */}
            <div> 
                <p className='hidden text-secondary text-2xl mb-4 lg:block xl:block md:block'>Our Services</p>
                <p className='text-5xl font-semibold mb-2 leading-14'>We offer a wide range of Services and Provide Complete Client Satisfaction.</p>
                <div className='py-4 text-center'>
                  <Button>
                    <Link href="/our-services">
                    Space Planning
                    </Link>
                  </Button>
                  <Button>
                  <Link href="/our-services">
                    2D - 3D Design
                    </Link>
                  </Button>
                  <Button>
                  <Link href="/our-services">
                    Renovation
                    </Link>
                  </Button>
                  <Button>
                  <Link href="/our-services">
                    Construction
                    </Link>
                  </Button>
                  <Button>
                  <Link href="/our-services">
                    Project Management
                    </Link>
                  </Button>
                  <Button>
                  <Link href="/our-services">
                    Turnkey (Design + Execution)
                    </Link>
                  </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurServices