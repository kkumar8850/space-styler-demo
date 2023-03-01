import React from 'react'

function Numbers() {
  return (
    <div className='container py-8'>
        <p className='text-center text-2xl text-secondary mb-10'>Our Stats</p>
        <div className='grid lg:grid-cols-4 sm:grid-cols-1 bg-[#333] py-[20px] rounded-lg'>
            <div className='text-center lg:border-r-2 border-white xs:border-r-0 sm:border-r-0 mb-4'>
                <p className='text-[100px] text-secondary mb-0 leading-[80px]'>62</p>
                <p className='text-lg'>Clients</p>
            </div>
            <div className='text-center lg:border-r-2 xs:border-r-0 sm:border-r-0 mb-4'>
                <p className='text-[100px] text-secondary mb-0 leading-[80px]'>102</p>
                <p className='text-lg'>Completed Projects</p>
            </div>
            <div className='text-center lg:border-r-2 xs:border-r-0 sm:border-r-0 mb-4'>
                <p className='text-[100px] text-secondary mb-0 leading-[80px]'>10</p>
                <p className='text-lg'>Ongoing Projects</p>
            </div>
            <div className='text-center lg:border-r-0 xs:border-r-0 sm:border-r-0 mb-4'>
                <p className='text-[100px] text-secondary mb-0 leading-[80px]'>5</p>
                <p className='text-lg'>Cities</p>
            </div>
        </div>
    </div>
  )
}

export default Numbers