import React from 'react'
import Image from 'next/image'
import Chair from '../../public/Images/chair.png'
import styles from '../../styles/aboutus.module.css'

function Specialization() {
  return (
    <div className='container'>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8'>
            <div className="shadow-slate-200 border-white border-2 text-center py-[20px] rounded-lg">
                <Image
                    src={Chair}
                    alt="chair"
                    className='mx-auto'
                />
                <p className='text-2xl font-semibold'>Furniture</p>
            </div>
            <div className="shadow-slate-200 border-white border-2 text-center py-[20px] rounded-lg">
                <Image
                    src={Chair}
                    alt="chair"
                    className='mx-auto'
                />
                <p className='text-2xl font-semibold'>Furniture</p>
            </div>
            <div className="shadow-slate-200 border-white border-2 text-center py-[20px] rounded-lg">
                <Image
                    src={Chair}
                    alt="chair"
                    className='mx-auto'
                />
                <p className='text-2xl font-semibold'>Furniture</p>
            </div>
        </div>
    </div>
  )
}

export default Specialization