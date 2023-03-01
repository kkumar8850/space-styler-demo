import React from 'react'
import Image1 from '../../public/Images/1.jpg'

function IntroVideo() {
  return (
    <div className='h-[450px]' style={{
        backgroundImage : `url(/Images/1.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center',
        backgroundSize : 'cover'
    }}>
        <div style={{background : 'rgba(0, 0, 0, 0.4)'}}>
            <div className='h-[450px] container'>
                <div className='flex h-[inherit] items-center'>
                    <div>
                        <p className='text-4xl mb-[10px] font-semibold'>Space Styler</p>
                        <p className='text-2xl'>Transforming Spaces in style</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IntroVideo