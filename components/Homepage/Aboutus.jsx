import React from 'react'

function Aboutus() {
  return (
    <div className='container mt-4 py-[40px] text-center'>
      <p className='text-secondary text-3xl font-semibold text-center mb-2'>About us</p>
      <p className='text-center'>Established in 2008, our interior design studio has redefined a new benchmark for remarkable interiors and exquisite furnishings. We truly believe that good quality design is life enhancing and deliver it in every project we undertake.</p>
      <a href="/about-us" className='mt-4 inline-block bg-secondary px-4 py-2 rounded-3xl text-primary'>
        Read more
      </a>
    </div>
  )
}

export default Aboutus