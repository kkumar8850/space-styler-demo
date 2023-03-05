import Header from '@/components/Header/Header'
import React from 'react'
import { MdOutlineUpcoming } from 'react-icons/md'

function gallery() {
  return (
    <div>
        <Header />
        <div className='container h-[70vh] flex items-center justify-center'>
            <div>
                <MdOutlineUpcoming className='text-[80px] mx-auto'/>
                <h1 className='text-5xl mt-[20px]'>Coming Soon</h1>
            </div>
        </div>
    </div>
  )
}

export default gallery