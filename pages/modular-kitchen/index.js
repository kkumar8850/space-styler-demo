import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header/Header'
import Image2 from '../../public/Images/2.jpg'
import KitchenType from '@/components/ModularKitchenPage/TypesOfKitchen/KitchenType'
import KitchenFinishes from '@/components/ModularKitchenPage/KitchenFinishes/KitchenFinishes'
import Footer from '@/components/Footer'
import Head from 'next/head'

function ModularKitchen() {
  return (
    <div>
        <Head>
            <title>Modular Kitchen</title>
        </Head>
        <Header/>
        <div className='pt-[20px]'>
            <h1 
                className='text-center text-secondary text-3xl font-semibold my-[20px]'>
                    Modular Kitchen
            </h1>
            <div 
                className="h-[70vh] bg-[url('/Images/2.jpg')]"
                style={{
                    backgroundImage : `url(/Images/2.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition:'center',
                    backgroundSize : 'cover'
                }}>
            </div>
        </div>
        <div className='container py-[30px]'>
            <h1 className='text-3xl mb-2'>“The Kitchen is the heart of the home.”</h1>
            <p className='text-xl mb-2'>
            {`At Space Styler, kitchen design is the process of combining layout, surfaces and design details to form a cooking space that’s easy to use and fun to cook and socialize in.
We master in the art of creating a work triangle {between your refrigerator, sink and cook top} providing adequate storage and ensuring a sizeable clear surface for food preparation.`}
            </p>
            <p className='text-xl'>
            Awe-inspiring designs, gorgeous countertops, unique backsplashes, statement lighting all coming your way with Space Styler kitchen.
            </p>
        </div>
        <KitchenType />
        {/* <KitchenFinishes /> */}
        <Footer />
    </div>
  )
}

export default ModularKitchen