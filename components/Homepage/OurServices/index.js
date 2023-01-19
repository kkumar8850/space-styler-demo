import Link from 'next/link'
import React from 'react'
import Banner from '../../Banner/Banner'
import Button from '../../UIComponent/Button'

function OurServices() {
  return (
    <div className='container py-[100px]'>
        <div className='grid lg:grid-cols-2 gap-8 xs:grid-col-1'>
            <div className='h-[300px] w-[75%] mx-auto'>
              <p className='text-secondary text-2xl xl:hidden lg:hidden mb-4 sm:block xs:block text-center'>Our Services</p>
              <Banner h={400} />
            </div>
            <div>
                <p className='hidden text-secondary text-2xl mb-4 lg:block xl:block md:block'>Our Services</p>
                <p className='text-5xl font-semibold mb-2 leading-14'>We offer a wide range of Services and Provide Complete Client Satisfaction.</p>
                <div className='py-4 text-center'>
                  <Button>
                    <Link href="/services/space-planning">
                    Space Planning
                    </Link>
                  </Button>
                  <Button>
                  <Link href="/services/2d-3d-design">
                    2D - 3D Design
                    </Link>
                  </Button>
                  <Button>
                  <Link href="/services/renovation">
                    Renovation
                    </Link>
                  </Button>
                  <Button>
                  <Link href="/services/construction">
                    Construction
                    </Link>
                  </Button>
                  <Button>
                  <Link href="/services/project-management">
                    Project Management
                    </Link>
                  </Button>
                  <Button>
                  <Link href="/services/turnkey">
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