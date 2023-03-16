import React from 'react'
import Image1 from '../../public/Images/1.jpg'

function IntroVideo() {
  return (
    <div className='h-[500px]' style={{
        backgroundImage : `url(/Images/1.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center',
        backgroundSize : 'cover'
    }}>
        <div>
            <div className='h-[500px] bg-[rgba(255,255,255,0.3)] container flex items-center justify-center'>
              {/* <div className='text-center bg-[rgba(0,0,0,0.9)] h-[80%] w-[40%] rounded-full flex items-center justify-center'>
                <div>
                  <h1 className='text-4xl text-secondary'>Our profile is unmatched.</h1>
                  <p className=' w-[80%] mx-auto text-white'>Established in 2008, our interior design studio has redefined a new benchmark for remarkable interiors and exquisite furnishings. We truly believe that good quality design is life enhancing and deliver it in every project we undertake.</p>
                </div>
              </div> */}
            </div>
        </div>
    </div>
  )
}

export default IntroVideo