import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header/Header'
import Image2 from '../../public/Images/2.jpg'
import KitchenType from '@/components/ModularKitchenPage/TypesOfKitchen/KitchenType'
import KitchenFinishes from '@/components/ModularKitchenPage/KitchenFinishes/KitchenFinishes'
import Footer from '@/components/Footer'

function ModularKitchen() {
  return (
    <div>
        <Header/>
        <div className='py-[20px]'>
            <h1 
                className='text-center text-secondary text-3xl font-semibold mb-[20px]'>
                    Modular Kitchen
            </h1>
            <div 
                className='h-[70vh]' 
                style={{
                    backgroundImage : `url(/Images/2.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition:'center',
                    backgroundSize : 'cover'
                }}>
            </div>
        </div>
        <div className='container py-[20px] text-xl'>
            <p>Alongside a team of experts offering support and design advice from the first click through to white-glove delivery and installation, LuxDeco also provides an interior design studio service with expertise ranging from full-service residential and hospitality projects to product sourcing and bespoke furniture design, using best-in-class digital technology and industry tools.
            Alongside a team of experts offering support and design advice from the first click through to white-glove delivery and installation, LuxDeco also provides an interior design studio service with expertise ranging from full-service residential and hospitality projects to product sourcing and bespoke furniture design, using best-in-class digital technology and industry tools.
            </p>
        </div>
        <KitchenType />
        <KitchenFinishes />
        <Footer />
    </div>
  )
}

export default ModularKitchen